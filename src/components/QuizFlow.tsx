
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from './ui/progress';
import ContactForm from './quiz/ContactForm';
import GenderSelection from './quiz/GenderSelection';
import AgeSelection from './quiz/AgeSelection';
import ConcernsSelection from './quiz/ConcernsSelection';
import FatigueLevel from './quiz/FatigueLevel';
import CravingsLevel from './quiz/CravingsLevel';
import SleepQuality from './quiz/SleepQuality';
import FrustrationForm from './quiz/FrustrationForm';
import { QuizAnswers } from '../pages/Index';

interface QuizFlowProps {
  onComplete: (answers: QuizAnswers) => void;
}

const QuizFlow: React.FC<QuizFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const totalSteps = 8;

  const handleNext = (stepAnswers: Partial<QuizAnswers>) => {
    const updatedAnswers = { ...answers, ...stepAnswers };
    setAnswers(updatedAnswers);
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(updatedAnswers);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ContactForm onNext={handleNext} />;
      case 2:
        return <GenderSelection onNext={handleNext} />;
      case 3:
        return <AgeSelection onNext={handleNext} />;
      case 4:
        return <ConcernsSelection onNext={handleNext} />;
      case 5:
        return <FatigueLevel onNext={handleNext} />;
      case 6:
        return <CravingsLevel onNext={handleNext} />;
      case 7:
        return <SleepQuality onNext={handleNext} />;
      case 8:
        return <FrustrationForm onNext={handleNext} userName={answers.name} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Progresso</span>
            <span className="text-sm text-gray-400">{currentStep} de {totalSteps}</span>
          </div>
          <Progress value={progress} className="h-3" />
        </motion.div>

        {/* Question Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizFlow;
