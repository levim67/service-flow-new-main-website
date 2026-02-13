import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, ChatSender } from '../types';
import { PRICING, INDUSTRIES, CONTACT_EMAIL } from '../constants';

const SYSTEM_INSTRUCTION = `You are the helpful AI Assistant for ServiceFlow Media, a lead generation agency for local service businesses (Roofers, Gyms, Cleaners, etc.).
Your goal is to answer questions to help converting visitors into booking a call.

Key Facts:
- Services: Facebook Ads, Instagram Lead Ads, and Mobile-First Website Builds.
- We help: ${INDUSTRIES.join(', ')}.
- Pricing (Ads): Starter ($1200/mo), Growth ($2000/mo), Scale ($3500/mo). Ad spend is separate.
- Pricing (Websites): One-time projects starting at $1,500.
- No long contracts. Month-to-month for ads.

Tone: Professional, concise, helpful. No hype. Use short sentences.
If someone asks to book, direct them to click the "Book a 15-minute call" button in the header.
Do not make up facts. If unsure, ask them to contact ${CONTACT_EMAIL}.`;

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', text: 'Hi! I can answer questions about our ads, websites, or pricing. How can I help?', sender: ChatSender.BOT }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), text: input, sender: ChatSender.USER };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-3-flash-preview";
      
      const response = await ai.models.generateContent({
        model: model,
        contents: [
          ...messages.map(m => ({ 
            role: m.sender === ChatSender.USER ? 'user' : 'model', 
            parts: [{ text: m.text }] 
          })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const botText = response.text || "I'm having trouble connecting right now. Please email us directly.";
      
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        text: botText, 
        sender: ChatSender.BOT 
      }]);

    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        text: "Sorry, I'm offline at the moment. Please use the contact form.", 
        sender: ChatSender.BOT 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!process.env.API_KEY) return null; // Don't show if no key

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col animate-fade-in-up" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-4 flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <h3 className="text-white font-medium text-sm">ServiceFlow Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-950/95 space-y-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                  msg.sender === ChatSender.USER
                    ? 'bg-blue-600 text-white self-end ml-auto rounded-tr-sm shadow-md'
                    : 'bg-slate-800 text-slate-200 border border-slate-700 shadow-sm rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-500 text-xs ml-2">
                <Loader2 className="w-3 h-3 animate-spin" /> Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about pricing or strategy..."
              className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white p-2.5 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-110 flex items-center gap-2"
        aria-label="Open Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};