
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { QuizAnswers } from '../../pages/Index';

interface FrustrationFormProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  userName?: string;
}

const FrustrationForm: React.FC<FrustrationFormProps> = ({ onNext, userName }) => {
  const [frustration, setFrustration] = useState('');

  const handleSubmit = () => {
    if (!frustration.trim()) {
      alert('Por favor, descreva sua frustração para receber um diagnóstico preciso.');
      return;
    }
    onNext({ frustration: frustration.trim() });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Por último, {userName && <span className="text-green-400">{userName}</span>}: 
        em poucas palavras, o que mais te frustra hoje?
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        <Textarea
          placeholder="Ex: Me sentir sem disposição, não gostar do que vejo no espelho..."
          value={frustration}
          onChange={(e) => setFrustration(e.target.value)}
          rows={4}
          className="w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 text-lg"
        />

        <Button
          onClick={handleSubmit}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg"
        >
          Finalizar e ver meu diagnóstico
        </Button>
      </div>
    </motion.div>
  );
};

export default FrustrationForm;
