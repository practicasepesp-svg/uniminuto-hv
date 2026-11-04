"use client";
import { useState } from "react";
import { Printer, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Trash2, Plus, User, Cpu, Languages, HeartHandshake, Link as LinkIcon, BookOpen, Wrench, FolderGit2, CheckCircle, Globe, ShieldCheck, Code, ArrowRight, Info, Heart } from "lucide-react";

interface LinkItem {
  label: string;
  url: string;
}

interface ToolItem {
  name: string;
  level: string;
}

interface LanguageItem {
  language: string;
  level: string;
}

interface Education {
  institution: string;
  degree: string;
  level: string;
  year: string;
  isCurrent?: boolean;
  semester?: string;
}

interface ComplementaryEdu {
  title: string;
  institution: string;
  year: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Project {
  name: string;
  role: string;
  description: string;
  url?: string;
}

interface Volunteer {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Bogotá D.C.",
    links: [] as LinkItem[],
    profile: "",
    softSkills: "",
    toolsList: [] as ToolItem[],
    languageList: [] as LanguageItem[],
    education: [
      {
        institution: "Corporación Universitaria Minuto de Dios - UNIMINUTO",
        degree: "",
        level: "Profesional",
        year: "",
        isCurrent: true,
        semester: "",
      },
    ] as Education[],
    complementaryEdu: [] as ComplementaryEdu[],
    experiences: [] as Experience[],
    projects: [] as Project[],
    volunteers: [] as Volunteer[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addLink = () => {
    setFormData({ ...formData, links: [...formData.links, { label: "LinkedIn", url: "" }] });
  };
  const updateLink = (index: number, field: string, value: string) => {
    const list = [...formData.links];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, links: list });
  };
  const removeLink = (index: number) => {
    setFormData({ ...formData, links: formData.links.filter((_, i) => i !== index) });
  };

  const addTool = () => {
    setFormData({ ...formData, toolsList: [...formData.toolsList, { name: "", level: "Intermedio" }] });
  };
  const updateTool = (index: number, field: string, value: string) => {
    const list = [...formData.toolsList];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, toolsList: list });
  };
  const removeTool = (index: number) => {
    setFormData({ ...formData, toolsList: formData.toolsList.filter((_, i) => i !== index) });
  };

  const addLanguage = () => {
    setFormData({ ...formData, languageList: [...formData.languageList, { language: "", level: "B2 - Intermedio Alto" }] });
  };
  const updateLanguage = (index: number, field: string, value: string) => {
    const list = [...formData.languageList];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, languageList: list });
  };
  const removeLanguage = (index: number) => {
    setFormData({ ...formData, languageList: formData.languageList.filter((_, i) => i !== index) });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institution: "", degree: "", level: "Profesional", year: "", isCurrent: false, semester: "" }],
    });
  };
  const updateEducation = (index: number, field: string, value: any) => {
    const newEdu = [...formData.education];
    (newEdu[index] as any)[field] = value;
    setFormData({ ...formData, education: newEdu });
  };
  const removeEducation = (index: number) => {
    setFormData({ ...formData, education: formData.education.filter((_, i) => i !== index) });
  };

  const addComplementary = () => {
    setFormData({ ...formData, complementaryEdu: [...formData.complementaryEdu, { title: "", institution: "", year: "" }] });
  };
  const updateComplementary = (index: number, field: string, value: string) => {
    const list = [...formData.complementaryEdu];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, complementaryEdu: list });
  };
  const removeComplementary = (index: number) => {
    setFormData({ ...formData, complementaryEdu: formData.complementaryEdu.filter((_, i) => i !== index) });
  };

  const addExperience = () => {
    setFormData({ ...formData, experiences: [...formData.experiences, { company: "", position: "", startDate: "", endDate: "", description: "" }] });
  };
  const updateExperience = (index: number, field: string, value: string) => {
    const newExp = [...formData.experiences];
    (newExp[index] as any)[field] = value;
    setFormData({ ...formData, experiences: newExp });
  };
  const removeExperience = (index: number) => {
    setFormData({ ...formData, experiences: formData.experiences.filter((_, i) => i !== index) });
  };

  const addProject = () => {
    setFormData({ ...formData, projects: [...formData.projects, { name: "", role: "", description: "", url: "" }] });
  };
  const updateProject = (index: number, field: string, value: string) => {
    const list = [...formData.projects];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, projects: list });
  };
  const removeProject = (index: number) => {
    setFormData({ ...formData, projects: formData.projects.filter((_, i) => i !== index) });
  };

  const addVolunteer = () => {
    setFormData({ ...formData, volunteers: [...formData.volunteers, { organization: "", role: "", startDate: "", endDate: "", description: "" }] });
  };
  const updateVolunteer = (index: number, field: string, value: string) => {
    const list = [...formData.volunteers];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, volunteers: list });
  };
  const removeVolunteer = (index: number) => {
    setFormData({ ...formData, volunteers: formData.volunteers.filter((_, i) => i !== index) });
  };

  if (!started) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-slate-100 flex flex-col justify-between p-6 lg:p-12">
        <header className="max-w-6xl w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/rectoria-blanca.webp" alt="Rectoría Bogotá" className="h-8 object-contain" />
            <div className="h-6 w-px bg-slate-700"></div>
            <img src="/centro-progresa-blanco.webp" alt="Centro Progresa" className="h-8 object-contain" />
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Centro Progresa E.P.E.</p>
            <p className="text-[11px] text-slate-300">Prácticas Profesionales • UNIMINUTO</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto text-center space-y-6 my-auto py-12">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/50 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300">
            <span>✨ Herramienta Oficial de Empleabilidad</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Creador de Hoja de Vida <span className="text-amber-400">Institucional</span>
          </h1>
          <p className="text-slate-300 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Diseñado especialmente para estudiantes de UNIMINUTO Rectoría Bogotá que buscan postularse a sus prácticas profesionales con un formato impecable, compatible con ATS y 100% privado.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setStarted(true)}
              className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-sm lg:text-base px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 flex items-center gap-3 transition transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Comenzar a Crear mi Hoja de Vida</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <footer className="max-w-6xl w-full mx-auto text-center text-xs text-slate-500 border-t border-slate-800/80 pt-6">
          Corporación Universitaria Minuto de Dios • Vigilada Mineducación
        </footer>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col font-sans text-slate-100 print:bg-white print:min-h-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        body, input, select, textarea, button { font-family: 'Montserrat', sans-serif !important; }
        @media print {
          @page { size: letter; margin: 1cm; }
          body { background: white !important; -webkit-print-color-adjust: exact; font-family: 'Montserrat', sans-serif !important; }
          header, .print\\:hidden { display: none !important; }
          .resume-sheet { box-shadow: none !important; margin: 0 !important; width: 100% !important; max-width: none !important; border: none !important; font-family: 'Montserrat', sans-serif !important; }
          .print-atomic-item { break-inside: avoid; page-break-inside: avoid; }
          .print-section-title { break-after: avoid; page-break-after: avoid; }
          /* Forzar visibilidad y color de enlaces al imprimir en PDF */
          a { color: #1e3a8a !important; text-decoration: underline !important; }
        }
      `}</style>
      
      <header className="bg-blue-900 text-white px-6 py-4 print:hidden flex justify-between items-center border-b border-blue-800 shadow-xl">
        <div className="flex items-center gap-4">
          <button onClick={() => setStarted(false)} className="text-xs text-blue-200 hover:text-white bg-blue-800/60 hover:bg-blue-800 px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1">
            ← Volver al inicio
          </button>
          <div className="h-4 w-px bg-blue-700"></div>
          <div className="flex items-center gap-3">
            <img src="/rectoria-blanca.webp" alt="Rectoría Bogotá" className="h-6 object-contain" />
            <div className="h-4 w-px bg-blue-700"></div>
            <img src="/centro-progresa-blanco.webp" alt="Centro Progresa" className="h-6 object-contain" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white">Creador de Hoja de Vida Institucional</h1>
            <p className="text-xs text-blue-200">Centro Progresa E.P.E. • Prácticas Profesionales</p>
          </div>
        </div>
        <button onClick={() => window.print()} className="bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-black px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/20 transition transform active:scale-95">
          <Printer size={16} /> Descargar / Imprimir PDF
        </button>
      </header>

      <div className="flex-1 max-w-[1800px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start print:block print:p-0 print:m-0 print:w-full print:max-w-none">
        
        {/* PANEL IZQUIERDO: Formulario */}
        <div className="lg:col-span-5 bg-blue-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-800/80 overflow-hidden print:hidden flex flex-col max-h-[88vh] overflow-y-auto p-6 space-y-6">
          
          {/* SECCIÓN 1: INFORMACIÓN PERSONAL */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <User size={15}/> 1. Información Personal
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Nombre Completo</label>
              <input type="text" name="fullName" placeholder="Ej. Laura Sofía Martínez" value={formData.fullName} onChange={handleInputChange} className="w-full p-3 text-[12px] bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400 transition" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-blue-200 mb-1">Correo Electrónico</label>
                <input type="email" name="email" placeholder="correo@uniminuto.edu.co" value={formData.email} onChange={handleInputChange} className="w-full p-3 text-[12px] bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-blue-200 mb-1">Celular</label>
                <input type="text" name="phone" placeholder="300 123 4567" value={formData.phone} onChange={handleInputChange} className="w-full p-3 text-[12px] bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Ciudad</label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full p-3 text-[12px] bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" />
            </div>
            
            {/* Enlaces con botón al pie */}
            <div className="space-y-3 pt-2 border-t border-blue-900/60">
              <span className="text-[11px] font-bold text-blue-200 flex items-center gap-1"><LinkIcon size={13}/> Enlaces y Portafolios</span>
              {formData.links.map((link, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-blue-900/40 p-2.5 rounded-lg border border-blue-800">
                  <input type="text" placeholder="Red (Ej. LinkedIn)" value={link.label} onChange={(e) => updateLink(idx, "label", e.target.value)} className="w-1/3 p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <input type="text" placeholder="URL (linkedin.com/in/...)" value={link.url} onChange={(e) => updateLink(idx, "url", e.target.value)} className="flex-1 p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <button onClick={() => removeLink(idx)} className="text-rose-300 hover:text-rose-100 p-1"><Trash2 size={14}/></button>
                </div>
              ))}
              <div className="flex justify-end pt-1">
                <button onClick={addLink} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                  <Plus size={13}/> Añadir Enlace
                </button>
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: PERFIL PROFESIONAL */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <Award size={15}/> 2. Perfil Profesional
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Perfil Ocupacional</label>
              <textarea name="profile" rows={3} placeholder="Estudiante apasionado..." value={formData.profile} onChange={handleInputChange} className="w-full p-3 text-[12px] bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400 resize-none"></textarea>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Habilidades (separadas por comas)</label>
              <input type="text" name="softSkills" placeholder="Ej. Trabajo en equipo, Adaptabilidad, Liderazgo" value={formData.softSkills} onChange={handleInputChange} className="w-full p-3 text-[12px] bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" />
            </div>

            {/* Herramientas con botón al pie */}
            <div className="space-y-3 pt-2 border-t border-blue-900/60">
              <span className="text-[11px] font-bold text-blue-200 flex items-center gap-1"><Wrench size={13}/> Herramientas (Software / Apps)</span>
              {formData.toolsList.map((tool, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-blue-900/40 p-2.5 rounded-lg border border-blue-800">
                  <input type="text" placeholder="Ej. Python, Excel" value={tool.name} onChange={(e) => updateTool(idx, "name", e.target.value)} className="flex-1 p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <select value={tool.level} onChange={(e) => updateTool(idx, "level", e.target.value)} className="p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white">
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Experto">Experto</option>
                  </select>
                  <button onClick={() => removeTool(idx)} className="text-rose-300 hover:text-rose-100 p-1"><Trash2 size={14}/></button>
                </div>
              ))}
              <div className="flex justify-end pt-1">
                <button onClick={addTool} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                  <Plus size={13}/> Añadir Herramienta
                </button>
              </div>
            </div>

            {/* Idiomas con botón al pie */}
            <div className="space-y-3 pt-2 border-t border-blue-900/60">
              <span className="text-[11px] font-bold text-blue-200 flex items-center gap-1"><Languages size={13}/> Idiomas</span>
              {formData.languageList.map((lang, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-blue-900/40 p-2.5 rounded-lg border border-blue-800">
                  <input type="text" placeholder="Ej. Inglés, Francés" value={lang.language} onChange={(e) => updateLanguage(idx, "language", e.target.value)} className="flex-1 p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <select value={lang.level} onChange={(e) => updateLanguage(idx, "level", e.target.value)} className="p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white">
                    <option value="A1 - Principiante">A1 - Principiante</option>
                    <option value="A2 - Básico">A2 - Básico</option>
                    <option value="B1 - Intermedio">B1 - Intermedio</option>
                    <option value="B2 - Intermedio Alto">B2 - Intermedio Alto</option>
                    <option value="C1 - Avanzado">C1 - Avanzado</option>
                    <option value="C2 - Maestría / Nativo">C2 - Maestría / Nativo</option>
                  </select>
                  <button onClick={() => removeLanguage(idx)} className="text-rose-300 hover:text-rose-100 p-1"><Trash2 size={14}/></button>
                </div>
              ))}
              <div className="flex justify-end pt-1">
                <button onClick={addLanguage} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                  <Plus size={13}/> Añadir Idioma
                </button>
              </div>
            </div>
          </div>

          {/* SECCIÓN 3: FORMACIÓN */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <GraduationCap size={15}/> 3. Formación
            </h2>
            
            {/* Formación Académica */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-bold text-blue-200 block">Formación Académica</span>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="p-3 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2 relative">
                  {idx > 0 && (<button onClick={() => removeEducation(idx)} className="absolute top-2.5 right-2.5 text-rose-300 hover:text-rose-100"><Trash2 size={14}/></button>)}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-300">{idx === 0 ? "★ Formación Principal (UNIMINUTO)" : `Estudio #${idx + 1}`}</span>
                    <label className="flex items-center gap-1 text-[10px] text-blue-200 cursor-pointer">
                      <input type="checkbox" checked={edu.isCurrent || false} onChange={(e) => updateEducation(idx, "isCurrent", e.target.checked)} className="rounded bg-blue-950 border-blue-700" /> En curso
                    </label>
                  </div>
                  {idx === 0 ? (
                    <input type="text" disabled value="Corporación Universitaria Minuto de Dios - UNIMINUTO" className="w-full p-2 text-[12px] bg-blue-950/60 border border-blue-800/60 rounded text-blue-300 cursor-not-allowed" />
                  ) : (
                    <input type="text" placeholder="Institución" value={edu.institution} onChange={(e) => updateEducation(idx, "institution", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Título a obtener / Programa" value={edu.degree} onChange={(e) => updateEducation(idx, "degree", e.target.value)} className="p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                    <select value={edu.level} onChange={(e) => updateEducation(idx, "level", e.target.value)} className="p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white">
                      <option value="Bachiller">Bachiller</option>
                      <option value="Técnico">Técnico</option>
                      <option value="Tecnólogo">Tecnólogo</option>
                      <option value="Profesional">Profesional</option>
                      <option value="Especialización">Especialización</option>
                      <option value="Maestría">Maestría</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder={edu.isCurrent ? "Ej. Octavo Semestre" : "Año de grado (Ej. 2024)"} value={edu.year} onChange={(e) => updateEducation(idx, "year", e.target.value)} className="p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-1">
                <button onClick={addEducation} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                  <Plus size={13}/> Añadir Título
                </button>
              </div>
            </div>

            {/* Formación Complementaria con botón al pie */}
            <div className="space-y-3 pt-3 border-t border-blue-900/60">
              <span className="text-[11px] font-bold text-blue-200 block">Formación Complementaria</span>
              {formData.complementaryEdu.map((comp, idx) => (
                <div key={idx} className="p-3 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2 relative">
                  <button onClick={() => removeComplementary(idx)} className="absolute top-2.5 right-2.5 text-rose-300 hover:text-rose-100"><Trash2 size={14}/></button>
                  <input type="text" placeholder="Nombre del Curso o Taller" value={comp.title} onChange={(e) => updateComplementary(idx, "title", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Institución / Plataforma" value={comp.institution} onChange={(e) => updateComplementary(idx, "institution", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                    <input type="text" placeholder="Año (Ej. 2025)" value={comp.year} onChange={(e) => updateComplementary(idx, "year", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-1">
                <button onClick={addComplementary} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                  <Plus size={13}/> Añadir Curso / Taller
                </button>
              </div>
            </div>
          </div>

          {/* SECCIÓN 4: EXPERIENCIA PROFESIONAL */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <Briefcase size={15}/> 4. Experiencia Profesional
            </h2>
            
            {/* Experiencia Laboral con botón al pie */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-bold text-blue-200 block">Experiencia Laboral</span>
              {formData.experiences.map((exp, idx) => (
                <div key={idx} className="p-3 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2 relative">
                  <button onClick={() => removeExperience(idx)} className="absolute top-2.5 right-2.5 text-rose-300 hover:text-rose-100"><Trash2 size={14}/></button>
                  <input type="text" placeholder="Empresa" value={exp.company} onChange={(e) => updateExperience(idx, "company", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <input type="text" placeholder="Cargo" value={exp.position} onChange={(e) => updateExperience(idx, "position", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Inicio" value={exp.startDate} onChange={(e) => updateExperience(idx, "startDate", e.target.value)} className="p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                    <input type="text" placeholder="Fin (Actual)" value={exp.endDate} onChange={(e) => updateExperience(idx, "endDate", e.target.value)} className="p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  </div>
                  <textarea placeholder="Funciones (separadas por saltos de línea)..." rows={2} value={exp.description} onChange={(e) => updateExperience(idx, "description", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white resize-none"></textarea>
                </div>
              ))}
              <div className="flex justify-end pt-1">
                <button onClick={addExperience} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                  <Plus size={13}/> Añadir Experiencia
                </button>
              </div>
            </div>

            {/* Proyectos Académicos con botón al pie */}
            <div className="space-y-3 pt-3 border-t border-blue-900/60">
              <span className="text-[11px] font-bold text-blue-200 block">Proyectos Académicos</span>
              {formData.projects.map((proj, idx) => (
                <div key={idx} className="p-3 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2 relative">
                  <button onClick={() => removeProject(idx)} className="absolute top-2.5 right-2.5 text-rose-300 hover:text-rose-100"><Trash2 size={14}/></button>
                  <input type="text" placeholder="Nombre del Proyecto" value={proj.name} onChange={(e) => updateProject(idx, "name", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <input type="text" placeholder="Rol / Participación" value={proj.role} onChange={(e) => updateProject(idx, "role", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <input type="text" placeholder="Enlace (GitHub / Demo)" value={proj.url || ""} onChange={(e) => updateProject(idx, "url", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white" />
                  <textarea placeholder="Descripción del proyecto..." rows={2} value={proj.description} onChange={(e) => updateProject(idx, "description", e.target.value)} className="w-full p-2 text-[12px] bg-blue-950 border border-blue-800 rounded text-white resize-none"></textarea>
                </div>
              ))}
              <div className="flex justify-end pt-1">
                <button onClick={addProject} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                  <Plus size={13}/> Añadir Proyecto
                </button>
              </div>
            </div>
          </div>

          {/* SECCIÓN 5: VOLUNTARIADO */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <HeartHandshake size={15}/> 5. Voluntariado
            </h2>
            {formData.volunteers.map((vol, idx) => (
              <div key={idx} className="p-3.5 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2.5 relative">
                <button onClick={() => removeVolunteer(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Organización / Fundación" value={vol.organization} onChange={(e) => updateVolunteer(idx, "organization", e.target.value)} className="w-full p-2.5 text-[12px] bg-blue-950 border border-blue-800 rounded-lg text-white" />
                <input type="text" placeholder="Rol / Actividad" value={vol.role} onChange={(e) => updateVolunteer(idx, "role", e.target.value)} className="w-full p-2.5 text-[12px] bg-blue-950 border border-blue-800 rounded-lg text-white" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Inicio" value={vol.startDate} onChange={(e) => updateVolunteer(idx, "startDate", e.target.value)} className="p-2.5 text-[12px] bg-blue-950 border border-blue-800 rounded-lg text-white" />
                  <input type="text" placeholder="Fin" value={vol.endDate} onChange={(e) => updateVolunteer(idx, "endDate", e.target.value)} className="p-2.5 text-[12px] bg-blue-950 border border-blue-800 rounded-lg text-white" />
                </div>
                <textarea placeholder="Funciones o aportes realizados..." rows={2} value={vol.description} onChange={(e) => updateVolunteer(idx, "description", e.target.value)} className="w-full p-2.5 text-[12px] bg-blue-950 border border-blue-800 rounded-lg text-white resize-none"></textarea>
              </div>
            ))}
            <div className="flex justify-end pt-1">
              <button onClick={addVolunteer} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir Voluntariado
              </button>
            </div>
          </div>

        </div>

        {/* PANEL DERECHO: Vista Previa */}
        <div className="lg:col-span-7 bg-blue-950/90 p-6 rounded-2xl flex flex-col items-center shadow-2xl border border-blue-900 overflow-auto max-h-[88vh] print:p-0 print:m-0 print:bg-white print:overflow-visible print:max-h-none print:w-full print:shadow-none print:border-none">
          <div className="w-full flex justify-between items-center mb-4 print:hidden px-2 text-xs text-blue-200">
            <span className="font-semibold tracking-wide uppercase">📄 Vista Previa y Flujo Continuo</span>
            <span className="bg-blue-900 px-3 py-1 rounded-full border border-blue-800">Optimizado para Google Chrome</span>
          </div>

          <table className="resume-sheet bg-white text-slate-800 w-full max-w-[800px] shadow-[0_0_40px_rgba(0,0,0,0.4)] rounded-xl border-collapse" style={{ fontSize: '12px' }}>
            <tbody>
              <tr>
                <td className="p-[1.2cm] pb-0">
                  <div className="border-b-2 border-blue-900 pb-4 mb-5 flex flex-row justify-between items-center bg-white">
                    <div className="pr-4">
                      <h1 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight break-words">
                        {formData.fullName || "Nombre del Estudiante"}
                      </h1>
                      <p className="text-blue-900 font-bold text-[11px] uppercase tracking-widest mt-1">
                        Candidato a Práctica Profesional
                      </p>
                    </div>
                    <div className="flex items-center gap-4 bg-white flex-shrink-0">
                      <img src="/rectoria.webp" alt="Rectoría Bogotá" className="h-8 object-contain" />
                      <div className="h-6 w-px bg-slate-300"></div>
                      <img src="/centro-progresa.webp" alt="Centro Progresa" className="h-8 object-contain" />
                    </div>
                  </div>

                  {/* Enlaces con visibilidad garantizada al imprimir en PDF */}
                  <div className="flex flex-wrap justify-center items-center gap-4 text-[12px] text-slate-600 mb-5 pb-3 border-b border-slate-100 font-medium text-center">
                    {formData.email && <span className="flex items-center gap-1"><Mail size={12} className="text-blue-900"/> {formData.email}</span>}
                    {formData.phone && <span className="flex items-center gap-1"><Phone size={12} className="text-blue-900"/> {formData.phone}</span>}
                    {formData.city && <span className="flex items-center gap-1"><MapPin size={12} className="text-blue-900"/> {formData.city}</span>}
                    {formData.links.map((l, i) => (
                      l.url ? (
                        <a key={i} href={l.url.startsWith('http') ? l.url : `https://${l.url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-900 hover:underline font-semibold print:text-blue-900 print:underline">
                          <LinkIcon size={12} className="print:hidden" /> {l.label || "Enlace"}
                        </a>
                      ) : null
                    ))}
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-[1.2cm]">
                  
                  {/* Perfil Profesional */}
                  {(formData.profile || formData.softSkills || formData.toolsList.length > 0 || formData.languageList.length > 0) && (
                    <div className="mb-5 print-atomic-item">
                      <div className="relative flex items-center justify-center my-3 print-section-title">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #fbbf24 30%, #fbbf24 70%, transparent)' }}></div>
                        </div>
                        <h3 className="relative px-4 bg-white text-[13px] font-extrabold uppercase text-blue-950 tracking-wider">Perfil Profesional</h3>
                      </div>
                      {formData.profile && <p className="text-[12px] text-slate-700 text-justify leading-relaxed mb-3">{formData.profile}</p>}
                      
                      <table className="w-full text-[12px] mt-2 border-separate border-spacing-2">
                        <tbody>
                          <tr>
                            {formData.softSkills && (
                              <td className="w-1/3 bg-blue-50/60 p-2.5 rounded border border-blue-200 align-top">
                                <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-blue-900">
                                  <CheckCircle size={13}/> Habilidades:
                                </span>
                                <ul className="text-slate-700 space-y-0.5">
                                  {formData.softSkills.split(",").map((s, i) => {
                                    const trimmed = s.trim();
                                    return trimmed ? <li key={i}>• {trimmed}</li> : null;
                                  })}
                                </ul>
                              </td>
                            )}
                            {formData.toolsList.length > 0 && (
                              <td className="w-1/3 bg-blue-50/60 p-2.5 rounded border border-blue-200 align-top">
                                <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-blue-900">
                                  <Wrench size={13}/> Herramientas:
                                </span>
                                <ul className="text-slate-700 space-y-0.5">
                                  {formData.toolsList.map((t, i) => (
                                    <li key={i}>• {t.name} <span className="text-blue-900 font-semibold">({t.level})</span></li>
                                  ))}
                                </ul>
                              </td>
                            )}
                            {formData.languageList.length > 0 && (
                              <td className="w-1/3 bg-blue-50/60 p-2.5 rounded border border-blue-200 align-top">
                                <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-blue-900">
                                  <Globe size={13}/> Idiomas:
                                </span>
                                <ul className="text-slate-700 space-y-0.5">
                                  {formData.languageList.map((l, i) => (
                                    <li key={i}>• {l.language} <span className="text-blue-900 font-semibold">({l.level})</span></li>
                                  ))}
                                </ul>
                              </td>
                            )}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Formación */}
                  {formData.education.length > 0 && (
                    <div className="mb-5 pt-2 border-t border-slate-100">
                      <div className="relative flex items-center justify-center my-3 print-section-title">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #fbbf24 30%, #fbbf24 70%, transparent)' }}></div>
                        </div>
                        <h3 className="relative px-4 bg-white text-[13px] font-extrabold uppercase text-blue-950 tracking-wider">Formación</h3>
                      </div>
                      <div className="space-y-3 mb-3">
                        <span className="text-[11px] font-extrabold uppercase text-blue-950 block tracking-wide text-left border-b border-blue-200 pb-1 mb-2 print-section-title">Académica</span>
                        {formData.education.map((edu, i) => (
                          <div key={i} className="text-[12px] space-y-0.5 print-atomic-item mb-2">
                            <span className="font-black text-slate-900 uppercase block">
                              {edu.degree || "Título a obtener / Programa"} <span className="font-normal text-blue-900 normal-case">({edu.level})</span>
                            </span>
                            <span className="text-blue-900 font-semibold block capitalize">{edu.institution || "Institución"}</span>
                            <span className="text-slate-500 block text-[11px]">
                              {edu.isCurrent ? `En curso — ${edu.year || "Semestre actual"}` : edu.year}
                            </span>
                          </div>
                        ))}
                      </div>

                      {formData.complementaryEdu.length > 0 && (
                        <div className="space-y-3 pt-1">
                          <span className="text-[11px] font-extrabold uppercase text-blue-950 block tracking-wide text-left border-b border-blue-200 pb-1 mb-2 print-section-title">Complementaria</span>
                          {formData.complementaryEdu.map((comp, i) => (
                            <div key={i} className="text-[12px] space-y-0.5 print-atomic-item mb-2">
                              <span className="font-black text-slate-900 uppercase block">{comp.title || "Curso o Taller"}</span>
                              <span className="text-blue-900 font-semibold block capitalize">{comp.institution || "Institución"}</span>
                              <span className="text-slate-500 block text-[11px]">{comp.year}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Experiencia Profesional */}
                  {(formData.experiences.length > 0 || formData.projects.length > 0) && (
                    <div className="mb-5 pt-2 border-t border-slate-100">
                      <div className="relative flex items-center justify-center my-3 print-section-title">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #fbbf24 30%, #fbbf24 70%, transparent)' }}></div>
                        </div>
                        <h3 className="relative px-4 bg-white text-[13px] font-extrabold uppercase text-blue-950 tracking-wider">Experiencia Profesional</h3>
                      </div>
                      
                      {formData.experiences.length > 0 && (
                        <div className="space-y-3 mb-3">
                          <span className="text-[11px] font-extrabold uppercase text-blue-950 block tracking-wide text-left border-b border-blue-200 pb-1 mb-2 print-section-title">Laboral</span>
                          {formData.experiences.map((exp, i) => (
                            <div key={i} className="text-[12px] space-y-1.5 print-atomic-item mb-3">
                              <div>
                                <span className="font-black text-slate-900 uppercase block">{exp.position || "Cargo"}</span>
                                <span className="text-blue-900 font-semibold block capitalize">{exp.company || "Empresa"}</span>
                                <span className="text-slate-500 block text-[11px]">{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}</span>
                              </div>
                              <ol className="list-decimal space-y-1 text-slate-700 leading-relaxed" style={{ paddingLeft: '1cm' }}>
                                {exp.description.split(/\n/).map((item, idx) => {
                                  const trimmed = item.trim();
                                  return trimmed ? <li key={idx} className="print-atomic-item">{trimmed}</li> : null;
                                })}
                              </ol>
                            </div>
                          ))}
                        </div>
                      )}

                      {formData.projects.length > 0 && (
                        <div className="space-y-3 pt-1">
                          <span className="text-[11px] font-extrabold uppercase text-blue-950 block tracking-wide text-left border-b border-blue-200 pb-1 mb-2 print-section-title">Proyectos Académicos</span>
                          {formData.projects.map((proj, i) => (
                            <div key={i} className="text-[12px] space-y-1.5 print-atomic-item mb-3">
                              <div>
                                <span className="font-black text-slate-900 uppercase block">
                                  {proj.name || "Proyecto"} {proj.url && <a href={proj.url.startsWith('http') ? proj.url : `https://${proj.url}`} target="_blank" rel="noopener noreferrer" className="font-normal text-blue-600 underline lowercase print:text-blue-900">({proj.url})</a>}
                                </span>
                                <span className="text-blue-900 font-semibold block capitalize">{proj.role || "Rol"}</span>
                              </div>
                              <p className="text-slate-700 leading-relaxed text-justify" style={{ paddingLeft: '1cm' }}>{proj.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Voluntariado */}
                  {formData.volunteers.length > 0 && (
                    <div className="mb-5 pt-2 border-t border-slate-100">
                      <div className="relative flex items-center justify-center my-3 print-section-title">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #fbbf24 30%, #fbbf24 70%, transparent)' }}></div>
                        </div>
                        <h3 className="relative px-4 bg-white text-[13px] font-extrabold uppercase text-blue-950 tracking-wider">Voluntariado</h3>
                      </div>
                      <div className="space-y-3">
                        <span className="text-[11px] font-extrabold uppercase text-blue-950 block tracking-wide text-left border-b border-blue-200 pb-1 mb-2 print-section-title">Responsabilidad Social</span>
                        {formData.volunteers.map((vol, i) => (
                          <div key={i} className="text-[12px] space-y-1.5 print-atomic-item mb-3">
                            <div>
                              <span className="font-black text-slate-900 uppercase block">{vol.role || "Rol"}</span>
                              <span className="text-blue-900 font-semibold block capitalize">{vol.organization || "Organización"}</span>
                              <span className="text-slate-500 block text-[11px]">{vol.startDate} {vol.endDate ? `- ${vol.endDate}` : ""}</span>
                            </div>
                            <ol className="list-decimal space-y-1 text-slate-700 leading-relaxed" style={{ paddingLeft: '1cm' }}>
                              {vol.description.split(/\n/).map((item, idx) => {
                                const trimmed = item.trim();
                                return trimmed ? <li key={idx} className="print-atomic-item">{trimmed}</li> : null;
                              })}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="p-[1.2cm] pt-3">
                  <div className="border-t pt-2 text-center text-[10px] text-slate-500 space-y-1 bg-white">
                    <p>Línea de Atención al Usuario: 601 593 3004 · Línea Nacional: 01 8000 936 670</p>
                    <p className="font-bold text-slate-700">www.uniminuto.edu</p>
                    <div className="w-56 mx-auto py-0.5 border-t border-b border-slate-400 font-bold tracking-widest text-slate-600 text-[9px]">
                      VIGILADA MINEDUCACIÓN
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </div>
  );
}
