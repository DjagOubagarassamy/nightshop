import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    // Beverages
    {
      id: 1,
      name: "Coca-Cola 33cl",
      price: 1.99,
      category: "Boissons",
      flavors: ['Zero', 'Original'],
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAQUVQaBVKPBqqCeL-3jg7dzWU3rhRBXz0_Fxdv-2tIltMfKTW9IfkJMRSZtiXFanyvMkGwxoGxVf-91gtxjwNjKLIvuWr547RSekc-t3H7jFBDcHeYK9l"
    },
    {
      id: 2,
      name: "Red Bull Energy 25cl",
      price: 1.99,
      category: "Boissons",
      flavors: ["White", "Blue", 'Red', 'Original', 'Summer', 'Sans sucres', 'Zero'],
      image: "https://www.myamericanshop.com/cdn/shop/files/red-bull-energy-drink-original-90162602-1144822501.png?v=1741298347&width=800"
    },
    {
      id: 3,
      name: "7up 33cl",
      price: 1.99,
      category: "Boissons",
      flavors: ['Mojito', 'Original', 'Citron'],
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRXimVWVb-z7413AJsUb2DgDyo8u9JMoFMHRwxDCjwqWbUZwwpytHd0FCTmRSIKJgU0uPlUL-XZDuYbLxSMIEqVeaVC3FVSm5p44iVzSmCrWqW03JkJq4Vy"
    },
    {
      id: 4,
      name: "Monster Energy",
      price: 2.49,
      category: "Boissons",
      flavors: ['White Zero Ultra', 'Ultra Watermelon', 'Juiced Mango Locco' ],
      image: "https://cdn.auchan.fr/media/A0220140313000590166PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 4,
      name: "Fuze Tea 33cl",
      price: 1.99,
      category: "Boissons",
      flavors: ['Hibiscus', 'Thé vert intense'],
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlDCnHfTnsnEW5NPqdc7iSSlG7Gr6xSlLPRj-QC8DzPPK9W6M_7ODozoCBLFTVSKRjoRdXBgOehcYta8wo5WKjb3dlOXu3bWlx-WPFfDczYkdWD0ljZ2F6HKs37DeHNenylg&usqp=CAc"
    },
    
    // Snacks
    {
      id: 17,
      name: "Sandwich SODEBO x3 250g",
      price: 2.99,
      category: "Snacks",
      flavors: ['Thon Oeuf', 'Poulet Mayo'],
      image: 'https://cdn.auchan.fr/media/A0220140821000797271PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300'
    },
    {
      id: 18,
      name: "Sandwich SODEBO Long 280g",
      price: 2.99,
      category: "Snacks",
      flavors: ['Thon Oeuf', 'Poulet Mayo'],
      image: "https://cdn.auchan.fr/media/A0220070207000014666PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 5,
      name: "Doritos 160g",
      price: 2.49,
      category: "Snacks",
      flavors: ['Nature', 'Nacho Cheese', 'Chili Pepper', 'Barbecue', 'Paprika'],
      image: "https://cdn.auchan.fr/media/S01000000040F89PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 7,
      name: "Pringles Chips 100g",
      price: 2.99,
      category: "Snacks",
      flavors: ['Original', 'Sour Cream and Onion', 'Hot & Spicy'],
      image: "https://cdn.auchan.fr/media/P02000000000IOPPRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 8,
      name: "Granola",
      price: 2.49,
      category: "Snacks",
      image: "https://cdn.auchan.fr/media/A0220160317000591469PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 6,
      name: "Kit Kat Bar",
      price: 0.99,
      category: "Snacks",
      image: "https://cdn.auchan.fr/media/A0220160205000511605PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    
    // Electronics
    {
      id: 9,
      name: "Earpods filaires",
      price: 24.99,
      category: "Electronics",
      flavors: ['USB Type-C', 'Type-A', 'Lightning'],
      image: "https://cdn.auchan.fr/media/A0220161018000576845PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 10,
      name: "Chargeur téléphone + Prise secteur",
      price: 17.99,
      image: "https://cdn.auchan.fr/media/8ffc7196-9035-4faa-845e-a46484e53954_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300",
      category: "Electronics",
      flavors: ['USB Type-C', 'Type-A', 'Lightning'],
    },
    {
      id: 11,
      name: "Batterie externe 10 000mA",
      price: 22.99,
      category: "Electronics",
      image: "https://cdn.auchan.fr/media/3ed6a67f-897f-4f3f-8fff-1be1f5efd07a_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    // Essentials
    {
      id: 13,
      name: "Préservatifs 3x",
      price: 4.99,
      image: "https://cdn.auchan.fr/media/A0220120406000855268PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300",
      category: "Hygiène et Pharmacie",
      flavors: ['Durex', 'Skyn Original', 'Durex no Latex']
    },
    {
      id: 15,
      name: "Doliprane 1000mg",
      price: 3.99,
      image: "https://www.pharmacie-homeopathie.com/fr/photo/produit/doliprane-1000-mg-8comp-eff/5283.png",
      category: "Hygiène et Pharmacie"
    },
    {
      id: 20,
      name: "Barquettes de frites Maison",
      price: 3.99,
      category: "Food",
      image: "https://cdn.store-factory.com/www.plaza-grossiste.com/content/pdtimg_4573777b.png?v=1671112563"
    },
    {
      id: 21,
      name: "Kebab sauce algérienne",
      price: 9.99,
      category: "Food",
      image: "https://www.consoglobe.com/wp-content/uploads/2019/07/kebab-shutterstock_1911734386-645x338.jpg"
    },
    {
      id: 22,
      name: "Serviettes hygiéniques",
      price: 3.99,
      category: "Hygiène et Pharmacie",
      flavors: ["Always Platinum Nuit x20"],
      image: "https://cdn.auchan.fr/media/A0220190123000411444PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 23,
      name: "Yum Yum Nouilles Instantanée sachets",
      price: 0.99,
      category: "Food",
      flavors: ['Chicken', 'Curry', 'Boeuf', 'Crevettes'],
      image: "https://cdn.auchan.fr/media/A0220140630000183646PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 24,
      name: "PastaBOX Sodebo",
      price: 2.99,
      category: "Food",
      flavors: ['Poulet Crème'],
      image: "https://cdn.auchan.fr/media/A0220131128000040390PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    },
    {
      id: 25,
      name: "DOP Shampooing 2 en 1 démélant",
      price: 2.99,
      category: "Hygiène et Pharmacie",
      image: "https://cdn.auchan.fr/media/S01000000040L86PRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300",
      flavors: ['Amande']
    },
    {
      id: 26,
      name: 'DOP Gel douche',
      price: 2.99,
      category: "Hygiène et Pharmacie",
      flavors: ['Amande'],
      image: "https://cdn.auchan.fr/media/S01000000040EBHPRIMARY_2048x2048/B2CD/?quality=75&width=300&format=rw&height=300"
    }
  ];

  const categories = ["Boissons", "Snacks", "Food", "Electronics", "Hygiène et Pharmacie"];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos produits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choissiez les produits qui vous font envie et realiser votre commande.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;