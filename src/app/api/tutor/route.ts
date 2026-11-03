import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: 'Configura la variable GEMINI_API_KEY en Vercel.' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // Cambiamos al modelo compatible con la API v1
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

    const prompt = `Eres Praxia, una asistente virtual y coach de desarrollo profesional amigable, experta en empleabilidad para estudiantes universitarios y enfocada en prácticas profesionales y primer empleo en UNIMINUTO. Responde de forma cálida, empática, concisa y orientada a la acción. Pregunta del estudiante: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Error crítico en API Tutor:', error?.message || error);
    return NextResponse.json({ reply: `Error de IA: ${error?.message || 'Fallo de conexión'}` });
  }
}
