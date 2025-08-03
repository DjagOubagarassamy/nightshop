import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import ServiceAreasSection from './components/ServiceAreasSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductsSection />
      <ContactSection />
      <ServiceAreasSection />
      <Footer />
    </div>
  );
}

export default App;