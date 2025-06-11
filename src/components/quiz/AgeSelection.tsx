
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { QuizAnswers } from '../../pages/Index';

interface AgeSelectionProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const AgeSelection: React.FC<AgeSelectionProps> = ({ onNext }) => {
  const [age, setAge] = useState([35]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Qual é a sua idade?
      </h2>

      <div className="max-w-md mx-auto space-y-8">
        <div className="space-y-6">
          <Slider
            value={age}
            onValueChange={setAge}
            max={80}
            min={18}
            step={1}
            className="w-full"
          />
          
          <motion.div
            key={age[0]}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <span className="text-5xl font-bold text-green-400">
              {age[0]} anos
            </span>
          </motion.div>
        </div>

        <Button
          onClick={() => onNext({ age: age[0].toString() })}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg"
        >
          Próximo
        </Button>
      </div>
    </motion.div>
  );
};

export default AgeSelection;
