
import React from 'react';
import { motion } from 'framer-motion';
import LiveChatSection from './results/LiveChatSection';
import OfferSection from './results/OfferSection';
import TestimonialsSection from './results/TestimonialsSection';
import { QuizAnswers } from '../pages/Index';

interface ResultsPageProps {
  quizAnswers: QuizAnswers;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ quizAnswers }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <LiveChatSection quizAnswers={quizAnswers} />
      <OfferSection />
      <TestimonialsSection />
    </motion.div>
  );
};

export default ResultsPage;
