'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function TutorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy tu Tutor Progresa. ¿En qué te puedo ayudar hoy con tu hoja de vida o práctica?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, tuve un pequeño problema técnico. Inténtalo de nuevo en un momento.' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error de conexión. Verifica tu red.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Ventana de chat desplegable */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300">
          {/* Cabecera del chat */}
          <div className="bg-blue-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 border border-white/20">
                <Image src="/tutor-progresa.webp" alt="Tutor Progresa" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Tutor Progresa</h3>
                <p className="text-xs text-blue-200">Coach de Empleabilidad UNIMINUTO</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-lg font-bold px-2"
            >
              ✕
            </button>
          </div>

          {/* Cuerpo de mensajes */}
          <div className="p-4 h-80 overflow-y-auto space-y-3 bg-gray-50 text-sm">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-500 border border-gray-200 p-3 rounded-2xl rounded-bl-none text-xs animate-pulse">
                  El tutor está escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Formulario de entrada */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu duda sobre la hoja de vida..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      {/* Botón flotante con la mascota */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group focus:outline-none transform hover:scale-105 transition-transform duration-200"
        title="Hablar con Tutor Progresa"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-900 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300 animate-pulse"></div>
        <div className="relative w-16 h-16 rounded-full bg-white border-2 border-white shadow-xl overflow-hidden flex items-center justify-center">
          <Image 
            src="/tutor-progresa.webp" 
            alt="Mascota Tutor Progresa" 
            fill 
            className="object-cover" 
          />
        </div>
      </button>
    </div>
  );
}
