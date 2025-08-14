'use client';

import { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quickView, setQuickView] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviewCount: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Electronics',
      isNew: true,
      discount: 31,
      stock: 'In Stock'
    },
    {
      id: 2,
      name: 'Premium Coffee Maker',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Home & Kitchen',
      isNew: false,
      discount: 20,
      stock: 'Limited Stock'
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      reviewCount: 156,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sports & Fitness',
      isNew: true,
      discount: 25,
      stock: 'In Stock'
    },
    {
      id: 4,
      name: 'Organic Cotton T-Shirt',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.3,
      reviewCount: 203,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      isNew: false,
      discount: 29,
      stock: 'In Stock'
    },
    {
      id: 5,
      name: 'Portable Bluetooth Speaker',
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviewCount: 94,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Electronics',
      isNew: false,
      discount: 25,
      stock: 'In Stock'
    },
    {
      id: 6,
      name: 'Stainless Steel Water Bottle',
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.7,
      reviewCount: 312,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sports & Fitness',
      isNew: false,
      discount: 33,
      stock: 'In Stock'
    },
    {
      id: 7,
      name: 'LED Desk Lamp',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.2,
      reviewCount: 67,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Home & Office',
      isNew: false,
      discount: 33,
      stock: 'In Stock'
    },
    {
      id: 8,
      name: 'Wireless Charging Pad',
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviewCount: 143,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Electronics',
      isNew: true,
      discount: 30,
      stock: 'In Stock'
    }
  ];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} className="fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products with competitive pricing 
            and exceptional quality for both businesses and consumers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleWishlistToggle(product)}
                    className={`p-2 rounded-full shadow-lg transition-colors ${
                      isInWishlist(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart size={16} className={isInWishlist(product.id) ? 'fill-current' : ''} />
                  </button>
                  <button
                    onClick={() => setQuickView(product.id)}
                    className="p-2 rounded-full bg-white text-gray-600 hover:text-primary shadow-lg transition-colors"
                  >
                    <Eye size={16} />
                  </button>
                </div>

                {/* Stock Status */}
                <div className="absolute bottom-3 left-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    product.stock === 'In Stock' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.stock}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Category */}
                <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                
                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
