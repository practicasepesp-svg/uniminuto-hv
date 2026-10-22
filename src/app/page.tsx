"use client";

import { useState } from "react";
import { Printer, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Trash2, Plus, User } from "lucide-react";

interface Experience { company: string; position: string; startDate: string; endDate: string; description: string; }
interface Education { institution: string; degree: string; year: string; }

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "", documentType: "C.C.", documentNumber: "", email: "", phone: "", city: "Bogotá D.C.", profile: "",
    skills: "", experiences: [] as Experience[], education: [] as Education[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const addEducation = () => {
    setFormData({ ...formData, education: [...formData.education, { institution: "", degree: "", year: "" }] });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEdu = [...formData.education];
    (newEdu[index] as any)[field] = value;
    setFormData({ ...formData, education: newEdu });
  };

  const removeEducation = (index: number) => {
    setFormData({ ...formData, education: formData.education.filter((_, i) => i !== index) });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans text-slate-100">
      {/* Barra superior */}
      <header className="bg-slate-950 text-white px-6 py-4 no-print flex justify-between items-center border-b border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 text-white p-2 rounded-xl font-black text-xs tracking-wider shadow-inner">CP</div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              Centro Progresa E.P.E. | Creador de Hoja de Vida
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">Español</span>
            </h1>
            <p className="text-xs text-slate-400">Modelo Oficial Uniminuto • Vista Previa en Tiempo Real</p>
          </div>
        </div>
        <button 
          onClick={() => window.print()} 
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition transform active:scale-95"
        >
          <Printer size={16} /> Descargar / Imprimir PDF
        </button>
      </header>

      {/* Contenedor principal */}
      <div className="flex-1 max-w-[1800px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* PANEL IZQUIERDO: Formulario en Español */}
        <div className="lg:col-span-5 bg-slate-950/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-800 overflow-hidden no-print flex flex-col max-h-[88vh] overflow-y-auto p-6 space-y-6">
          
          {/* Tarjeta 1: Información Personal */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
              <User size={15}/> 1. Información Personal
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Nombre Completo</label>
              <input 
                type="text" 
                name="fullName" 
                placeholder="Ej. Laura Sofía Martínez" 
                value={formData.fullName} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500 transition" 
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Tipo de Documento</label>
                <select 
                  name="documentType" 
                  value={formData.documentType} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500"
                >
                  <option value="C.C.">Cédula (C.C.)</option>
                  <option value="T.I.">Tarjeta (T.I.)</option>
                  <option value="C.E.">Extranjería (C.E.)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Número</label>
                <input 
                  type="text" 
                  name="documentNumber" 
                  placeholder="1023456789" 
                  value={formData.documentNumber} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500" 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="correo@uniminuto.edu.co" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Teléfono</label>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="300 123 4567" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500" 
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Ciudad</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500" 
              />
            </div>
          </div>

          {/* Tarjeta 2: Perfil y Habilidades */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Award size={15}/> 2. Perfil y Competencias
            </h2>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Perfil Ocupacional</label>
              <textarea 
                name="profile" 
                rows={3} 
                placeholder="Estudiante apasionado..." 
                value={formData.profile} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500 resize-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Habilidades (separadas por comas)</label>
              <input 
                type="text" 
                name="skills" 
                placeholder="Python, Liderazgo, Excel, Gestión" 
                value={formData.skills} 
                onChange={handleInputChange} 
                className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-emerald-500" 
              />
            </div>
          </div>

          {/* Tarjeta 3: Experiencia */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <Briefcase size={15}/> 3. Experiencia Laboral / Práctica
              </h2>
              <button 
                onClick={addExperience} 
                className="text-[11px] bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition"
              >
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.experiences.map((exp, idx) => (
              <div key={idx} className="p-3.5 border border-slate-800 rounded-xl bg-slate-950/50 space-y-2.5 relative">
                <button onClick={() => removeExperience(idx)} className="absolute top-3 right-3 text-rose-400 hover:text-rose-300"><Trash2 size={15}/></button>
                <input type="text" placeholder="Empresa" value={exp.company} onChange={(e) => updateExperience(idx, "company", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Cargo" value={exp.position} onChange={(e) => updateExperience(idx, "position", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Inicio (2024)" value={exp.startDate} onChange={(e) => updateExperience(idx, "startDate", e.target.value)} className="p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                  <input type="text" placeholder="Fin (Actual)" value={exp.endDate} onChange={(e) => updateExperience(idx, "endDate", e.target.value)} className="p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                </div>
                <textarea placeholder="Descripción o funciones..." rows={2} value={exp.description} onChange={(e) => updateExperience(idx, "description", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white resize-none"></textarea>
              </div>
            ))}
          </div>

          {/* Tarjeta 4: Educación */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <GraduationCap size={15}/> 4. Formación Académica
              </h2>
              <button 
                onClick={addEducation} 
                className="text-[11px] bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow transition"
              >
                <Plus size={13}/> Añadir
              </button>
            </div>
            {formData.education.map((edu, idx) => (
              <div key={idx} className="p-3.5 border border-slate-800 rounded-xl bg-slate-950/50 space-y-2.5 relative">
                <button onClick={() => removeEducation(idx)} className="absolute top-3 right-3 text-rose-400 hover:text-rose-300"><Trash2 size={15}/></button>
                <input type="text" placeholder="Institución Educativa" value={edu.institution} onChange={(e) => updateEducation(idx, "institution", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Título obtenido" value={edu.degree} onChange={(e) => updateEducation(idx, "degree", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
                <input type="text" placeholder="Año de grado" value={edu.year} onChange={(e) => updateEducation(idx, "year", e.target.value)} className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white" />
              </div>
            ))}
          </div>

        </div>

        {/* PANEL DERECHO: Vista Previa */}
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl flex justify-center items-start shadow-2xl border border-slate-800 overflow-auto max-h-[88vh]">
          <div className="bg-white text-slate-800 w-full max-w-[800px] min-h-[1050px] p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-xl flex flex-col justify-between print:shadow-none print:border-none print:m-0 print:p-0">
            <div>
              {/* Encabezado con Logos Institucionales */}
              <div className="border-b-2 border-emerald-800 pb-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                    {formData.fullName || "Nombre del Estudiante"}
                  </h1>
                  <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mt-1">
                    Candidato a Práctica Profesional
                  </p>
                </div>
                
                {/* Logos Institucionales Reales */}
                <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <img src="/Rector%C3%ADa%20Bogot%C3%A1%20Letras%20Colores%20(Sin%20Fondo).png" alt="Rectoría Bogotá" className="h-8 object-contain" />
                  <div className="h-6 w-px bg-slate-300"></div>
                  <img src="/Centro%20Progresa%20Letras%20Negras%20Iconos%20Blancos%20(sin%20fondo).png" alt="Centro Progresa" className="h-8 object-contain" />
                </div>
              </div>

              {/* Contacto */}
              <div className="flex flex-wrap gap-4 text-xs text-slate-600 mb-6 pb-4 border-b border-slate-100 font-medium">
                {formData.documentNumber && <span><b>{formData.documentType}:</b> {formData.documentNumber}</span>}
                {formData.email && <span className="flex items-center gap-1"><Mail size={12} className="text-emerald-700"/> {formData.email}</span>}
                {formData.phone && <span className="flex items-center gap-1"><Phone size={12} className="text-emerald-700"/> {formData.phone}</span>}
                {formData.city && <span className="flex items-center gap-1"><MapPin size={12} className="text-emerald-700"/> {formData.city}</span>}
              </div>

              {/* Perfil */}
              {formData.profile && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-emerald-800 tracking-wider border-l-4 border-emerald-600 pl-2 mb-2">Perfil Ocupacional</h3>
                  <p className="text-xs text-slate-700 text-justify leading-relaxed">{formData.profile}</p>
                </div>
              )}

              {/* Habilidades */}
              {formData.skills && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-emerald-800 tracking-wider border-l-4 border-emerald-600 pl-2 mb-2">Habilidades y Competencias</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.skills.split(",").map((s, i) => <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium">{s.trim()}</span>)}
                  </div>
                </div>
              )}

              {/* Experiencia */}
              {formData.experiences.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-emerald-800 tracking-wider border-l-4 border-emerald-600 pl-2 mb-3">Experiencia Laboral / Práctica</h3>
                  <div className="space-y-4">
                    {formData.experiences.map((exp, i) => (
                      <div key={i} className="text-xs space-y-1">
                        <div className="flex justify-between font-bold text-slate-900">
                          <span>{exp.position || "Cargo"} — <span className="text-emerald-700">{exp.company || "Empresa"}</span></span>
                          <span className="text-slate-500 font-normal">{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Educación */}
              {formData.education.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase text-emerald-800 tracking-wider border-l-4 border-emerald-600 pl-2 mb-3">Formación Académica</h3>
                  <div className="space-y-3">
                    {formData.education.map((edu, i) => (
                      <div key={i} className="text-xs flex justify-between items-baseline">
                        <div>
                          <span className="font-bold text-slate-900 block">{edu.degree || "Título obtenido"}</span>
                          <span className="text-slate-600">{edu.institution || "Institución"}</span>
                        </div>
                        <span className="text-emerald-700 font-semibold">{edu.year}</span>
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
