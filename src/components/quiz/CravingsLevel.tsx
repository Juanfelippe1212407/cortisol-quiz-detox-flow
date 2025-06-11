
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { QuizAnswers } from '../../pages/Index';

interface CravingsLevelProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const options = [
  { value: 'Não, raramente', label: 'Não, raramente' },
  { value: 'Às vezes', label: 'Às vezes' },
  { value: 'Sim, com frequência', label: 'Sim, com frequência' },
];

const CravingsLevel: React.FC<CravingsLevelProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
        Você percebe um aumento no desejo por alimentos doces ou gordurosos 
        quando está estressada ou ansiosa?
      </h2>

      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {options.map((option, index) => (
          <motion.div
            key={option.value}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => onNext({ desejo_doces: option.value })}
              variant="outline"
              className="w-full h-16 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border-gray-600 hover:border-purple-400 text-white font-semibold text-lg transition-all duration-300"
            >
              {option.label}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CravingsLevel;
