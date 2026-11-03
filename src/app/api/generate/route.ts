import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje en la solicitud' }, { status: 400 });
    }

    // Inicializamos el modelo de forma limpia sin propiedades inválidas
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Unimos el rol institucional directamente en el texto que se le envía a Gemini
    const promptCompleto = `
      Eres el "Tutor Progresa", un coach de empleabilidad y mentor virtual del Centro Progresa E.P.E. de UNIMINUTO (Rectoría Bogotá). 
      Tu tono es cálido, empático, profesional y muy motivador. 
      Ayudas a los estudiantes a redactar de forma excelente su hoja de vida, perfilar sus habilidades profesionales y prepararse para sus prácticas. 
      Responde de forma concisa, práctica, amigable y orientada a la acción.

      Pregunta del estudiante: ${message}
    `;

    const result = await model.generateContent(promptCompleto);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Error en la API del tutor:', error);
    return NextResponse.json({ error: error.message || 'Error interno del servidor' }, { status: 500 });
  }
}
