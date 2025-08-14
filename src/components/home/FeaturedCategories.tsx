'use client';

import { Package, Users, Home, Activity, Car, Heart } from 'lucide-react';

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Latest gadgets and tech innovations',
      icon: Package,
      productCount: '2,500+',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Trendy clothing and accessories',
      icon: Users,
      productCount: '5,000+',
      color: 'from-pink-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      name: 'Home & Garden',
      description: 'Everything for your living space',
      icon: Home,
      productCount: '3,200+',
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      name: 'Sports & Fitness',
      description: 'Equipment and activewear',
      icon: Activity,
      productCount: '1,800+',
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      name: 'Automotive',
      description: 'Parts, tools, and accessories',
      icon: Car,
      productCount: '900+',
      color: 'from-gray-500 to-gray-600',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      name: 'Health & Beauty',
      description: 'Wellness and personal care',
      icon: Heart,
      productCount: '2,100+',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of products across multiple categories, 
            designed to meet both business and consumer needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-end">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                  <category.icon size={24} />
                </div>

                {/* Category Info */}
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  
                  {/* Product Count and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">
                      {category.productCount} products
                    </span>
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 hover:shadow-lg">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
