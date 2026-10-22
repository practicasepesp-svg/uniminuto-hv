import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Inicializa el cliente usando la clave secreta de las variables de entorno
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { prompt, type } = await req.json();

    let systemInstruction = "Eres un experto asesor de empleabilidad del Centro Progresa de UNIMINUTO. Ayudas a estudiantes universitarios a redactar hojas de vida profesionales orientadas a prácticas profesionales.";

    if (type === "profile") {
      systemInstruction += " Mejora el siguiente perfil ocupacional para que sea profesional, atractivo para reclutadores y formal.";
    } else if (type === "experience") {
      systemInstruction += " Mejora y formatea las siguientes funciones laborales usando viñetas (bullet points) con verbos de acción.";
    }

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [prompt],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return NextResponse.json({ result: response.text });
  } catch (error) {
    console.error("Error al generar con Gemini:", error);
    return NextResponse.json({ error: "No se pudo generar la sugerencia." }, { status: 500 });
  }
}
