import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje en la solicitud' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY no está configurada en las variables de entorno.");
      return NextResponse.json({ reply: 'Error de configuración: La clave de la IA no está disponible en el servidor.' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Eres Praxia, una asistente virtual y coach de desarrollo profesional amigable, experta en empleabilidad para estudiantes universitarios y enfocada en prácticas profesionales y primer empleo. Responde de forma cálida, empática, concisa y orientada a la acción. Pregunta del estudiante: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Error detallado en la API del tutor:', error);
    return NextResponse.json({ reply: 'Lo siento, tuve un pequeño inconveniente procesando tu mensaje. ¡Inténtalo de nuevo en un momento!' });
  }
}
