import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Inicializar Gemini con la llave secreta configurada en Vercel
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
    }

    // Usamos gemini-1.5-flash por su rapidez y alta eficiencia en chats en tiempo real
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `Eres el "Tutor Progresa", un coach de empleabilidad y mentor virtual del Centro Progresa E.P.E. de UNIMINUTO (Rectoría Bogotá). 
      Tu tono es cálido, empático, maternal, profesional y muy motivador. 
      Ayudas a los estudiantes a redactar de forma excelente su hoja de vida, perfilar sus habilidades profesionales y prepararse para sus prácticas. 
      Responde de forma concisa, práctica, amigable y orientada a la acción.`,
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error('Error en el tutor AI:', error);
    return NextResponse.json({ error: 'Error procesando la solicitud del tutor' }, { status: 500 });
  }
}
