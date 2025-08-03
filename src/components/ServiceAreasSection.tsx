import React from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

const ServiceAreasSection = () => {
  const serviceAreas = [
    {
      name: "Résidence Rabelais",
      description: "Toutes les résidences de la zone, à proximité des restaurants et des batiments universitaires",
      deliveryTime: "5-15 min",
      coverage: "Complète"
    },
    {
      name: "Résidence Champlain",
      description: "Toutes les résidences de la zone, à proximité des restaurants et des batiments universitaires",
      deliveryTime: "10-20 min",
      coverage: "Complète"
    },
    {
      name: "Résidence Descartes",
      description: "Toutes les résidences de la zone, à proximité des batiments universitaires",
      deliveryTime: "10-20 min",
      coverage: "Complète"
    }
  ];

  return (
    <section id="areas" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zone disponible à la livraison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous livrons sur l'ensemble des résidences universitaires de Poitiers et à proximité. <br /> Consultez les délais de livraison, ci-dessous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{area.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      area.coverage === 'Complète' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                    Couverture  {area.coverage} 
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{area.description}</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{area.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-gray-600">Available daily</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl font-bold text-blue-600">0 €</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Livraison Gratuite</h4>
                <p className="text-gray-600 text-sm">Aucun frais de livraison ne seront demandés pour nos services</p>
              </div>
              <div>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl font-bold text-emerald-600">10 €</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Commande minimum</h4>
                <p className="text-gray-600 text-sm">Seuil d'achat minimum pour accéder à nos services</p>
              </div>
              <div>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl font-bold text-orange-600">7/7</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Ouvert le dimanche</h4>
                <p className="text-gray-600 text-sm">Notre service est disponible le dimanche toute la journée.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;