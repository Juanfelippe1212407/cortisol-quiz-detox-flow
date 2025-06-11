
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { QuizAnswers } from '../../pages/Index';

interface FatigueLevelProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const options = [
  { value: 'Quase nunca', label: 'Quase nunca', color: 'from-green-500 to-emerald-600' },
  { value: 'Às vezes', label: 'Às vezes', color: 'from-yellow-500 to-orange-500' },
  { value: 'Com frequência', label: 'Com frequência', color: 'from-orange-500 to-red-500' },
  { value: 'Quase sempre', label: 'Quase sempre', color: 'from-red-500 to-red-700' },
];

const FatigueLevel: React.FC<FatigueLevelProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
        Nos últimos meses, com que frequência você se sente cansada e sem energia, 
        mesmo após uma boa noite de sono?
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
              onClick={() => onNext({ cansaco: option.value })}
              variant="outline"
              className={`w-full h-16 bg-gray-800 hover:bg-gradient-to-r hover:${option.color} border-gray-600 hover:border-transparent text-white font-semibold text-lg transition-all duration-300`}
            >
              {option.label}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FatigueLevel;
