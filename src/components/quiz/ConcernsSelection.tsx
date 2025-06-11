
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { QuizAnswers } from '../../pages/Index';

interface ConcernsSelectionProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const concerns = [
  { id: 'gordura-barriga', label: 'Gordura na barriga', emoji: '🤰' },
  { id: 'inchaco', label: 'Inchaço no corpo', emoji: '💧' },
  { id: 'falta-energia', label: 'Falta de energia', emoji: '😴' },
  { id: 'compulsao-doces', label: 'Compulsão por doces', emoji: '🍰' },
  { id: 'metabolismo-lento', label: 'Metabolismo lento', emoji: '🐌' },
  { id: 'intestino-preso', label: 'Intestino preso', emoji: '😣' },
];

const ConcernsSelection: React.FC<ConcernsSelectionProps> = ({ onNext }) => {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const toggleConcern = (concern: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const handleNext = () => {
    if (selectedConcerns.length === 0) {
      alert('Por favor, selecione pelo menos uma opção.');
      return;
    }
    onNext({ incomodidades: selectedConcerns });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          O que mais te incomoda hoje?
        </h2>
        <p className="text-lg text-gray-400">
          Pode marcar mais de uma opção
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {concerns.map((concern, index) => (
          <motion.div
            key={concern.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => toggleConcern(concern.label)}
              variant="outline"
              className={`w-full h-24 font-semibold text-sm transition-all duration-300 ${
                selectedConcerns.includes(concern.label)
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400 text-white'
                  : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-green-400'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">{concern.emoji}</span>
                <span className="text-center leading-tight">{concern.label}</span>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>

      <Button
        onClick={handleNext}
        size="lg"
        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg"
      >
        Próximo
      </Button>
    </motion.div>
  );
};

export default ConcernsSelection;
