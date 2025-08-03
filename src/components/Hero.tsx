import React from 'react';
import { Clock, Truck, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Epicerie de nuit du Campus de Poitiers
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Tout ce dont les étudiants ont besoin : snacks, boissons, essentiels et accessoires tech. 
            Livraison rapide à votre chambre ou sur le campus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-100">Livraison gratuite sous 15 min</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-blue-300" />
              <span className="text-gray-100">Service de 23h à 6h du matin</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-orange-300" />
              <span className="text-gray-100">Prix adaptés aux étudiants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;