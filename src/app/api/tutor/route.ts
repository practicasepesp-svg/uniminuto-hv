import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = (body.message || '').toLowerCase();

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
    }

    let reply = "";

    // 1. Guía para Formación Académica
    if (message.includes('formacion') || message.includes('academica') || message.includes('estudio') || message.includes('universidad')) {
      reply = "🎓 **Guía de Formación Académica - Centro Progresa:**\n\n• **Orden:** Organiza tu formación en **orden cronológico inverso** (lo más reciente o en curso primero).\n• **UNIMINUTO:** Destaca siempre tu programa actual marcando si está *En curso*, indicando el semestre en el que vas y el título exacto a obtener (Ej. Administración de Empresas).\n• **Complementaria:** Añade cursos, diplomados o talleres relevantes y recientes que sumen valor a tu perfil profesional.";
    
    // 2. Guía para Experiencia Profesional / Funciones
    } else if (message.includes('experiencia') || message.includes('funcion') || message.includes('trabajo') || message.includes('laboral')) {
      reply = "💼 **Guía de Experiencia y Funciones:**\n\n• **Redacción por logros:** No te limites a listar tareas aburridas; usa verbos de acción al inicio (ej. *Diseñé, Coordiné, Analicé, Optimicé*).\n• **Estructura ideal:** Menciona el cargo, la empresa, las fechas y 2 o 3 viñetas destacando qué impacto lograste o qué herramientas utilizaste.\n• **Sin experiencia previa:** ¡No te preocupes! Enfócate en tus **proyectos académicos**, prácticas de aula o voluntariados aplicando el mismo rigor profesional.";

    // 3. Guía para Perfil Profesional
    } else if (message.includes('perfil') || message.includes('resumen') || message.includes('ocupacional')) {
      reply = "✨ **Guía para el Perfil Profesional:**\n\n• Debe ser un párrafo corto (de 3 a 4 líneas) al inicio de tu hoja de vida.\n• **Fórmula recomendada:** [Tu rol / Programa en UNIMINUTO] + [Tus fortalezas y habilidades clave] + [Lo que te apasiona y el valor que aportas a las organizaciones].\n• *Ejemplo:* Estudiante de décimo semestre de Contaduría Pública en UNIMINUTO, con sólidos conocimientos en análisis financiero y normatividad tributaria. Apasionado por la optimización de procesos contables y orientado a resultados.";

    // 4. Guía para Entrevistas / Primer Empleo
    } else if (message.includes('entrevista') || message.includes('empleo') || message.includes('consejo') || message.includes('cv')) {
      reply = "🎯 **Consejos de Coach para tu Primer Empleo:**\n\n• **Seguridad:** Destaca tus proyectos universitarios como casos de éxito reales.\n• **Presentación:** Mantén una postura abierta, escucha con atención al reclutador y sé muy claro sobre tu disponibilidad para iniciar la práctica con el apoyo de Centro Progresa.\n• ¿En qué sección específica de tu hoja de vida necesitas ayuda en este momento?";

    // 5. Respuesta por defecto orientada al rol de coach institucional
    } else {
      reply = `¡Hola! Soy **Praxia**, tu coach de empleabilidad en Centro Progresa (UNIMINUTO). 

Estoy aquí para ayudarte a construir una hoja de vida impecable. Puedes preguntarme sobre:
• Cómo redactar tu **perfil profesional**.
• El orden correcto de tu **formación académica**.
• Cómo describir tus **funciones y logros** en experiencia o proyectos.
• Consejos para tu entrevista de **prácticas profesionales**.

¿Sobre qué sección te gustaría que trabajemos ahora?`;
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ reply: '¡Hola! Estoy lista para guiarte en tu proceso con Centro Progresa. ¿En qué te puedo ayudar hoy?' });
  }
}
