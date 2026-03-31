import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I am Cooper the Cougar, the AI assistant for Cougar Security 👋 We protect businesses and properties with CCTV, Access Control, and Patrolling. What can I help you with today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Direct POST to the active Cloud n8n Chat Trigger Webhook
      const response = await fetch('https://xadams1.app.n8n.cloud/webhook/731715b8-1473-4e5e-8a0c-b1ae92f35985/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
           action: "sendMessage",
           sessionId: "presentation-session-1",
           chatInput: userMessage
        })
      });

      const data = await response.json();
      
      // Auto-resolve nested n8n response architectures
      const botReply = data.output || data.text || data[0]?.output || "I've securely received your message and my team has been fully notified.";
      
      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am currently offline. Please call us securely 24/7 at 0800 226 2851.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '30px',
              width: '380px',
              height: '600px',
              background: 'rgba(10, 10, 10, 0.85)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(197, 77, 77, 0.3)',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 9999,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {/* Header Module - Exact Quantum Vector structure */}
            <div style={{
              padding: '1.2rem',
              background: 'rgba(5, 5, 5, 0.9)',
              borderBottom: '1px solid rgba(197, 77, 77, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/cougar-mascot.png" alt="Cooper" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,186,0,0.2)]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15px] tracking-wide">Cooper</h3>
                  <p className="text-white/50 text-[11px] uppercase tracking-widest mt-0.5 font-bold">Cameras · Alarms · Guarding</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dynamic Message Scaffolding */}
            <div style={{
              flex: '1 1 0%',
              padding: '1.2rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div style={{
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: msg.role === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                    background: msg.role === 'user' ? 'linear-gradient(135deg, #C54D4D, #8B2B2B)' : '#1A1B26',
                    color: '#fff',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    boxShadow: msg.role === 'user' ? '0 4px 15px rgba(197, 77, 77, 0.3)' : '0 4px 10px rgba(0,0,0,0.1)',
                    border: msg.role === 'bot' ? '1px solid rgba(255,255,255,0.05)' : 'none'
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1A1B26] p-4 rounded-[12px_12px_12px_4px] border border-white/5">
                    <div className="flex gap-1.5 items-center justify-center h-2">
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '-0.15s' }} />
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '-0.3s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Premium Input Form */}
            <form onSubmit={handleSubmit} style={{
              padding: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              gap: '0.5rem',
              background: 'rgba(5, 5, 5, 0.95)'
            }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 bg-[#1A1B26] border border-white/10 rounded-full px-5 text-sm text-white focus:outline-none focus:border-brand-primary placeholder-white/30"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="w-[42px] h-[42px] rounded-full bg-brand-primary flex items-center justify-center text-white disabled:opacity-50 hover:bg-red-600 transition-colors flex-shrink-0 shadow-lg shadow-brand-primary/20 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 ml-[-2px]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Identical Source Target Toggle Launcher */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C54D4D, #FFBA00)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          zIndex: 10000,
          boxShadow: 'rgba(197, 77, 77, 0.4) 0px 10px 20px',
          transform: isOpen ? 'scale(0.9)' : 'scale(1.05)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        className="hover:scale-[1.15] transition-transform"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </button>
    </>
  );
}
