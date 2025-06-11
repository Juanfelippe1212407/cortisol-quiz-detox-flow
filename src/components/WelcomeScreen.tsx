
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-500/20 to-orange-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-full px-6 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-semibold text-green-300">Quiz Científico Personalizado</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
        >
          Descubra o{' '}
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            motivo real
          </span>{' '}
          por trás da sua dificuldade em emagrecer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Este teste científico vai revelar como um{' '}
          <span className="text-yellow-400 font-semibold">hormônio específico</span>{' '}
          pode estar sabotando os seus esforços para perder peso.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 text-gray-300">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Diagnóstico Preciso</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Resultados em 2 min</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">100% Personalizado</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl hover:shadow-green-500/40"
          >
            FAZER O TESTE AGORA
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400 mb-4">Mais de 190.000 pessoas já fizeram este teste</p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400 fill-current" />
              </motion.div>
            ))}
            <span className="ml-2 text-sm text-gray-300 font-medium">4.8/5 avaliação</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
