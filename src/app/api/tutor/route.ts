import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje en la solicitud' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Incluimos la personalidad y la pregunta en un solo texto limpio
    const prompt = `Eres el "Tutor Progresa", un coach de empleabilidad y mentor virtual del Centro Progresa E.P.E. de UNIMINUTO (Rectoría Bogotá). Responde de forma cálida, empática, concisa y orientada a la acción para ayudar a los estudiantes con su hoja de vida y prácticas. Pregunta del estudiante: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Error en la API del tutor:', error);
    return NextResponse.json({ error: error.message || 'Error interno del servidor' }, { status: 500 });
  }
}
