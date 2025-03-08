import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

const categories = [
  'Todos',
  'Bolos de Aniversário',
  'Doces de Natal'
];

const pastries = [
  {
    name: "Bolo Rei de Chocolate",
    image: "/images/470881033_9100669876661288_425584432431487969_n.jpg",
    description: "Como seria o Natal sem o irresistível Bolo Rei de Chocolate",
    category: "Doces de Natal"
  },
  {
    name: "Lampreia de Ovos",
    image: "/images/472225853_9141959952532280_3806924327252153959_n.jpg",
    description: "Doce tradicional português em forma de lampreia, feito com gemas de ovos e fios de ovos",
    category: "Doces de Natal"
  },
  {
    name: "Bolo Rei",
    image: "/images/471435025_9166740933387515_6565691308498729452_n.jpg",
    description: "O tradicional bolo das festas natalícias, rico em frutos secos e frutas cristalizadas",
    category: "Doces de Natal"
  },
  {
    name: "Tronco de Natal",
    image: "/images/Captura de ecrã 2025-03-04 164940Natal.png",
    description: "Delicioso bolo em forma de tronco, recheado com creme e decorado com chocolate",
    category: "Doces de Natal"
  },
  {
    name: "Bolo de Aniversário de Frutos-Vermelhos",
    image: "/images/IMG-20250304-WA0020.jpg",
    description: "Delicioso bolo recheado com creme e frutos vermelhos frescos, decorado artesanalmente",
    category: "Bolos de Aniversário"
  },
  {
    name: "Bolo de Aniversário de Chocolate-de-Leite",
    image: "/images/IMG-20250304-WA0021.jpg",
    description: "Bolo especial com camadas de chocolate de leite, recheio cremoso e decoração elegante",
    category: "Bolos de Aniversário"
  },
  {
    name: "Bolo de Aniversário de Chocolate-branco",
    image: "/images/IMG-20250304-WA0022.jpg",
    description: "Bolo sofisticado de chocolate branco com recheio especial e acabamento refinado",
    category: "Bolos de Aniversário"
  },
  {
    name: "Bolo de Aniversário de Caramelo",
    image: "/images/IMG-20250304-WA0023.jpg",
    description: "Bolo festivo com delicioso sabor de caramelo, decorado com detalhes dourados",
    category: "Bolos de Aniversário"
  }
];

const Pastries: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPastries, setFilteredPastries] = useState(pastries);

  useEffect(() => {
    const filtered = selectedCategory === 'Todos'
      ? pastries
      : pastries.filter(pastry => pastry.category === selectedCategory);
    setFilteredPastries(filtered);
  }, [selectedCategory]);

  return (
    <section id="pastries" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn('up', 0.3)}
        >
          <h2 className="section-title">Pastelaria</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A nossa pastelaria disponibiliza uma diversidade de doces tradicionais portugueses, 
            confecionados artesanalmente todos os dias com base em receitas autênticas, passadas de geração em geração.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4 mb-8 flex-wrap"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={zoomIn(0.1 * index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${selectedCategory === category ? 'bg-secondary text-primary' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence>
            {filteredPastries.map((pastry, index) => (
              <motion.div
                key={pastry.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.2 * index)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative pb-[75%] overflow-hidden">
                  <motion.img
                    src={pastry.image}
                    alt={pastry.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300"
                    whileHover={{ opacity: 0.3 }}
                  />
                </div>
                <motion.div 
                  className="p-4"
                  variants={fadeIn('up', 0.1)}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{pastry.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pastry.description}</p>
                  <motion.div 
                    className="mt-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="inline-block bg-light text-primary text-xs px-2 py-1 rounded">
                      {pastry.category}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn('up', 0.5)}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Visite a nossa pastelaria para descobrir mais delícias. 
            Também aceitamos encomendas especiais para eventos e celebrações.
          </p>
          <motion.a
            href="#contact"
            className="btn-secondary inline-block"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Encomendar Pastelaria
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pastries;