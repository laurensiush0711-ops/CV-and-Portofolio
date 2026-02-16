import React, { useState, useRef, useEffect } from 'react';
import { getCareerAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { CV_DATA } from '../constants';

const CareerBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    // Fix: Corrected name to match the CV data (Laurensius) instead of "Alex".
    { role: 'assistant', content: `Hi! I'm ${CV_DATA.name.split(' ')[0]}'s AI Career Bot. Ask me how I translate QA precision into Data Analytics!` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && isOpen) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const aiResponse = await getCareerAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection to AI failed. Please check your network or API key configuration." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 flex flex-col h-[70vh] md:h-[450px] w-[90vw] max-w-[350px] bg-[#112240] border border-[#233554] rounded-lg shadow-2xl overflow-hidden reveal">
          <div className="bg-[#112240] border-b border-[#233554] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#64ffda]/20 flex items-center justify-center text-[#64ffda]">
                <i className="fas fa-terminal text-sm"></i>
              </div>
              <span className="text-sm font-semibold text-[#ccd6f6] mono">Career.AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#8892b0] hover:text-[#64ffda] p-2">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a192f]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3 rounded-md text-[13px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#112240] text-[#64ffda] border border-[#64ffda]/30' 
                    : 'bg-[#233554] text-[#ccd6f6]'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#233554] p-3 rounded-md animate-pulse text-[#8892b0] text-[13px] mono">
                  analyzing query...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-[#233554] bg-[#112240]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my pivot..."
                className="flex-1 bg-[#0a192f] border border-[#233554] rounded px-3 py-2 text-xs text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="text-[#64ffda] hover:bg-[#64ffda]/10 w-10 h-10 rounded flex items-center justify-center transition-colors"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center text-lg md:text-xl transition-all duration-300 ${
          isOpen ? 'bg-[#112240] text-[#64ffda] rotate-90 shadow-[0_0_15px_rgba(100,255,218,0.2)]' : 'bg-[#64ffda] text-[#0a192f] hover:-translate-y-1'
        }`}
      >
        <i className={isOpen ? 'fas fa-times' : 'fas fa-terminal'}></i>
      </button>
    </div>
  );
};

export default CareerBot;