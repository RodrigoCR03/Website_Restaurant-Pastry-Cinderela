import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import useSmoothScroll from '../hooks/useSmoothScroll';

// Custom Glovo icon component
const GlovoIcon: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
    <path d="M15 8L9 12L15 16V8Z" fill="currentColor"/>
  </svg>
);

const Footer: React.FC = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Cinderela de Entrecampos</h3>
            <p className="mb-4 text-gray-300">
              Cozinha portuguesa e pastelaria artesanal no coração de Lisboa.
              Experimente os ricos sabores de Portugal num ambiente acolhedor e convidativo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/cindereladeentrecampos/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-secondary transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/cinderela_de_entrecampos_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-secondary transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://glovoapp.com/pt/pt/lisboa/cinderela-lis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-secondary transition-colors" 
                aria-label="Glovo"
              >
                <GlovoIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">Informações de Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-secondary" />
                <span>+351 217 958 995</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-secondary" />
                <span>+351 969 524 991 (Telemóvel)</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-secondary" />
                <span>geral.cinderela@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-secondary" />
                <span>Av. das Forças Armadas 22, 1600-082 Lisboa, Portugal</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-secondary" />
                <span>Segunda - Sábado: 07:00 - 00:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={(e) => scrollToSection(e, 'menu')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Ementa
                </a>
              </li>
              <li>
                <a 
                  href="#pastries" 
                  onClick={(e) => scrollToSection(e, 'pastries')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Pastelaria
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => scrollToSection(e, 'gallery')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a 
                  href="#reservation" 
                  onClick={(e) => scrollToSection(e, 'reservation')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Reservas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-dark py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Cinderela Restaurante & Pastelaria. Todos os direitos reservados.
            <span className="mx-2">|</span>
            <a 
              href="/privacy.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              Política de Privacidade
            </a>
            <span className="mx-2">|</span>
            <a 
              href="/fiscal.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              Informações Fiscais
            </a>
            <span className="mx-2">|</span>
            <a 
              href="https://www.livroreclamacoes.pt/Inicio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              Livro de Reclamações
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;