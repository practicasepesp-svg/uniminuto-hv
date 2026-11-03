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

    const prompt = `Eres un Coach de Desarrollo Profesional amigable y experto en empleabilidad para estudiantes universitarios. Ayúdalos de forma concisa, empática y orientada a la acción con su hoja de vida, habilidades y entrevistas. Pregunta del estudiante: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Error en la API del coach:', error);
    return NextResponse.json({ reply: 'Lo siento, tuve un pequeño inconveniente conectando con la IA. ¡Inténtalo de nuevo en un momento!' });
  }
}
