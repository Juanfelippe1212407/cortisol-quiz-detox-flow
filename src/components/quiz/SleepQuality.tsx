
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { QuizAnswers } from '../../pages/Index';

interface SleepQualityProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const options = [
  { value: 'Durmo bem e acordo renovada', label: 'Durmo bem e acordo renovada', emoji: '😴' },
  { value: 'Tenho dificuldade para pegar no sono', label: 'Tenho dificuldade para pegar no sono', emoji: '😵‍💫' },
  { value: 'Acordo várias vezes durante a noite', label: 'Acordo várias vezes durante a noite', emoji: '😖' },
  { value: 'Durmo, mas acordo cansada', label: 'Durmo, mas acordo cansada', emoji: '😪' },
];

const SleepQuality: React.FC<SleepQualityProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Como você descreveria a qualidade do seu sono?
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
              onClick={() => onNext({ sono: option.value })}
              variant="outline"
              className="w-full h-16 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 border-gray-600 hover:border-blue-400 text-white font-semibold text-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.emoji}</span>
                <span>{option.label}</span>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SleepQuality;
