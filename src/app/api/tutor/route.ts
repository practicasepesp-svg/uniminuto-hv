import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY; // Puedes usar esta misma variable para tu Token de Hugging Face
    if (!apiKey) {
      return NextResponse.json({ reply: 'Configura tu token de Hugging Face en Vercel.' });
    }

    // Usamos la API pública y gratuita de Hugging Face con un modelo estable de Mistral o Llama
    const response = await fetch(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: `<s>[INST] Eres Praxia, una asistente virtual y coach de desarrollo profesional amigable, experta en empleabilidad para estudiantes universitarios y enfocada en prácticas profesionales y primer empleo en UNIMINUTO. Responde de forma cálida, empática, concisa y orientada a la acción. Pregunta: ${message} [/INST]`,
          parameters: {
            max_new_tokens: 250,
            temperature: 0.7,
            return_full_text: false
          }
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de Hugging Face:', data);
      return NextResponse.json({ reply: `Error de IA: ${data.error || 'Fallo de conexión'}` });
    }

    // Hugging Face devuelve un array con la respuesta
    const text = data[0]?.generated_text || data.generated_text || "¡Hola! Estoy lista para ayudarte con tus prácticas en UNIMINUTO.";

    return NextResponse.json({ reply: text.trim() });
  } catch (error: any) {
    console.error('Error crítico en API Tutor:', error?.message || error);
    return NextResponse.json({ reply: `Error de servidor: ${error?.message || 'Fallo de conexión'}` });
  }
}
