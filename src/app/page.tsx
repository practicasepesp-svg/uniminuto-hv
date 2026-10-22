"use client";

import { useState } from "react";
import { Printer, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Trash2, Plus, User, Cpu, Languages, HeartHandshake } from "lucide-react";

interface Experience { company: string; position: string; startDate: string; endDate: string; description: string; }
interface Education { institution: string; degree: string; level: string; year: string; }
interface SoftwareSkill { name: string; level: string; }
interface LanguageSkill { language: string; level: string; }
interface Volunteer { organization: string; role: string; startDate: string; endDate: string; description: string; }

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "", documentType: "C.C.", documentNumber: "", email: "", phone: "", city: "Bogotá D.C.", profile: "",
    competencies: "", 
    softwareList: [] as SoftwareSkill[],
    languageList: [] as LanguageSkill[],
    education: [] as Education[],
    experiences: [] as Experience[],
    volunteers: [] as Volunteer[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Software
  const addSoftware = () => {
    setFormData({ ...formData, softwareList: [...formData.softwareList, { name: "", level: "Intermedio" }] });
  };
  const updateSoftware = (index: number, field: string, value: string) => {
    const list = [...formData.softwareList];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, softwareList: list });
  };
  const removeSoftware = (index: number) => {
    setFormData({ ...formData, softwareList: formData.softwareList.filter((_, i) => i !== index) });
  };

  // Idiomas
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

  // Educación
  const addEducation = () => {
    setFormData({ ...formData, education: [...formData.education, { institution: "", degree: "", level: "Profesional", year: "" }] });
  };
  const updateEducation = (index: number, field: string, value: string) => {
    const newEdu = [...formData.education];
    (newEdu[index] as any)[field] = value;
    setFormData({ ...formData, education: newEdu });
  };
  const removeEducation = (index: number) => {
    setFormData({ ...formData, education: formData.education.filter((_, i) => i !== index) });
  };

  // Experiencia
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

  // Voluntariado
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

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col font-sans text-slate-100 print:bg-white print:min-h-0">
      {/* Barra superior institucional */}
      <header className="bg-blue-900 text-white px-6 py-4 print:hidden flex justify-between items-center border-b border-blue-800 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-blue-200 shadow-sm">
            <img src="/Rectoría%20Bogotá%20Letras%20Colores%20(Sin%20Fondo).png" alt="Rectoría Bogotá" className="h-6 object-contain" />
            <div className="h-4 w-px bg-blue-200"></div>
            <img src="/Centro%20Progresa%20Letras%20Negras%20Iconos%20Blancos%20(sin%20fondo).png" alt="Centro Progresa" className="h-6 object-contain" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white">
              Creador de Hoja de Vida Institucional
            </h1>
            <p className="text-xs text-blue-200">Centro Progresa E.P.E. • Prácticas Profesionales</p>
          </div>
        </div>
        <button 
          onClick={() => window.print()} 
          className="bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-black px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/20 transition transform active:scale-95"
        >
          <Printer size={16} /> Descargar / Imprimir PDF
        </button>
      </header>

      {/* Contenedor principal */}
      <div className="flex-1 max-w-[1800px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start print:block print:p-0 print:m-0 print:w-full print:max-w-none">
        
        {/* PANEL IZQUIERDO: Formulario */}
        <div className="lg:col-span-5 bg-blue-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-800/80 overflow-hidden print:hidden flex flex-col max-h-[88vh] overflow-y-auto p-6 space-y-6">
          
          {/* Tarjeta 1: Información Personal */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <User size={15}/> 1. Información Personal
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Nombre Completo</label>
              <input 
                type="text" 
                name="fullName" 
                placeholder="Ej. Laura Sofía Martínez" 
                value={formData.fullName} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400 transition" 
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-blue-200 mb-1">Tipo de Documento</label>
                <select 
                  name="documentType" 
                  value={formData.documentType} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400"
                >
                  <option value="C.C.">Cédula (C.C.)</option>
                  <option value="T.I.">Tarjeta (T.I.)</option>
                  <option value="C.E.">Extranjería (C.E.)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-blue-200 mb-1">Número</label>
                <input 
                  type="text" 
                  name="documentNumber" 
                  placeholder="1023456789" 
                  value={formData.documentNumber} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-blue-200 mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="correo@uniminuto.edu.co" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-blue-200 mb-1">Teléfono</label>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="300 123 4567" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" 
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Ciudad</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" 
              />
            </div>
          </div>

          {/* Tarjeta 2: Perfil y Competencias */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <Award size={15}/> 2. Perfil y Competencias
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Perfil Ocupacional</label>
              <textarea 
                name="profile" 
                rows={3} 
                placeholder="Estudiante apasionado..." 
                value={formData.profile} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400 resize-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-blue-200 mb-1">Competencias</label>
              <input 
                type="text" 
                name="competencies" 
                placeholder="Ej. Trabajo en equipo, Adaptabilidad, Liderazgo" 
                value={formData.competencies} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-blue-900 border border-blue-700 rounded-xl text-white outline-none focus:border-amber-400" 
              />
            </div>
          </div>

          {/* Tarjeta 3: Habilidades (Programas e Idiomas) */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-5 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-blue-900 pb-2">
              <Cpu size={15}/> 3. Habilidades (Programas e Idiomas)
            </h2>
            
            {/* Programas */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-blue-200 flex items-center gap-1"><Cpu size={13}/> Programas</span>
                <button onClick={addSoftware} className="text-[10px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-2.5 py-1 rounded-md font-bold flex items-center gap-1">
                  <Plus size={11}/> Añadir Programa
                </button>
              </div>
              {formData.softwareList.map((sw, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-blue-900/40 p-2.5 rounded-lg border border-blue-800">
                  <input type="text" placeholder="Ej. Python, Excel, ChatGPT" value={sw.name} onChange={(e) => updateSoftware(idx, "name", e.target.value)} className="flex-1 p-2 text-xs bg-blue-950 border border-blue-800 rounded text-white" />
                  <select value={sw.level} onChange={(e) => updateSoftware(idx, "level", e.target.value)} className="p-2 text-xs bg-blue-950 border border-blue-800 rounded text-white">
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Experto">Experto</option>
                  </select>
                  <button onClick={() => removeSoftware(idx)} className="text-rose-300 hover:text-rose-100 p-1"><Trash2 size={14}/></button>
                </div>
              ))}
            </div>

            {/* Idiomas */}
            <div className="space-y-3 pt-2 border-t border-blue-900/60">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-blue-200 flex items-center gap-1"><Languages size={13}/> Idiomas</span>
                <button onClick={addLanguage} className="text-[10px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-2.5 py-1 rounded-md font-bold flex items-center gap-1">
                  <Plus size={11}/> Añadir Idioma
                </button>
              </div>
              {formData.languageList.map((lang, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-blue-900/40 p-2.5 rounded-lg border border-blue-800">
                  <input type="text" placeholder="Ej. Inglés, Francés" value={lang.language} onChange={(e) => updateLanguage(idx, "language", e.target.value)} className="flex-1 p-2 text-xs bg-blue-950 border border-blue-800 rounded text-white" />
                  <select value={lang.level} onChange={(e) => updateLanguage(idx, "level", e.target.value)} className="p-2 text-xs bg-blue-950 border border-blue-800 rounded text-white">
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
            </div>
          </div>

          {/* Tarjeta 4: Formación Académica */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-blue-900 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <GraduationCap size={15}/> 4. Formación Académica
              </h2>
              <button onClick={addEducation} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.education.map((edu, idx) => (
              <div key={idx} className="p-3.5 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2.5 relative">
                <button onClick={() => removeEducation(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Institución Educativa" value={edu.institution} onChange={(e) => updateEducation(idx, "institution", e.target.value)} className="p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                  <select value={edu.level} onChange={(e) => updateEducation(idx, "level", e.target.value)} className="p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white">
                    <option value="Bachiller">Bachiller</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Tecnólogo">Tecnólogo</option>
                    <option value="Profesional">Profesional</option>
                    <option value="Especialización">Especialización</option>
                    <option value="Maestría">Maestría</option>
                  </select>
                </div>
                <input type="text" placeholder="Título obtenido (Ej. Ingeniería de Sistemas)" value={edu.degree} onChange={(e) => updateEducation(idx, "degree", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                <input type="text" placeholder="Año de grado (Ej. 2026)" value={edu.year} onChange={(e) => updateEducation(idx, "year", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
              </div>
            ))}
          </div>

          {/* Tarjeta 5: Experiencia Laboral */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-blue-900 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Briefcase size={15}/> 5. Experiencia Laboral
              </h2>
              <button onClick={addExperience} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.experiences.map((exp, idx) => (
              <div key={idx} className="p-3.5 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2.5 relative">
                <button onClick={() => removeExperience(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Empresa" value={exp.company} onChange={(e) => updateExperience(idx, "company", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                <input type="text" placeholder="Cargo" value={exp.position} onChange={(e) => updateExperience(idx, "position", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Inicio (22 de septiembre de 2026)" value={exp.startDate} onChange={(e) => updateExperience(idx, "startDate", e.target.value)} className="p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                  <input type="text" placeholder="Fin (Actual)" value={exp.endDate} onChange={(e) => updateExperience(idx, "endDate", e.target.value)} className="p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                </div>
                <textarea placeholder="Escribe cada función separada por saltos de línea..." rows={3} value={exp.description} onChange={(e) => updateExperience(idx, "description", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white resize-none"></textarea>
              </div>
            ))}
          </div>

          {/* Tarjeta 6: Voluntariado */}
          <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-blue-900 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <HeartHandshake size={15}/> 6. Voluntariado
              </h2>
              <button onClick={addVolunteer} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-blue-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.volunteers.map((vol, idx) => (
              <div key={idx} className="p-3.5 border border-blue-800 rounded-xl bg-blue-900/50 space-y-2.5 relative">
                <button onClick={() => removeVolunteer(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Organización / Fundación" value={vol.organization} onChange={(e) => updateVolunteer(idx, "organization", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                <input type="text" placeholder="Rol / Actividad" value={vol.role} onChange={(e) => updateVolunteer(idx, "role", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Inicio (22 de septiembre de 2026)" value={vol.startDate} onChange={(e) => updateVolunteer(idx, "startDate", e.target.value)} className="p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                  <input type="text" placeholder="Fin" value={vol.endDate} onChange={(e) => updateVolunteer(idx, "endDate", e.target.value)} className="p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white" />
                </div>
                <textarea placeholder="Funciones o aportes realizados..." rows={3} value={vol.description} onChange={(e) => updateVolunteer(idx, "description", e.target.value)} className="w-full p-2.5 text-xs bg-blue-950 border border-blue-800 rounded-lg text-white resize-none"></textarea>
              </div>
            ))}
          </div>

        </div>

        {/* PANEL DERECHO: Vista Previa */}
        <div className="lg:col-span-7 bg-blue-950/90 p-6 rounded-2xl flex justify-center items-start shadow-2xl border border-blue-900 overflow-auto max-h-[88vh] print:p-0 print:m-0 print:bg-white print:overflow-visible print:max-h-none print:w-full print:shadow-none print:border-none">
          <div className="bg-white text-slate-800 w-full max-w-[800px] min-h-[1050px] p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-xl flex flex-col justify-between print:shadow-none print:border-none print:m-0 print:p-[2.5cm] print:w-full print:max-w-none print:min-h-0">
            <div>
              {/* Encabezado Institucional */}
              <div className="border-b-2 border-blue-900 pb-5 mb-6 flex flex-row justify-between items-center bg-white break-inside-avoid page-break-inside-avoid">
                <div className="pr-4">
                  <h1 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight break-words">
                    {formData.fullName || "Nombre del Estudiante"}
                  </h1>
                  <p className="text-blue-900 font-bold text-xs uppercase tracking-widest mt-1">
                    Candidato a Práctica Profesional
                  </p>
                </div>
                
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-blue-200 shadow-sm flex-shrink-0">
                  <img src="/Rectoría%20Bogotá%20Letras%20Colores%20(Sin%20Fondo).png" alt="Rectoría Bogotá" className="h-7 lg:h-8 object-contain" />
                  <div className="h-6 w-px bg-slate-300"></div>
                  <img src="/Centro%20Progresa%20Letras%20Negras%20Iconos%20Blancos%20(sin%20fondo).png" alt="Centro Progresa" className="h-7 lg:h-8 object-contain" />
                </div>
              </div>

              {/* Contacto */}
              <div className="flex flex-wrap gap-4 text-xs text-slate-600 mb-6 pb-4 border-b border-slate-100 font-medium break-inside-avoid page-break-inside-avoid">
                {formData.documentNumber && <span><b>{formData.documentType}:</b> {formData.documentNumber}</span>}
                {formData.email && <span className="flex items-center gap-1"><Mail size={12} className="text-blue-900"/> {formData.email}</span>}
                {formData.phone && <span className="flex items-center gap-1"><Phone size={12} className="text-blue-900"/> {formData.phone}</span>}
                {formData.city && <span className="flex items-center gap-1"><MapPin size={12} className="text-blue-900"/> {formData.city}</span>}
              </div>

              {/* Perfil */}
              {formData.profile && (
                <div className="mb-6 break-inside-avoid page-break-inside-avoid">
                  <h3 className="text-xs font-bold uppercase text-blue-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-2">Perfil Ocupacional</h3>
                  <p className="text-xs text-slate-700 text-justify leading-relaxed">{formData.profile}</p>
                </div>
              )}

              {/* Competencias */}
              {formData.competencies && (
                <div className="mb-6 pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
                  <h3 className="text-xs font-bold uppercase text-blue-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-2">Competencias</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.competencies.split(",").map((c, i) => <span key={i} className="text-[11px] bg-blue-50 text-blue-900 px-2.5 py-1 rounded font-medium border border-blue-100">{c.trim()}</span>)}
                  </div>
                </div>
              )}

              {/* Formación Académica */}
              {formData.education.length > 0 && (
                <div className="mb-6 pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
                  <h3 className="text-xs font-bold uppercase text-blue-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Formación Académica</h3>
                  <div className="space-y-3">
                    {formData.education.map((edu, i) => (
                      <div key={i} className="text-xs space-y-0.5 break-inside-avoid page-break-inside-avoid">
                        <span className="font-bold text-slate-900 uppercase block">{edu.degree || "Título obtenido"} <span className="font-normal text-blue-900 normal-case">({edu.level})</span></span>
                        <span className="text-slate-700 font-medium block capitalize">{edu.institution || "Institución"}</span>
                        <span className="text-slate-500 block text-[11px]">{edu.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Habilidades (Programas e Idiomas) */}
              {(formData.softwareList.length > 0 || formData.languageList.length > 0) && (
                <div className="mb-6 pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
                  <h3 className="text-xs font-bold uppercase text-blue-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Habilidades</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {formData.softwareList.length > 0 && (
                      <div>
                        <span className="font-bold text-slate-900 block mb-1">Programas:</span>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700">
                          {formData.softwareList.map((sw, i) => (
                            <li key={i}><b>{sw.name}</b> — <span className="text-blue-900">{sw.level}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {formData.languageList.length > 0 && (
                      <div>
                        <span className="font-bold text-slate-900 block mb-1">Idiomas:</span>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700">
                          {formData.languageList.map((lang, i) => (
                            <li key={i}><b>{lang.language}</b> — <span className="text-blue-900">{lang.level}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Experiencia Laboral */}
              {formData.experiences.length > 0 && (
                <div className="mb-6 pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
                  <h3 className="text-xs font-bold uppercase text-blue-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Experiencia Laboral</h3>
                  <div className="space-y-4">
                    {formData.experiences.map((exp, i) => (
                      <div key={i} className="text-xs space-y-1.5 break-inside-avoid page-break-inside-avoid">
                        <div>
                          <span className="font-black text-slate-900 uppercase block">{exp.position || "Cargo"}</span>
                          <span className="text-blue-900 font-semibold block capitalize">{exp.company || "Empresa"}</span>
                          <span className="text-slate-500 block text-[11px]">{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}</span>
                        </div>
                        <ol className="list-decimal pl-4 space-y-1 text-slate-700 leading-relaxed">
                          {exp.description.split(/\n/).map((item, idx) => {
                            const trimmed = item.trim();
                            return trimmed ? <li key={idx}>{trimmed}</li> : null;
                          })}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Voluntariado */}
              {formData.volunteers.length > 0 && (
                <div className="mb-6 pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
                  <h3 className="text-xs font-bold uppercase text-blue-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Voluntariado</h3>
                  <div className="space-y-4">
                    {formData.volunteers.map((vol, i) => (
                      <div key={i} className="text-xs space-y-1.5 break-inside-avoid page-break-inside-avoid">
                        <div>
                          <span className="font-black text-slate-900 uppercase block">{vol.role || "Rol"}</span>
                          <span className="text-blue-900 font-semibold block capitalize">{vol.organization || "Organización"}</span>
                          <span className="text-slate-500 block text-[11px]">{vol.startDate} {vol.endDate ? `- ${vol.endDate}` : ""}</span>
                        </div>
                        <ol className="list-decimal pl-4 space-y-1 text-slate-700 leading-relaxed">
                          {vol.description.split(/\n/).map((item, idx) => {
                            const trimmed = item.trim();
                            return trimmed ? <li key={idx}>{trimmed}</li> : null;
                          })}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pie de página institucional */}
            <div className="border-t pt-4 mt-8 text-center text-[10px] text-slate-500 space-y-1 break-inside-avoid page-break-inside-avoid">
              <p>Línea de Atención al Usuario: 601 593 3004 · Línea Nacional: 01 8000 936 670</p>
              <p className="font-bold text-slate-700">www.uniminuto.edu</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
