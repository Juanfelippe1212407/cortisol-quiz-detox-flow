
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { QuizAnswers } from '../../pages/Index';

interface GenderSelectionProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Qual é o seu gênero?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => onNext({ gender: 'Mulher' })}
            variant="outline"
            className="w-full h-32 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 border-gray-600 hover:border-pink-400 text-white font-bold text-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl">👩</div>
              <span>Mulher</span>
            </div>
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => onNext({ gender: 'Homem' })}
            variant="outline"
            className="w-full h-32 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 border-gray-600 hover:border-blue-400 text-white font-bold text-xl"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl">👨</div>
              <span>Homem</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GenderSelection;
