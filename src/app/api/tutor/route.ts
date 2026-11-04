import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = (body.message || '').toLowerCase();

    if (!message) {
      return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
    }

    let reply = "";

    // Detección de programas o áreas académicas específicas
    const isIngenieria = message.includes('ingenieria') || message.includes('ingeniero') || message.includes('sistemas') || message.includes('software');
    const isSociales = message.includes('comunicacion') || message.includes('periodismo') || message.includes('psicologia') || message.includes('trabajo social');
    const isAdministrativa = message.includes('administracion') || message.includes('contaduria') || message.includes('finanzas') || message.includes('negocios');
    const isSalud = message.includes('enfermeria') || message.includes('salud') || message.includes('fisioterapia');

    // 1. Perfiles Profesionales Dinámicos por Área
    if (message.includes('perfil') || message.includes('resumen') || message.includes('ocupacional') || message.includes('ejemplo')) {
      if (isIngenieria) {
        reply = `✨ **Ejemplo de Perfil Profesional - Ingeniería / Software (UNIMINUTO):**\n\n> "Estudiante de décimo semestre de Ingeniería en UNIMINUTO, con sólida formación en desarrollo de software, gestión de bases de données y optimización de procesos tecnológicos. Apasionado por la resolución de problemas lógicos, el trabajo en equipos ágiles y la implementación de soluciones digitales innovadoras que generen valor operativo."`;
      } else if (isSociales) {
        reply = `✨ **Ejemplo de Perfil Profesional - Ciencias Sociales / Humanas (UNIMINUTO):**\n\n> "Estudiante de último semestre en UNIMINUTO, con enfoque en intervención psicosocial, gestión de proyectos comunitarios y comunicación estratégica. Con gran capacidad de escucha activa, empatía y liderazgo en equipos interdisciplinarios, orientada al desarrollo humano y social sostenible."`;
      } else if (isAdministrativa) {
        reply = `✨ **Ejemplo de Perfil Profesional - Áreas Administrativas / Financieras (UNIMINUTO):**\n\n> "Estudiante de Administración de Empresas / Contaduría Pública en UNIMINUTO, con competencias en análisis financiero, planeación estratégica y optimización de recursos organizacionales. Orientado a resultados, con capacidad analítica y liderazgo para la toma de decisiones gerenciales."`;
      } else {
        reply = `✨ **Fórmula Universal para el Perfil Profesional en UNIMINUTO:**\n\n• **Estructura ideal:** [Tu programa o carrera] + [2 o 3 competencias o habilidades clave] + [Tu enfoque o valor que aportas].\n\n*Ejemplo:* Estudiante de último semestre en UNIMINUTO, con sólida formación académica y habilidades en resolución de problemas. Apasionado por la innovación y orientado a cumplir con excelencia los objetivos organizacionales.\n\n*(Dime el nombre exacto de tu carrera y te genero un perfil personalizado).*`;
      }

    // 2. Guía para Formación Académica
    } else if (message.includes('formacion') || message.includes('academica') || message.includes('estudio') || message.includes('universidad') || message.includes('semestre')) {
      reply = `🎓 **Guía de Formación Académica - Centro Progresa:**\n\n• **Orden cronológico inverso:** Coloca siempre lo más reciente o tu carrera actual en la parte superior.\n• **Formato UNIMINUTO:** Indica claramente el título exacto a obtener (ej. *Profesional en...*), selecciona que está **En curso** y menciona el semestre actual en el que te encuentras.\n• **Complementaria:** Añade diplomados, cursos virtuales o certificaciones cortas obtenidas recientemente.`;

    // 3. Guía para Experiencia / Funciones / Proyectos
    } else if (message.includes('experiencia') || message.includes('funcion') || message.includes('trabajo') || message.includes('laboral') || message.includes('proyecto') || message.includes('logro')) {
      reply = `💼 **Guía para Describir Experiencia o Proyectos Académicos:**\n\n• **Usa verbos de acción al iniciar:** (ej. *Diseñé, Coordiné, Implementé, Analicé, Administré*).\n• **Si no tienes experiencia laboral formal:** Destaca tus **Proyectos Académicos** más importantes de la universidad usando la misma estructura profesional (Cargo/Rol, Contexto y Resultados).\n• **Evita:** Listas largas de tareas aburridas; enfócate en el impacto o las herramientas que utilizaste.`;

    // 4. Guía para Entrevistas y Prácticas
    } else if (message.includes('entrevista') || message.includes('empleo') || message.includes('practica') || message.includes('consejo') || message.includes('cv')) {
      reply = `🎯 **Tips de Coach para tu Entrevista de Prácticas:**\n\n• **Prepárate con tus proyectos:** Los reclutadores valoran mucho la actitud proactiva y los casos prácticos que resolviste en la universidad.\n• **Conoce a la empresa:** Investiga a qué se dedica la organización antes de la entrevista.\n• **Comunícate con Centro Progresa:** Recuerda aprovechar todas las ofertas institucionales y canales oficiales de UNIMINUTO.`;

    // 5. Respuesta abierta general
    } else {
      reply = `¡Hola! Soy **Praxia**, tu coach de empleabilidad en Centro Progresa (UNIMINUTO). 

Estoy lista para guiarte en cualquier escenario para tu hoja de vida o tus prácticas:
• Pídeme perfiles para **cualquier carrera** (Ingeniería, Psicología, Contaduría, Comunicación, etc.).
• Consúltame cómo redactar **funciones o proyectos académicos**.
• Pregúntame sobre el orden de tu **formación**.
• Pide tips para tu **entrevista laboral**.

¿Qué escenario o carrera quieres que revisemos ahora mismo?`;
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ reply: '¡Hola! Estoy aquí para apoyarte en tu proceso con Centro Progresa. ¿En qué te puedo ayudar hoy?' });
  }
}
