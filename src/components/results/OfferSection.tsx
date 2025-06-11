
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OfferSection = () => {
  const [countdown, setCountdown] = useState({ minutes: 15, seconds: 0 });
  const [showCountdown, setShowCountdown] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({
    card1: false,
    card2: false,
    card3: false,
    card4: false
  });

  useEffect(() => {
    if (!showCountdown) return;
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [showCountdown]);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  const handleCardFlip = (cardId: string) => {
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));
    if (!showCountdown) setShowCountdown(true);
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div id="comprar" className="container mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-green-600 text-white p-2 mb-10 overflow-hidden"
        >
          <div className="animate-marquee whitespace-nowrap">
            <span className="font-bold text-lg uppercase inline-block">
              FRETE GRÁTIS • FRETE GRÁTIS • FRETE GRÁTIS • FRETE GRÁTIS • FRETE GRÁTIS •
              FRETE GRÁTIS • FRETE GRÁTIS • FRETE GRÁTIS • FRETE GRÁTIS • FRETE GRÁTIS
            </span>
          </div>
        </motion.div>
        
        {showCountdown && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="max-w-3xl mx-auto mb-10 p-4 bg-red-600 text-white rounded-lg shadow-lg border-4 border-yellow-300"
          >
            <h4 className="text-xl font-bold uppercase tracking-wider">
              Sua oferta exclusiva e desconto expiram em:
            </h4>
            <div className="text-5xl md:text-6xl font-mono font-bold mt-2">
              <span>{formatTime(countdown.minutes)}</span>:
              <span>{formatTime(countdown.seconds)}</span>
            </div>
          </motion.div>
        )}
      
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black text-white uppercase"
        >
          AQUI ESTÁ SUA OFERTA ESPECIAL! <span className="text-green-400">ESCOLHA SEU KIT:</span>
        </motion.h3>
        
        <p className="text-lg text-gray-300 mt-2">
          Clique na sua carta recomendada para revelar sua oferta!
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-start">
          {/* KIT 1 CARD */}
          <div className="offer-card-container">
            <div 
              className={`offer-card ${flippedCards.card1 ? 'is-flipped' : ''}`}
              onClick={() => handleCardFlip('card1')}
            >
              <div className="card-face card-front relative overflow-hidden rounded-xl">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://i.ibb.co/jwYHVxf/CARTA1.png" 
                    alt="Carta da Oferta 1" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="card-face card-back">
                <h4 className="font-bold text-2xl">LEVE 1 POTE</h4>
                <img 
                  src="https://i.ibb.co/nPGrxSt/1POTE2.jpg" 
                  alt="1 Pote" 
                  className="mx-auto my-4 h-32 object-contain"
                />
                <div className="text-left mb-4 w-full flex-grow">
                  <span className="text-xl font-bold">DURAÇÃO DE 1 MÊS</span>
                  <p className="text-gray-400 font-semibold">Valor Individual</p>
                </div>
                <p className="text-lg">POR 12X DE</p>
                <p className="text-4xl font-extrabold text-green-400 my-1">R$14,09</p>
                <p className="text-xs text-gray-400 mb-4">(OU R$137 À VISTA)</p>
                <a 
                  href="#" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg uppercase block"
                >
                  Comprar Agora
                </a>
              </div>
            </div>
          </div>

          {/* KIT 2 CARD */}
          <div className="offer-card-container recommended-card">
            <div 
              className={`offer-card ${flippedCards.card2 ? 'is-flipped' : ''}`}
              onClick={() => handleCardFlip('card2')}
            >
              <div className="card-face card-front relative overflow-hidden rounded-xl">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://i.ibb.co/kyg0J7N/CARTA2.png" 
                    alt="Carta da Oferta 2" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="card-face card-back">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS PEDIDO
                </div>
                <h4 className="font-bold text-2xl mt-4">COMPRE 2, LEVE 3</h4>
                <img 
                  src="https://i.ibb.co/7KCJ9vz/3potes.png" 
                  alt="3 Potes" 
                  className="mx-auto my-4 h-32 object-contain"
                />
                <div className="text-left mb-4 w-full flex-grow">
                  <span className="text-xl font-bold">DURAÇÃO DE 3 MESES</span>
                  <p className="text-red-400 font-extrabold">28% OFF</p>
                </div>
                <p className="text-lg">POR 12X DE</p>
                <p className="text-4xl font-extrabold text-green-400 my-1">R$24,38</p>
                <p className="text-xs text-gray-400 mb-4">(OU R$237 À VISTA)</p>
                <a 
                  href="#" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg uppercase block"
                >
                  Aproveitar Oferta
                </a>
              </div>
            </div>
          </div>

          {/* KIT 3 CARD */}
          <div className="offer-card-container">
            <div 
              className={`offer-card ${flippedCards.card3 ? 'is-flipped' : ''}`}
              onClick={() => handleCardFlip('card3')}
            >
              <div className="card-face card-front relative overflow-hidden rounded-xl">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://i.ibb.co/qNHxJSD/CARTA3.png" 
                    alt="Carta da Oferta 3" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="card-face card-back">
                <h4 className="font-bold text-2xl">COMPRE 3, LEVE 5</h4>
                <img 
                  src="https://i.ibb.co/vJvxw0D/5potes.png" 
                  alt="5 Potes" 
                  className="mx-auto my-4 h-32 object-contain"
                />
                <div className="text-left mb-4 w-full flex-grow">
                  <span className="text-xl font-bold">DURAÇÃO DE 5 MESES</span>
                  <p className="text-red-400 font-extrabold">50% OFF</p>
                </div>
                <p className="text-lg">POR 12X DE</p>
                <p className="text-4xl font-extrabold text-green-400 my-1">R$34,67</p>
                <p className="text-xs text-gray-400 mb-4">(OU R$337 À VISTA)</p>
                <a 
                  href="#" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg uppercase block"
                >
                  Comprar Agora
                </a>
              </div>
            </div>
          </div>

          {/* KIT 4 CARD */}
          <div className="offer-card-container">
            <div 
              className={`offer-card ${flippedCards.card4 ? 'is-flipped' : ''}`}
              onClick={() => handleCardFlip('card4')}
            >
              <div className="card-face card-front relative overflow-hidden rounded-xl">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://i.ibb.co/qmJzQP5/CARTA4.png" 
                    alt="Carta da Oferta 4" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="card-face card-back">
                <h4 className="font-bold text-2xl">COMPRE 5, LEVE 10</h4>
                <img 
                  src="https://i.ibb.co/pjxjnkW/10pote.png" 
                  alt="10 Potes" 
                  className="mx-auto my-4 h-32 object-contain"
                />
                <div className="text-left mb-4 w-full flex-grow">
                  <span className="text-xl font-bold">DURAÇÃO DE 10 MESES</span>
                  <p className="text-red-400 font-extrabold">60% OFF</p>
                </div>
                <p className="text-lg">POR 12X DE</p>
                <p className="text-4xl font-extrabold text-green-400 my-1">R$65,53</p>
                <p className="text-xs text-gray-400 mb-4">(OU R$637 À VISTA)</p>
                <a 
                  href="#" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg uppercase block"
                >
                  Comprar Agora
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="inline-flex items-center justify-center gap-2 bg-green-900/50 text-green-300 font-bold py-3 px-6 rounded-full">
            <span className="text-yellow-400">★</span>
            4,8/5 | Mais de 190.000 clientes satisfeitas
            <span className="text-yellow-400">★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
