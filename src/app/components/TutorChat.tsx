"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

export default function TutorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy Praxia, tu asistente experta en prácticas profesionales y primer empleo. ¿En qué te puedo ayudar hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply || "¡Hola! Estoy lista para ayudarte con tus prácticas." }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Tuve un pequeño problema de conexión. Inténtalo de nuevo." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans print:hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-400 hover:bg-amber-300 text-blue-950 p-4 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-105"
          title="Abrir Asistente de Prácticas"
        >
          <Sparkles size={26} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white text-slate-800 w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden max-h-[500px]">
          <div className="bg-blue-950 text-white p-4 flex justify-between items-center border-b border-blue-900">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-400 text-blue-950 flex items-center justify-center font-black shadow-inner">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-xs font-black tracking-wide">Praxia</h3>
                <p className="text-[10px] text-amber-400 font-medium">Asistente de Prácticas Profesionales</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white p-1">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs max-h-[320px] min-h-[250px]">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${m.sender === "user" ? "bg-blue-900 text-white rounded-br-none" : "bg-white text-slate-700 shadow-sm border border-slate-200 rounded-bl-none"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="p-3 rounded-xl bg-white text-slate-400 shadow-sm border border-slate-200 animate-pulse">
                  Praxia está escribiendo...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregúntale a Praxia sobre tu hoja de vida..."
              className="flex-1 p-2.5 text-xs bg-slate-100 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 outline-none focus:border-blue-900"
            />
            <button
              type="submit"
              className="bg-blue-950 hover:bg-blue-900 text-amber-400 p-2.5 rounded-xl transition flex items-center justify-center shadow"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
