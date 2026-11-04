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

  // Enlaces Profesionales (Sección 1)
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

  // Herramientas (Sección 2)
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

  // Idiomas
  const addLanguage = () => {
    setFormData({ ...formData, languageList: [...formData.languageList, { language: "", level: "B1 - Intermedio" }] });
  };
  const updateLanguage = (index: number, field: string, value: string) => {
    const list = [...formData.languageList];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, languageList: list });
  };
  const removeLanguage = (index: number) => {
    setFormData({ ...formData, languageList: formData.languageList.filter((_, i) => i !== index) });
  };

  // Educación Formal
  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institution: "", degree: "", level: "Profesional", year: "", isCurrent: false, semester: "" }],
    });
  };
  const updateEducation = (index: number, field: string, value: any) => {
    const list = [...formData.education];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, education: list });
  };
  const removeEducation = (index: number) => {
    setFormData({ ...formData, education: formData.education.filter((_, i) => i !== index) });
  };

  // Formación Complementaria
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

  // Experiencia Laboral
  const addExperience = () => {
    setFormData({ ...formData, experiences: [...formData.experiences, { company: "", position: "", startDate: "", endDate: "", description: "" }] });
  };
  const updateExperience = (index: number, field: string, value: string) => {
    const list = [...formData.experiences];
    (list[index] as any)[field] = value;
    setFormData({ ...formData, experiences: list });
  };
  const removeExperience = (index: number) => {
    setFormData({ ...formData, experiences: formData.experiences.filter((_, i) => i !== index) });
  };

  // Proyectos
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
    <main className="min-h-screen bg-slate-100 text-slate-800 flex flex-col items-center">
      {!started ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl my-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6">
            <div className="flex justify-center space-x-4 mb-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">UNIMINUTO</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">Centro Progresa</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Creador de Hoja de Vida Institucional</h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Herramienta oficial optimizada para estudiantes y candidatos a prácticas profesionales. Diseñada bajo estándares ATS y con procesamiento 100% local en tu navegador para proteger tu privacidad.
            </p>
            <button
              onClick={() => setStarted(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-md transition-all space-x-2 w-full sm:w-auto"
            >
              <span>Comenzar a crear mi Hoja de Vida</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Formulario (Columna Izquierda) */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-8 print:hidden">
            <div className="flex items-center justify-between border-b pb-4">
              <button
                onClick={() => setStarted(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center space-x-1"
              >
                <span>← Volver al inicio</span>
              </button>
              <h2 className="text-lg font-bold text-slate-900">Editor de Datos</h2>
            </div>

            {/* 1. INFORMACIÓN PERSONAL */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase text-blue-900 tracking-wider flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>1. Información Personal</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full text-sm p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="correo@uniminuto.edu"
                    className="w-full text-sm p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Celular</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="3000000000"
                    className="w-full text-sm p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Ciudad</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full text-sm p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  />
                </div>
              </div>

              {/* Enlaces */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-700">Enlaces y Portafolios (LinkedIn, GitHub)</label>
                  <button onClick={addLink} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir Enlace</span>
                  </button>
                </div>
                {formData.links.map((link, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Etiqueta (Ej. LinkedIn)"
                      value={link.label}
                      onChange={(e) => updateLink(index, "label", e.target.value)}
                      className="w-1/3 text-xs p-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="https://..."
                      value={link.url}
                      onChange={(e) => updateLink(index, "url", e.target.value)}
                      className="w-2/3 text-xs p-2 border rounded-lg"
                    />
                    <button onClick={() => removeLink(index)} className="text-red-500 hover:text-red-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. PERFIL PROFESIONAL */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-bold uppercase text-blue-900 tracking-wider flex items-center space-x-2">
                <Info className="w-4 h-4" />
                <span>2. Perfil Profesional</span>
              </h3>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Perfil Ocupacional / Resumen</label>
                <textarea
                  name="profile"
                  rows={4}
                  value={formData.profile}
                  onChange={handleInputChange}
                  placeholder="Estudiante en formación de..."
                  className="w-full text-sm p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Habilidades Blandas (separadas por comas)</label>
                <input
                  type="text"
                  name="softSkills"
                  value={formData.softSkills}
                  onChange={handleInputChange}
                  placeholder="Disciplina, adaptación, trabajo en equipo"
                  className="w-full text-sm p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                />
              </div>

              {/* Herramientas */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-700">Herramientas y Software</label>
                  <button onClick={addTool} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir Herramienta</span>
                  </button>
                </div>
                {formData.toolsList.map((tool, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Ej. Excel, Python"
                      value={tool.name}
                      onChange={(e) => updateTool(index, "name", e.target.value)}
                      className="w-1/2 text-xs p-2 border rounded-lg"
                    />
                    <select
                      value={tool.level}
                      onChange={(e) => updateTool(index, "level", e.target.value)}
                      className="w-1/2 text-xs p-2 border rounded-lg bg-white"
                    >
                      <option value="Básico">Básico</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Avanzado">Avanzado</option>
                      <option value="Experto">Experto</option>
                    </select>
                    <button onClick={() => removeTool(index)} className="text-red-500 hover:text-red-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Idiomas */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-700">Idiomas</label>
                  <button onClick={addLanguage} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir Idioma</span>
                  </button>
                </div>
                {formData.languageList.map((lang, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Ej. Inglés"
                      value={lang.language}
                      onChange={(e) => updateLanguage(index, "language", e.target.value)}
                      className="w-1/2 text-xs p-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Ej. B2 - Intermedio Alto"
                      value={lang.level}
                      onChange={(e) => updateLanguage(index, "level", e.target.value)}
                      className="w-1/2 text-xs p-2 border rounded-lg"
                    />
                    <button onClick={() => removeLanguage(index)} className="text-red-500 hover:text-red-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. FORMACIÓN */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-bold uppercase text-blue-900 tracking-wider flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>3. Formación Académica y Complementaria</span>
              </h3>

              {/* Educación principal y secundaria */}
              {formData.education.map((edu, index) => (
                <div key={index} className="p-3 bg-slate-50 border rounded-lg space-y-3 relative">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-700">Estudio #{index + 1}</span>
                    {index > 0 && (
                      <button onClick={() => removeEducation(index)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Institución Educativa"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, "institution", e.target.value)}
                    className="w-full text-xs p-2 border rounded-lg bg-white"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Título obtenido"
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, "degree", e.target.value)}
                      className="text-xs p-2 border rounded-lg bg-white"
                    />
                    <select
                      value={edu.level}
                      onChange={(e) => updateEducation(index, "level", e.target.value)}
                      className="text-xs p-2 border rounded-lg bg-white"
                    >
                      <option value="Profesional">Profesional</option>
                      <option value="Bachiller">Bachiller</option>
                      <option value="Técnico">Técnico</option>
                      <option value="Tecnólogo">Tecnólogo</option>
                      <option value="Especialización">Especialización</option>
                      <option value="Maestría">Maestría</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Año de finalización"
                      value={edu.year}
                      onChange={(e) => updateEducation(index, "year", e.target.value)}
                      className="text-xs p-2 border rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Semestre (Ej. Octavo semestre)"
                      value={edu.semester || ""}
                      onChange={(e) => updateEducation(index, "semester", e.target.value)}
                      className="text-xs p-2 border rounded-lg bg-white"
                    />
                  </div>
                </div>
              ))}
              <button onClick={addEducation} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                <Plus className="w-3.5 h-3.5" />
                <span>Añadir otro estudio formal</span>
              </button>

              {/* Formación Complementaria */}
              <div className="space-y-2 pt-2 border-t">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-700">Formación Complementaria (Cursos, Talleres)</label>
                  <button onClick={addComplementary} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir Curso</span>
                  </button>
                </div>
                {formData.complementaryEdu.map((comp, index) => (
                  <div key={index} className="p-3 bg-slate-50 border rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold">Curso #{index + 1}</span>
                      <button onClick={() => removeComplementary(index)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Título del curso"
                      value={comp.title}
                      onChange={(e) => updateComplementary(index, "title", e.target.value)}
                      className="w-full text-xs p-2 border rounded-lg bg-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Institución"
                        value={comp.institution}
                        onChange={(e) => updateComplementary(index, "institution", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                      <input
                        type="text"
                        placeholder="Año (Ej. 2025)"
                        value={comp.year}
                        onChange={(e) => updateComplementary(index, "year", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. EXPERIENCIA PROFESIONAL */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-bold uppercase text-blue-900 tracking-wider flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>4. Experiencia y Proyectos</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-700">Experiencia Laboral</label>
                  <button onClick={addExperience} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir Experiencia</span>
                  </button>
                </div>
                {formData.experiences.map((exp, index) => (
                  <div key={index} className="p-3 bg-slate-50 border rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold">Experiencia #{index + 1}</span>
                      <button onClick={() => removeExperience(index)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Empresa"
                        value={exp.company}
                        onChange={(e) => updateExperience(index, "company", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                      <input
                        type="text"
                        placeholder="Cargo o Puesto"
                        value={exp.position}
                        onChange={(e) => updateExperience(index, "position", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Fecha Inicio (Ej. 2024)"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                      <input
                        type="text"
                        placeholder="Fecha Fin (Ej. Actual)"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Funciones o logros principales..."
                      value={exp.description}
                      onChange={(e) => updateExperience(index, "description", e.target.value)}
                      className="w-full text-xs p-2 border rounded-lg bg-white"
                    />
                  </div>
                ))}
              </div>

              {/* Proyectos Académicos */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-700">Proyectos Académicos / Prácticos</label>
                  <button onClick={addProject} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir Proyecto</span>
                  </button>
                </div>
                {formData.projects.map((proj, index) => (
                  <div key={index} className="p-3 bg-slate-50 border rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold">Proyecto #{index + 1}</span>
                      <button onClick={() => removeProject(index)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Nombre del proyecto"
                        value={proj.name}
                        onChange={(e) => updateProject(index, "name", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                      <input
                        type="text"
                        placeholder="Rol (Ej. Líder de desarrollo)"
                        value={proj.role}
                        onChange={(e) => updateProject(index, "role", e.target.value)}
                        className="text-xs p-2 border rounded-lg bg-white"
                      />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Breve descripción de los resultados..."
                      value={proj.description}
                      onChange={(e) => updateProject(index, "description", e.target.value)}
                      className="w-full text-xs p-2 border rounded-lg bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 5. VOLUNTARIADO */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-bold uppercase text-blue-900 tracking-wider flex items-center space-x-2">
                <HeartHandshake className="w-4 h-4" />
                <span>5. Voluntariado y Responsabilidad Social</span>
              </h3>
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-slate-700">Experiencias de Voluntariado</label>
                <button onClick={addVolunteer} className="text-xs text-blue-900 font-bold flex items-center space-x-1 hover:underline">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir Voluntariado</span>
                </button>
              </div>
              {formData.volunteers.map((vol, index) => (
                <div key={index} className="p-3 bg-slate-50 border rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold">Voluntariado #{index + 1}</span>
                    <button onClick={() => removeVolunteer(index)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Organización"
                    value={vol.organization}
                    onChange={(e) => updateVolunteer(index, "organization", e.target.value)}
                    className="w-full text-xs p-2 border rounded-lg bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Rol o actividad"
                    value={vol.role}
                    onChange={(e) => updateVolunteer(index, "role", e.target.value)}
                    className="w-full text-xs p-2 border rounded-lg bg-white"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Fecha Inicio"
                      value={vol.startDate}
                      onChange={(e) => updateVolunteer(index, "startDate", e.target.value)}
                      className="text-xs p-2 border rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Fecha Fin"
                      value={vol.endDate}
                      onChange={(e) => updateVolunteer(index, "endDate", e.target.value)}
                      className="text-xs p-2 border rounded-lg bg-white"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Descripción..."
                    value={vol.description}
                    onChange={(e) => updateVolunteer(index, "description", e.target.value)}
                    className="w-full text-xs p-2 border rounded-lg bg-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* VISTA PREVIA (Columna Derecha / Impresión) */}
          <div className="lg:col-span-6 bg-slate-200 p-4 rounded-2xl flex flex-col items-center justify-start">
            <div className="w-full flex justify-between items-center mb-4 px-2 print:hidden">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">📄 Vista Previa Institucional</span>
              <button
                onClick={() => window.print()}
                className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow transition-all flex items-center space-x-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Descargar / Imprimir PDF</span>
              </button>
            </div>

            {/* Hoja A4 / Carta Simulada */}
            <div className="w-full bg-white shadow-2xl rounded-sm p-8 text-[11px] leading-tight text-slate-800 space-y-4 min-h-[1050px] relative font-sans">
              
              {/* Cabecera institucional */}
              <div className="flex justify-between items-start border-b-2 border-slate-900 pb-4">
                <div>
                  <h1 className="text-lg font-black tracking-tight text-slate-900 uppercase">
                    {formData.fullName || "NOMBRE APELLIDO"}
                  </h1>
                  <p className="text-[11px] font-bold text-blue-900 uppercase tracking-widest mt-0.5">
                    Candidato a Práctica Profesional
                  </p>
                </div>
                <div className="text-right flex items-center space-x-3">
                  <div className="text-right text-[10px] text-slate-600 space-y-0.5">
                    <p className="font-semibold text-slate-800">{formData.email || "correo@uniminuto.edu"}</p>
                    <p>{formData.phone || "3000000000"} • {formData.city}</p>
                    {formData.links.map((l, i) => (
                      <p key={i} className="text-blue-700 underline truncate max-w-[200px]">{l.label}: {l.url}</p>
                    ))}
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="w-12 h-6 bg-slate-300 rounded flex items-center justify-center text-[8px] font-bold text-slate-700">Rectoría Bogotá</div>
                    <div className="w-12 h-6 bg-amber-200 rounded flex items-center justify-center text-[8px] font-bold text-amber-800">Centro Progresa</div>
                  </div>
                </div>
              </div>

              {/* Perfil y Competencias */}
              {formData.profile && (
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold uppercase text-slate-700 block tracking-wide border-b border-slate-200 pb-1">
                    Perfil Profesional
                  </span>
                  <p className="text-slate-700 text-justify leading-relaxed">{formData.profile}</p>
                </div>
              )}

              {/* Habilidades, Herramientas e Idiomas en mini badges */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {formData.softSkills && (
                  <div className="bg-slate-50 p-2 rounded border border-slate-200">
                    <span className="font-bold text-[10px] uppercase text-slate-900 block mb-1">Habilidades</span>
                    <p className="text-slate-700">{formData.softSkills}</p>
                  </div>
                )}
                {formData.toolsList.length > 0 && (
                  <div className="bg-slate-50 p-2 rounded border border-slate-200">
                    <span className="font-bold text-[10px] uppercase text-slate-900 block mb-1">Herramientas</span>
                    <ul className="list-disc pl-3 text-slate-700">
                      {formData.toolsList.map((t, i) => (
                        <li key={i}>{t.name} <span className="text-slate-500 font-normal">({t.level})</span></li>
                      ))}
                    </ul>
                  </div>
                )}
                {formData.languageList.length > 0 && (
                  <div className="bg-slate-50 p-2 rounded border border-slate-200">
                    <span className="font-bold text-[10px] uppercase text-slate-900 block mb-1">Idiomas</span>
                    <ul className="list-disc pl-3 text-slate-700">
                      {formData.languageList.map((l, i) => (
                        <li key={i}>{l.language} <span className="text-slate-500 font-normal">({l.level})</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* FORMACIÓN ACADÉMICA Y COMPLEMENTARIA (Con línea de tiempo) */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-extrabold uppercase text-slate-700 block tracking-wide border-b border-slate-200 pb-1">
                  Formación Académica
                </span>
                
                {/* Académica Principal */}
                <div className="space-y-2">
                  {formData.education.map((edu, i) => (
                    <div key={i} className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase">{edu.degree ? `${edu.degree} (${edu.level})` : edu.level}</h4>
                        <p className="text-slate-700 font-medium">{edu.institution}</p>
                        {edu.semester && <p className="text-blue-900 font-semibold">{edu.semester}</p>}
                      </div>
                      <span className="text-slate-600 font-semibold">{edu.year || (edu.isCurrent ? "En curso" : "")}</span>
                    </div>
                  ))}
                </div>

                {/* Formación Complementaria en formato Línea de Tiempo */}
                {formData.complementaryEdu.length > 0 && (
                  <div className="mt-3 pt-2">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-2">Formación Complementaria</span>
                    <div className="relative border-l-2 border-slate-300 ml-2 pl-4 space-y-3">
                      {[...formData.complementaryEdu]
                        .sort((a, b) => parseInt(b.year || "0") - parseInt(a.year || "0"))
                        .map((comp, i) => (
                          <div key={i} className="relative group">
                            <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 border-slate-700 bg-white"></div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-bold text-slate-900 uppercase">{comp.title}</h5>
                                <p className="text-slate-600">{comp.institution}</p>
                              </div>
                              <span className="text-slate-700 font-semibold">{comp.year}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* EXPERIENCIA PROFESIONAL (Con línea de tiempo vertical) */}
              {formData.experiences.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-700 block tracking-wide border-b border-slate-200 pb-1">
                    Experiencia Profesional
                  </span>
                  <div className="relative border-l-2 border-slate-300 ml-2 pl-4 space-y-4">
                    {[...formData.experiences]
                      .sort((a, b) => (b.startDate || "").localeCompare(a.startDate || ""))
                      .map((exp, i) => (
                        <div key={i} className="relative group">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 border-slate-700 bg-white"></div>
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-slate-900 uppercase">{exp.position}</h4>
                              <p className="text-blue-900 font-semibold">{exp.company}</p>
                              {exp.description && (
                                <p className="text-slate-700 mt-1 whitespace-pre-line leading-normal">
                                  • {exp.description}
                                </p>
                              )}
                            </div>
                            <span className="text-slate-600 font-semibold whitespace-nowrap ml-2">
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* PROYECTOS ACADÉMICOS */}
              {formData.projects.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-700 block tracking-wide border-b border-slate-200 pb-1">
                    Proyectos Académicos
                  </span>
                  <div className="space-y-2">
                    {formData.projects.map((proj, i) => (
                      <div key={i} className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-slate-900 uppercase">{proj.name} <span className="font-normal text-slate-600">({proj.role})</span></h4>
                          <p className="text-slate-700">{proj.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VOLUNTARIADO */}
              {formData.volunteers.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-700 block tracking-wide border-b border-slate-200 pb-1">
                    Voluntariado y Responsabilidad Social
                  </span>
                  <div className="space-y-2">
                    {formData.volunteers.map((vol, i) => (
                      <div key={i} className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-slate-900 uppercase">{vol.role}</h4>
                          <p className="text-blue-900 font-semibold">{vol.organization}</p>
                          <p className="text-slate-700">{vol.description}</p>
                        </div>
                        <span className="text-slate-600 font-semibold">{vol.startDate} - {vol.endDate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pie de página institucional */}
              <div className="absolute bottom-6 left-8 right-8 text-center border-t border-slate-300 pt-3 text-[9px] text-slate-500 space-y-0.5">
                <p>Línea de Atención al Usuario: 601 593 3004 · Línea Nacional: 01 8000 936 670</p>
                <p className="font-semibold text-slate-700">www.uniminuto.edu — VIGILADA MINEDUCACIÓN</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}
