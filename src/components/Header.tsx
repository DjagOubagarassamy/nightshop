import React from 'react';
import { ShoppingBag, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="moon.svg" alt="" className="h-7 w-7"  />
            <h1 className="text-xl font-bold text-white-100">NightShop86</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-white-100 hover:text-blue-600 transition-colors duration-200"
            >
              Produits
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white-100 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="text-white-100 hover:text-blue-600 transition-colors duration-200"
            >
              Zone Déservie
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <img src="snap2.svg" alt="Snapchat" className="h-5 w-5" />
              <span className="text-sm font-medium text-gray-700">@nightshop8600</span>
            </span>
          </div>
        </div>
      </div>
      <div className='max-w bg-green-700 h-7 flex align-center justify-center text-white font-bold '>Votre boutique est ouverte</div>
    </header>
  );
};

export default Header;