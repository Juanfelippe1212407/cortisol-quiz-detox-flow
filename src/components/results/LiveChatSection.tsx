
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { QuizAnswers } from '../../pages/Index';

interface LiveChatSectionProps {
  quizAnswers: QuizAnswers;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const LiveChatSection: React.FC<LiveChatSectionProps> = ({ quizAnswers }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate initial AI message based on quiz answers
    const initialMessage = generateInitialMessage(quizAnswers);
    setMessages([{
      role: 'assistant',
      content: initialMessage,
      timestamp: new Date()
    }]);
  }, [quizAnswers]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateInitialMessage = (answers: QuizAnswers): string => {
    const concerns = answers.incomodidades?.join(', ') || 'problemas de peso';
    return `Olá, ${answers.name}! 👋

Analisei suas respostas e identifiquei um padrão muito comum: seus sintomas como ${concerns} indicam um possível desequilíbrio do **cortisol** - o hormônio do estresse.

Este hormônio, quando desregulado, pode:
• Acelerar o acúmulo de gordura abdominal
• Causar compulsão alimentar
• Reduzir sua energia e disposição
• Tornar o emagrecimento muito mais difícil

A boa notícia é que existe uma solução natural e eficaz para isso. O **Lift Detox** foi desenvolvido especificamente para regular o cortisol e acelerar seus resultados.

Qual é sua maior dúvida sobre como o cortisol pode estar afetando seu peso? 🤔`;
  };

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = [
      `Entendo sua preocupação, ${quizAnswers.name}. O cortisol elevado é realmente um dos principais vilões do emagrecimento. Quando está alto, nosso corpo entra em modo "sobrevivência" e armazena energia como gordura, especialmente na região abdominal.

O Lift Detox contém ingredientes naturais que ajudam a regular esse hormônio e acelerar o metabolismo. Milhares de pessoas já viram resultados incríveis!

Você já tentou algum método para controlar o estresse e o cortisol antes?`,

      `Essa é uma excelente pergunta! O cortisol alto está diretamente ligado aos sintomas que você mencionou no quiz. É como se seu corpo estivesse constantemente em "alerta vermelho".

O Lift Detox trabalha de forma natural para:
✅ Regular os níveis de cortisol
✅ Acelerar o metabolismo 
✅ Reduzir a compulsão por doces
✅ Melhorar a qualidade do sono

Baseado no seu perfil, recomendo especialmente o kit de 3 meses para você ver resultados consistentes. O que acha?`,

      `Perfeito! Você está no caminho certo. O importante é entender que o emagrecimento saudável não é só sobre dieta e exercício - é sobre equilibrar seus hormônios também.

Com o cortisol regulado pelo Lift Detox, você vai notar:
🔥 Mais energia durante o dia
🔥 Menos vontade de "beliscar" doces
🔥 Redução do inchaço
🔥 Queima de gordura mais eficiente

Muitas clientes relatam que sentem diferença já na primeira semana! Posso te ajudar a escolher o melhor kit para seu objetivo?`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    // Add user message
    setMessages(prev => [...prev, {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    }]);

    setIsLoading(true);

    try {
      const aiResponse = await generateAIResponse(userMessage);
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error generating AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="py-12 md:py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-300">Consulta ao Vivo Ativa</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Sua Consulta ao Vivo Começou
          </h1>
          <p className="text-lg text-gray-300">
            Nossa IA especializada está pronta para esclarecer suas dúvidas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
        >
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-900">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-br-sm'
                    : 'bg-gray-800 text-gray-100 rounded-bl-sm border border-gray-700'
                }`}>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                  <div className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-green-100' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {message.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3 justify-start"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-bl-sm p-4">
                  <div className="flex items-center gap-1 text-green-400">
                    <span className="text-sm">Especialista está digitando</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <div className="flex gap-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Faça sua pergunta sobre o Lift Detox..."
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveChatSection;
