import { NextResponse } from 'next/server';
import { HfInference } from '@huggingface/inference';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY; // Tu token de Hugging Face (hf_...)
    if (!apiKey) {
      return NextResponse.json({ reply: 'Configura tu token de Hugging Face en Vercel.' });
    }

    // Inicializamos el cliente oficial y gratuito de Hugging Face
    const hf = new HfInference(apiKey);

    const response = await hf.chatCompletion({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      messages: [
        {
          role: 'system',
          content: 'Eres Praxia, una asistente virtual y coach de desarrollo profesional amigable, experta en empleabilidad para estudiantes universitarios y enfocada en prácticas profesionales y primer empleo en UNIMINUTO. Responde de forma cálida, empática, concisa y orientada a la acción.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 250,
      temperature: 0.7
    });

    const text = response.choices?.[0]?.message?.content || "¡Hola! Estoy lista para ayudarte con tus prácticas en UNIMINUTO.";

    return NextResponse.json({ reply: text.trim() });
  } catch (error: any) {
    console.error('Error crítico con Hugging Face:', error?.message || error);
    return NextResponse.json({ reply: `Error de IA: ${error?.message || 'Fallo de conexión'}` });
  }
}
