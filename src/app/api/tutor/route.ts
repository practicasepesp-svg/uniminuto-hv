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
      return NextResponse.json({ reply: 'Configura la variable GEMINI_API_KEY en Vercel.' });
    }

    // Usamos el modelo oficial actual solicitado por la API de Google
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Eres Praxia, una asistente virtual y coach de desarrollo profesional amigable, experta en empleabilidad para estudiantes universitarios y enfocada en prácticas profesionales y primer empleo en UNIMINUTO. Responde de forma cálida, empática, concisa y orientada a la acción. Pregunta del estudiante: ${message}`
              }
            ]
          }
        ]
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de la API de Google:', data);
      return NextResponse.json({ reply: `Error de API: ${data.error?.message || 'Fallo desconocido de Google'}` });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "¡Hola! Estoy lista para ayudarte con tus prácticas en UNIMINUTO.";

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Error crítico en API Tutor:', error?.message || error);
    return NextResponse.json({ reply: `Error de IA: ${error?.message || 'Fallo de conexión'}` });
  }
}
