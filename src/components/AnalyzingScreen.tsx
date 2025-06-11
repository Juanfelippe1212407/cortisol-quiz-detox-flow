
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from './ui/progress';
import { Brain, TrendingUp, Search, Sparkles, CheckCircle } from 'lucide-react';

interface AnalyzingScreenProps {
  onComplete: () => void;
}

const analysisSteps = [
  { icon: Search, text: "Analisando suas respostas...", color: "text-blue-400" },
  { icon: Brain, text: "Verificando padrões hormonais...", color: "text-purple-400" },
  { icon: TrendingUp, text: "Calculando seu índice de estresse metabólico...", color: "text-orange-400" },
  { icon: Sparkles, text: "Cruzando dados com mais de 37.000 casos de sucesso...", color: "text-green-400" },
  { icon: CheckCircle, text: "✨ Gerando seu diagnóstico personalizado com IA...", color: "text-yellow-400" },
];

const AnalyzingScreen: React.FC<AnalyzingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        
        // Update step based on progress
        const stepProgress = Math.floor(newProgress / 20);
        if (stepProgress < analysisSteps.length && stepProgress !== currentStepIndex) {
          setCurrentStepIndex(stepProgress);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, currentStepIndex]);

  const currentStep = analysisSteps[currentStepIndex] || analysisSteps[0];
  const IconComponent = currentStep.icon;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl mx-auto space-y-8"
      >
        {/* Animated Icon */}
        <motion.div
          key={currentStepIndex}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex justify-center"
        >
          <div className={`p-8 rounded-full bg-gray-800 border-2 border-gray-600 ${currentStep.color}`}>
            <IconComponent className="w-16 h-16" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Analisando suas respostas...
        </motion.h2>

        {/* Progress Bar */}
        <div className="space-y-4">
          <Progress value={progress} className="h-4" />
          <div className="flex justify-between text-sm text-gray-400">
            <span>Progresso</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Current Step */}
        <motion.div
          key={currentStepIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <p className={`text-xl font-semibold ${currentStep.color}`}>
            {currentStep.text}
          </p>
        </motion.div>

        {/* Steps List */}
        <div className="space-y-3 text-left">
          {analysisSteps.map((step, index) => {
            const StepIcon = step.icon;
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: isCompleted || isCurrent ? 1 : 0.3,
                  scale: isCurrent ? 1.05 : 1
                }}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  isCurrent ? 'bg-gray-800 border border-gray-600' : ''
                }`}
              >
                <StepIcon className={`w-5 h-5 ${
                  isCompleted ? 'text-green-400' : isCurrent ? step.color : 'text-gray-500'
                }`} />
                <span className={`${
                  isCompleted ? 'text-green-400 line-through' : isCurrent ? 'text-white' : 'text-gray-500'
                }`}>
                  {step.text}
                </span>
                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyzingScreen;
