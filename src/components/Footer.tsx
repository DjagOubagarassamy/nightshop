import React from 'react';
import { ShoppingBag, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-bold">Campus Corner Store</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your reliable campus convenience store, serving students with everything they need, 
              when they need it. Fast delivery, fair prices, friendly service.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">orders@campuscorner.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Order</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#products" className="hover:text-white transition-colors">Beverages</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Snacks</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Health & Wellness</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Store Hours
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Monday - Thursday: 8AM - 11PM</li>
              <li>Friday - Saturday: 8AM - 12AM</li>
              <li>Sunday: 10AM - 10PM</li>
              <li className="text-blue-400 font-medium">Late night delivery available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Campus Corner Store. All rights reserved. | Serving students since 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;