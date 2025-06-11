
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { User, Phone } from 'lucide-react';
import { QuizAnswers } from '../../pages/Index';

interface ContactFormProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onNext }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Por favor, preencha seu nome e WhatsApp para continuar.');
      return;
    }
    onNext({ name: name.trim(), phone: phone.trim() });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Para começar, como podemos te chamar?
        </h2>
        <p className="text-lg text-gray-300">
          Suas informações são 100% seguras e privadas
        </p>
      </div>

      <div className="space-y-6 max-w-lg mx-auto">
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Seu primeiro nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-12 py-4 text-lg bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="tel"
            placeholder="Seu WhatsApp (com DDD)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="pl-12 py-4 text-lg bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
          />
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        size="lg"
        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg"
      >
        Próximo
      </Button>
    </motion.div>
  );
};

export default ContactForm;
