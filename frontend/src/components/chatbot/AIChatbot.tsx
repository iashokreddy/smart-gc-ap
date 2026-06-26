'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sourceUrl?: string;
  isUncertain?: boolean;
  timestamp: Date;
}

function localAssistantReply(input: string): { reply: string; isUncertain?: boolean; sourceUrl?: string } {
  const text = input.toLowerCase();

  if (text.includes('scheme') || text.includes('పథకం') || text.includes('eligibility')) {
    return {
      reply:
        'You can explore government schemes in the Schemes section and use the eligibility calculator. For exact eligibility, please verify with official AP government scheme portals.',
      isUncertain: true,
      sourceUrl: 'https://www.ap.gov.in/',
    };
  }

  if (text.includes('veligonda')) {
    return {
      reply:
        'Please check the Veligonda section for timeline and milestone updates published from official sources. If a detail is missing, refer to district administration releases.',
      isUncertain: true,
      sourceUrl: 'https://www.ap.gov.in/',
    };
  }

  if (text.includes('emergency') || text.includes('help') || text.includes('అత్యవసర')) {
    return {
      reply:
        'Emergency contacts: Police 100, Ambulance 108, Fire 101. You can also use the Emergency Contacts section on the homepage.',
    };
  }

  return {
    reply:
      'I can help with schemes, district updates, grievances, and services. For authoritative details, always cross-check official Government of Andhra Pradesh sources.',
    isUncertain: true,
    sourceUrl: 'https://www.ap.gov.in/',
  };
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    'నమస్కారం! Welcome to Markapuram Portal. I can help you with information about government schemes, development projects, citizen services, and more. How can I assist you today?\n\n(నేను తెలుగులో కూడా సహాయం చేయగలను!)',
  timestamp: new Date(),
};

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const endpoint = process.env.NEXT_PUBLIC_CHATBOT_API_URL;
      const data = endpoint
        ? await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, history: messages.slice(-6) }),
          }).then(async (res) => {
            if (!res.ok) {
              throw new Error('Chat endpoint failed');
            }
            return res.json();
          })
        : localAssistantReply(text);

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply,
        sourceUrl: data.sourceUrl,
        isUncertain: data.isUncertain,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            'I could not reach the live AI service right now. Showing local guidance mode — please verify with official sources.',
          isUncertain: true,
          sourceUrl: 'https://www.ap.gov.in/',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all',
          open && 'hidden',
        )}
        aria-label="Open AI Chatbot"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-saffron-500 rounded-full text-[9px] flex items-center justify-center font-bold">
          AI
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[520px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          role="dialog"
          aria-label="AI Chatbot"
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4 bg-brand-700 text-white">
            <Bot className="w-5 h-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm leading-tight">Markapuram AI Assistant</p>
              <p className="text-xs text-blue-200">Telugu & English | Powered by AI</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded hover:bg-brand-600 transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn('flex gap-2', msg.role === 'user' ? 'flex-row-reverse' : 'flex-row')}
              >
                <div
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0',
                    msg.role === 'user' ? 'bg-brand-100 dark:bg-brand-900' : 'bg-gray-100 dark:bg-gray-800',
                  )}
                >
                  {msg.role === 'user' ? (
                    <User className="w-4 h-4 text-brand-700 dark:text-brand-400" />
                  ) : (
                    <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  )}
                </div>
                <div
                  className={cn(
                    'max-w-[80%] rounded-2xl px-3 py-2 text-sm',
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-tr-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-sm',
                  )}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.isUncertain && (
                    <p className="text-xs mt-1 text-yellow-600 dark:text-yellow-400 italic">
                      ⚠ I&apos;m not fully certain — please verify with official sources.
                    </p>
                  )}
                  {msg.sourceUrl && (
                    <a
                      href={msg.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs mt-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" /> Official Source
                    </a>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-gray-600" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Ask about schemes, services..."
                className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Chat input"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="p-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1.5 text-center">
              AI responses may not always be accurate. Verify with official sources.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
