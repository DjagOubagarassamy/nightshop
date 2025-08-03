import React from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nous Contacter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ou vous souhaitez commander ? Contactez-nous à tout moment si vous avez des questions, nous sommes à votre disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Placer une commande</h3>
            <p className="text-gray-600 mb-3">via SnapChat</p>
            <a 
              href="tel:+15551234567" 
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              @nightshop8600
            </a>
          </div>

          {/* SMS/Text */}
          {/* <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
            <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Placer une commande</h3>
            <p className="text-gray-600 mb-3">via Whatsapp</p>
            <a 
              href="sms:+15551234567" 
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              (555) 123-4567
            </a>
          </div> */}

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Email</h3>
            <p className="text-gray-600 mb-3">Questions & feedback</p>
            <a 
              href="mailto:orders@campuscorner.com" 
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              night86.shop@gmail.com
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Store Hours</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Lundi-Samedi: 0H00 à 4H00</p>
              <p>Dimanche: 12H-0H00</p>
            </div>
          </div>
        </div>

        {/* Order Instructions */}
        <div className="bg-blue-50 rounded-lg p-8 mt-12">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pour passer une commande</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3">1</div>
                <h4 className="font-medium text-gray-900 mb-2">Envoyez votre commande sur Snapchat</h4>
                <p className="text-gray-600 text-sm">Au compte associé, envoyez le détail de votre commande et votre adresse par message privée</p>
                <p className='text-red-500 text-sm mt-2'>- 10€ minimum de commande <br />- L'adresse doit être au sein des campus déservis</p>
                <p></p>
              </div>
              <div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3">3</div>
                <h4 className="font-medium text-gray-900 mb-2">Livraison Rapide</h4>
                <p className="text-gray-600 text-sm">La commande sera livré en moins de 15 minutes sur l'un des campus disponibles</p>
                <p className="text-green-600 text-sm mt-2">- Livraison offerte <br />- Règlement par espèces ou par carte lors de la livraison</p>
              </div>
              <div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3">2</div>
                <h4 className="font-medium text-gray-900 mb-2">Profitez de vos achats</h4>
                <p className="text-gray-600 text-sm">Votre commande est emballé dans un sac écologique et vous est remise. <br /> <div className='font-light mt-2'>Pour rappel l'ensemble de nos produits sont frais et sont conservés en respectant les normes d'hygiènes françaises.</div></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;