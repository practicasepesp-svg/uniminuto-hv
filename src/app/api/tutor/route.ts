import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: 'Configura tu clave de API en Vercel.' });
    }

    // Petición gratuita a OpenRouter usando el modelo libre actualizado y disponible
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://uniminuto-hv.vercel.app',
        'X-Title': 'Centro Progresa HV',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          {
            role: 'system',
            content: 'Eres Praxia, una asistente virtual y coach de desarrollo profesional amigable, experta en empleabilidad para estudiantes universitarios y enfocada en prácticas profesionales y primer empleo en UNIMINUTO. Responde de forma cálida, empática, concisa y orientada a la acción.'
          },
          {
            role: 'user',
            content: message
          }
        ]
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de OpenRouter:', data);
      return NextResponse.json({ reply: `Error de IA: ${data.error?.message || 'Fallo de conexión'}` });
    }

    const text = data.choices?.[0]?.message?.content || "¡Hola! Estoy lista para ayudarte con tus prácticas en UNIMINUTO.";

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Error crítico en API Tutor:', error?.message || error);
    return NextResponse.json({ reply: `Error de servidor: ${error?.message || 'Fallo de conexión'}` });
  }
}
