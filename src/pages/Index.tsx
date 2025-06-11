
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from '../components/WelcomeScreen';
import QuizFlow from '../components/QuizFlow';
import AnalyzingScreen from '../components/AnalyzingScreen';
import ResultsPage from '../components/ResultsPage';

export type QuizAnswers = {
  name?: string;
  phone?: string;
  gender?: string;
  age?: string;
  incomodidades?: string[];
  cansaco?: string;
  desejo_doces?: string;
  sono?: string;
  frustration?: string;
};

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'quiz' | 'analyzing' | 'results'>('welcome');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setCurrentScreen('analyzing');
  };

  const handleAnalysisComplete = () => {
    setCurrentScreen('results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onStart={handleStartQuiz} />
          </motion.div>
        )}
        
        {currentScreen === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <QuizFlow onComplete={handleQuizComplete} />
          </motion.div>
        )}
        
        {currentScreen === 'analyzing' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <AnalyzingScreen onComplete={handleAnalysisComplete} />
          </motion.div>
        )}
        
        {currentScreen === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <ResultsPage quizAnswers={quizAnswers} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
