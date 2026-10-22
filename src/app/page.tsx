"use client";

import { useState } from "react";
import { Printer, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Trash2, Plus, User, HeartHandshake, BookOpen, Languages, Laptop } from "lucide-react";

interface Experience { company: string; position: string; city: string; startDate: string; endDate: string; description: string; }
interface Volunteer { organization: string; role: string; city: string; startDate: string; endDate: string; description: string; }
interface Education { level: string; institution: string; degree: string; year: string; }
interface Course { name: string; institution: string; year: string; }
interface Language { name: string; level: string; }
interface SoftwareSkill { name: string; level: string; }

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "", documentType: "C.C.", documentNumber: "", email: "", phone: "", city: "Bogotá D.C.", profile: "",
    competencies: "", software: [] as SoftwareSkill[], languages: [] as Language[], 
    experiences: [] as Experience[], volunteers: [] as Volunteer[], education: [] as Education[], courses: [] as Course[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addEducation = () => {
    setFormData({ ...formData, education: [...formData.education, { level: "Profesional", institution: "", degree: "", year: "" }] });
  };
  const updateEducation = (index: number, field: string, value: string) => {
    const newEdu = [...formData.education];
    (newEdu[index] as any)[field] = value;
    setFormData({ ...formData, education: newEdu });
  };
  const removeEducation = (index: number) => {
    setFormData({ ...formData, education: formData.education.filter((_, i) => i !== index) });
  };

  const addCourse = () => {
    setFormData({ ...formData, courses: [...formData.courses, { name: "", institution: "", year: "" }] });
  };
  const updateCourse = (index: number, field: string, value: string) => {
    const newCourses = [...formData.courses];
    (newCourses[index] as any)[field] = value;
    setFormData({ ...formData, courses: newCourses });
  };
  const removeCourse = (index: number) => {
    setFormData({ ...formData, courses: formData.courses.filter((_, i) => i !== index) });
  };

  const addLanguage = () => {
    setFormData({ ...formData, languages: [...formData.languages, { name: "", level: "B1 - Intermedio" }] });
  };
  const updateLanguage = (index: number, field: string, value: string) => {
    const newLangs = [...formData.languages];
    (newLangs[index] as any)[field] = value;
    setFormData({ ...formData, languages: newLangs });
  };
  const removeLanguage = (index: number) => {
    setFormData({ ...formData, languages: formData.languages.filter((_, i) => i !== index) });
  };

  const addSoftware = () => {
    setFormData({ ...formData, software: [...formData.software, { name: "", level: "Intermedio" }] });
  };
  const updateSoftware = (index: number, field: string, value: string) => {
    const newSoft = [...formData.software];
    (newSoft[index] as any)[field] = value;
    setFormData({ ...formData, software: newSoft });
  };
  const removeSoftware = (index: number) => {
    setFormData({ ...formData, software: formData.software.filter((_, i) => i !== index) });
  };

  const addExperience = () => {
    setFormData({ ...formData, experiences: [...formData.experiences, { company: "", position: "", city: "", startDate: "", endDate: "", description: "" }] });
  };
  const updateExperience = (index: number, field: string, value: string) => {
    const newExp = [...formData.experiences];
    (newExp[index] as any)[field] = value;
    setFormData({ ...formData, experiences: newExp });
  };
  const removeExperience = (index: number) => {
    setFormData({ ...formData, experiences: formData.experiences.filter((_, i) => i !== index) });
  };

  const addVolunteer = () => {
    setFormData({ ...formData, volunteers: [...formData.volunteers, { organization: "", role: "", city: "", startDate: "", endDate: "", description: "" }] });
  };
  const updateVolunteer = (index: number, field: string, value: string) => {
    const newVol = [...formData.volunteers];
    (newVol[index] as any)[field] = value;
    setFormData({ ...formData, volunteers: newVol });
  };
  const removeVolunteer = (index: number) => {
    setFormData({ ...formData, volunteers: formData.volunteers.filter((_, i) => i !== index) });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans text-slate-100 print:bg-white print:m-0 print:p-0">
      
      {/* Cabecera institucional (Header) unificada con el mismo gris exacto de la Navbar superior (bg-slate-900) */}
      <div className="print:hidden">
        <header className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-800 shadow-xl">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
              <img src="/Rectoría%20Bogotá%20Letras%20Colores%20(Sin%20Fondo).png" alt="Rectoría Bogotá" className="h-6 object-contain" />
              <div className="h-4 w-px bg-slate-300"></div>
              <img src="/Centro%20Progresa%20Letras%20Negras%20Iconos%20Blancos%20(sin%20fondo).png" alt="Centro Progresa" className="h-6 object-contain" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-white">
                Creador de Hoja de Vida Institucional
              </h1>
              <p className="text-xs text-slate-400">Centro Progresa E.P.E. • Prácticas Profesionales</p>
            </div>
          </div>
          <button 
            onClick={() => window.print()} 
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/20 transition transform active:scale-95 w-full sm:w-auto justify-center"
          >
            <Printer size={16} /> Descargar / Imprimir PDF
          </button>
        </header>
      </div>

      {/* Contenedor principal con fondo gris unificado */}
      <div className="flex-1 max-w-[1800px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start print:block print:p-0 print:m-0">
        
        {/* PANEL IZQUIERDO: Formulario */}
        <div className="lg:col-span-5 bg-slate-950/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-800 overflow-hidden print:hidden flex flex-col max-h-[88vh] overflow-y-auto p-6 space-y-6">
          
          {/* 1. Información Personal */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-slate-800 pb-2">
              <User size={15}/> 1. Información Personal
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Nombre Completo</label>
              <input type="text" name="fullName" placeholder="Ej. Laura Sofía Martínez" value={formData.fullName} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400 transition" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Tipo de Documento</label>
                <select name="documentType" value={formData.documentType} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400">
                  <option value="C.C.">Cédula (C.C.)</option>
                  <option value="T.I.">Tarjeta (T.I.)</option>
                  <option value="C.E.">Extranjería (C.E.)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Número</label>
                <input type="text" name="documentNumber" placeholder="1023456789" value={formData.documentNumber} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Correo Electrónico</label>
                <input type="email" name="email" placeholder="correo@uniminuto.edu.co" value={formData.email} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Teléfono</label>
                <input type="text" name="phone" placeholder="300 123 4567" value={formData.phone} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Ciudad</label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400" />
            </div>
          </div>

          {/* 2. Perfil y Competencias */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Award size={15}/> 2. Perfil y Competencias
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Perfil Ocupacional</label>
              <textarea name="profile" rows={3} placeholder="Estudiante apasionado..." value={formData.profile} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400 resize-none"></textarea>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Competencias (separadas por comas)</label>
              <input type="text" name="competencies" placeholder="Liderazgo, Pensamiento Crítico, Resolución de problemas" value={formData.competencies} onChange={handleInputChange} className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400" />
            </div>
          </div>

          {/* 3. Software y Programas */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Laptop size={15}/> 3. Software y Programas
              </h2>
              <button onClick={addSoftware} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.software.map((sw, idx) => (
              <div key={idx} className="p-3 border border-slate-800 rounded-xl bg-slate-950/50 flex gap-2 items-center relative">
                <button onClick={() => removeSoftware(idx)} className="text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Ej. Python, Excel, SAP" value={sw.name} onChange={(e) => updateSoftware(idx, "name", e.target.value)} className="flex-1 p-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <select value={sw.level} onChange={(e) => updateSoftware(idx, "level", e.target.value)} className="p-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white">
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                  <option value="Experto">Experto</option>
                </select>
              </div>
            ))}
          </div>

          {/* 4. Idiomas */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Languages size={15}/> 4. Idiomas
              </h2>
              <button onClick={addLanguage} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.languages.map((lang, idx) => (
              <div key={idx} className="p-3 border border-slate-800 rounded-xl bg-slate-950/50 flex gap-2 items-center relative">
                <button onClick={() => removeLanguage(idx)} className="text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Ej. Inglés, Francés" value={lang.name} onChange={(e) => updateLanguage(idx, "name", e.target.value)} className="flex-1 p-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <select value={lang.level} onChange={(e) => updateLanguage(idx, "level", e.target.value)} className="p-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white">
                  <option value="A1 - Acceso">A1 - Acceso</option>
                  <option value="A2 - Plataforma">A2 - Plataforma</option>
                  <option value="B1 - Umbral (Intermedio)">B1 - Umbral (Intermedio)</option>
                  <option value="B2 - Avanzado (Independiente)">B2 - Avanzado (Independiente)</option>
                  <option value="C1 - Dominio Operativo Eficaz">C1 - Dominio Operativo Eficaz</option>
                  <option value="C2 - Maestría">C2 - Maestría</option>
                  <option value="Nativo">Nativo</option>
                </select>
              </div>
            ))}
          </div>

          {/* 5. Formación Académica */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <GraduationCap size={15}/> 5. Formación Académica
              </h2>
              <button onClick={addEducation} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.education.map((edu, idx) => (
              <div key={idx} className="p-3.5 border border-slate-800 rounded-xl bg-slate-950/50 space-y-2.5 relative">
                <button onClick={() => removeEducation(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <select value={edu.level} onChange={(e) => updateEducation(idx, "level", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white">
                  <option value="Técnico">Técnico</option>
                  <option value="Tecnólogo">Tecnólogo</option>
                  <option value="Profesional">Profesional</option>
                  <option value="Especialización">Especialización</option>
                  <option value="Maestría">Maestría</option>
                </select>
                <input type="text" placeholder="Institución Educativa" value={edu.institution} onChange={(e) => updateEducation(idx, "institution", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Título obtenido" value={edu.degree} onChange={(e) => updateEducation(idx, "degree", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Año de grado" value={edu.year} onChange={(e) => updateEducation(idx, "year", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
              </div>
            ))}
          </div>

          {/* 6. Formación Complementaria */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <BookOpen size={15}/> 6. Formación Complementaria
              </h2>
              <button onClick={addCourse} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.courses.map((course, idx) => (
              <div key={idx} className="p-3.5 border border-slate-800 rounded-xl bg-slate-950/50 space-y-2.5 relative">
                <button onClick={() => removeCourse(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Nombre del curso, taller o conferencia" value={course.name} onChange={(e) => updateCourse(idx, "name", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Institución o entidad certificadora" value={course.institution} onChange={(e) => updateCourse(idx, "institution", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Año" value={course.year} onChange={(e) => updateCourse(idx, "year", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
              </div>
            ))}
          </div>

          {/* 7. Experiencia Laboral */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Briefcase size={15}/> 7. Experiencia Laboral
              </h2>
              <button onClick={addExperience} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.experiences.map((exp, idx) => (
              <div key={idx} className="p-3.5 border border-slate-800 rounded-xl bg-slate-950/50 space-y-2.5 relative">
                <button onClick={() => removeExperience(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Empresa" value={exp.company} onChange={(e) => updateExperience(idx, "company", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Cargo" value={exp.position} onChange={(e) => updateExperience(idx, "position", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Ciudad" value={exp.city} onChange={(e) => updateExperience(idx, "city", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Inicio (2024)" value={exp.startDate} onChange={(e) => updateExperience(idx, "startDate", e.target.value)} className="p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                  <input type="text" placeholder="Fin (Actual)" value={exp.endDate} onChange={(e) => updateExperience(idx, "endDate", e.target.value)} className="p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                </div>
                <textarea placeholder="Funciones (separa por puntos o saltos de línea)..." rows={3} value={exp.description} onChange={(e) => updateExperience(idx, "description", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white resize-none"></textarea>
              </div>
            ))}
          </div>

          {/* 8. Voluntariado */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <HeartHandshake size={15}/> 8. Voluntariado
              </h2>
              <button onClick={addVolunteer} className="text-[11px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition">
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.volunteers.map((vol, idx) => (
              <div key={idx} className="p-3.5 border border-slate-800 rounded-xl bg-slate-950/50 space-y-2.5 relative">
                <button onClick={() => removeVolunteer(idx)} className="absolute top-3 right-3 text-rose-300 hover:text-rose-100"><Trash2 size={15}/></button>
                <input type="text" placeholder="Organización" value={vol.organization} onChange={(e) => updateVolunteer(idx, "organization", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Rol / Cargo" value={vol.role} onChange={(e) => updateVolunteer(idx, "role", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Ciudad" value={vol.city} onChange={(e) => updateVolunteer(idx, "city", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Inicio (2023)" value={vol.startDate} onChange={(e) => updateVolunteer(idx, "startDate", e.target.value)} className="p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                  <input type="text" placeholder="Fin (Actual)" value={vol.endDate} onChange={(e) => updateVolunteer(idx, "endDate", e.target.value)} className="p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                </div>
                <textarea placeholder="Actividades o funciones..." rows={3} value={vol.description} onChange={(e) => updateVolunteer(idx, "description", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white resize-none"></textarea>
              </div>
            ))}
          </div>

        </div>

        {/* PANEL DERECHO: Vista Previa */}
        <div className="lg:col-span-7 bg-slate-900/90 p-6 rounded-2xl flex justify-center items-start shadow-2xl border border-slate-800 overflow-auto max-h-[88vh] print:p-0 print:m-0 print:bg-white print:border-none print:shadow-none print:overflow-visible print:w-full">
          <div className="bg-white text-slate-800 w-full max-w-[800px] min-h-[1050px] p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-xl flex flex-col justify-between print:shadow-none print:border-none print:m-0 print:p-0 print:w-full print:max-w-none">
            <div>
              {/* Encabezado */}
              <div className="border-b-2 border-slate-900 pb-5 mb-6 flex flex-row justify-between items-center bg-white">
                <div className="pr-4">
                  <h1 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight break-words">
                    {formData.fullName || "Nombre del Estudiante"}
                  </h1>
                  <p className="text-blue-900 font-bold text-xs uppercase tracking-widest mt-1">
                    Candidato a Práctica Profesional
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex-shrink-0">
                  <img src="/Rectoría%20Bogotá%20Letras%20Colores%20(Sin%20Fondo).png" alt="Rectoría Bogotá" className="h-7 lg:h-8 object-contain" />
                  <div className="h-6 w-px bg-slate-300"></div>
                  <img src="/Centro%20Progresa%20Letras%20Negras%20Iconos%20Blancos%20(sin%20fondo).png" alt="Centro Progresa" className="h-7 lg:h-8 object-contain" />
                </div>
              </div>

              {/* Contacto */}
              <div className="flex flex-wrap gap-4 text-xs text-slate-600 mb-6 pb-4 border-b border-slate-100 font-medium">
                {formData.documentNumber && <span><b>{formData.documentType}:</b> {formData.documentNumber}</span>}
                {formData.email && <span className="flex items-center gap-1"><Mail size={12} className="text-blue-900"/> {formData.email}</span>}
                {formData.phone && <span className="flex items-center gap-1"><Phone size={12} className="text-blue-900"/> {formData.phone}</span>}
                {formData.city && <span className="flex items-center gap-1"><MapPin size={12} className="text-blue-900"/> {formData.city}</span>}
              </div>

              {/* Perfil */}
              {formData.profile && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-2">Perfil Ocupacional</h3>
                  <p className="text-xs text-slate-700 text-justify leading-relaxed">{formData.profile}</p>
                </div>
              )}

              {/* Competencias */}
              {formData.competencies && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-2">Competencias</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.competencies.split(",").map((s, i) => <span key={i} className="text-[11px] bg-slate-100 text-slate-800 px-2.5 py-1 rounded font-medium border border-slate-200">{s.trim()}</span>)}
                  </div>
                </div>
              )}

              {/* Software y Programas con Nivel */}
              {formData.software.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-2">Software y Programas</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.software.map((sw, i) => sw.name && (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-800 px-2.5 py-1 rounded font-medium border border-slate-200">
                        {sw.name} <span className="text-slate-900 font-bold">({sw.level})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Idiomas con Estandar Internacional */}
              {formData.languages.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-2">Idiomas</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.languages.map((lang, i) => lang.name && (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-800 px-2.5 py-1 rounded font-medium border border-slate-200">
                        {lang.name}: <span className="font-bold">{lang.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Formación Académica */}
              {formData.education.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Formación Académica</h3>
                  <div className="space-y-3">
                    {formData.education.map((edu, i) => (
                      <div key={i} className="text-xs flex justify-between items-baseline">
                        <div>
                          <span className="font-bold text-slate-900 block">[{edu.level}] {edu.degree || "Título obtenido"}</span>
                          <span className="text-slate-600">{edu.institution || "Institución"}</span>
                        </div>
                        <span className="text-slate-900 font-semibold">{edu.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Formación Complementaria */}
              {formData.courses.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Formación Complementaria</h3>
                  <div className="space-y-3">
                    {formData.courses.map((course, i) => (
                      <div key={i} className="text-xs flex justify-between items-baseline">
                        <div>
                          <span className="font-bold text-slate-900 block">{course.name || "Curso / Taller"}</span>
                          <span className="text-slate-600">{course.institution || "Institución"}</span>
                        </div>
                        <span className="text-slate-900 font-semibold">{course.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experiencia Laboral */}
              {formData.experiences.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Experiencia Laboral</h3>
                  <div className="space-y-4">
                    {formData.experiences.map((exp, i) => (
                      <div key={i} className="text-xs space-y-1.5">
                        <div className="flex justify-between font-bold text-slate-900">
                          <span>{exp.position || "Cargo"} — <span className="text-slate-900">{exp.company || "Empresa"}</span> {exp.city ? `(${exp.city})` : ""}</span>
                          <span className="text-slate-500 font-normal">{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700 leading-relaxed">
                          {exp.description.split(/\n|\u2022|\./).map((item, idx) => {
                            const trimmed = item.trim();
                            return trimmed ? <li key={idx}>{trimmed}</li> : null;
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Voluntariado */}
              {formData.volunteers.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wider border-l-4 border-amber-400 pl-2 mb-3">Voluntariado</h3>
                  <div className="space-y-4">
                    {formData.volunteers.map((vol, i) => (
                      <div key={i} className="text-xs space-y-1.5">
                        <div className="flex justify-between font-bold text-slate-900">
                          <span>{vol.role || "Rol"} — <span className="text-slate-900">{vol.organization || "Organización"}</span> {vol.city ? `(${vol.city})` : ""}</span>
                          <span className="text-slate-500 font-normal">{vol.startDate} {vol.endDate ? `- ${vol.endDate}` : ""}</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700 leading-relaxed">
                          {vol.description.split(/\n|\u2022|\./).map((item, idx) => {
                            const trimmed = item.trim();
                            return trimmed ? <li key={idx}>{trimmed}</li> : null;
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pie */}
            <div className="border-t pt-4 mt-8 text-center text-[10px] text-slate-400">
              Documento oficial generado institucionalmente a través del Centro Progresa E.P.E. • UNIMINUTO
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
