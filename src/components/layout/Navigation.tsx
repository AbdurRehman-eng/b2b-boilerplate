'use client';

import { useState } from 'react';
import { ChevronDown, Building2, Users, Package, Truck, Shield, Headphones } from 'lucide-react';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isB2BMode, setIsB2BMode] = useState(false);

  const categories = [
    { name: 'Electronics', icon: Package, subcategories: ['Computers', 'Phones', 'TVs', 'Audio'] },
    { name: 'Home & Garden', icon: Home, subcategories: ['Furniture', 'Kitchen', 'Decor', 'Tools'] },
    { name: 'Fashion', icon: Users, subcategories: ['Men', 'Women', 'Kids', 'Accessories'] },
    { name: 'Sports', icon: Activity, subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Equipment'] },
    { name: 'Automotive', icon: Car, subcategories: ['Parts', 'Accessories', 'Tools', 'Maintenance'] },
    { name: 'Health', icon: Heart, subcategories: ['Vitamins', 'Personal Care', 'Medical', 'Fitness'] },
  ];

  const b2bFeatures = [
    { name: 'Bulk Orders', icon: Package, description: 'Volume discounts and wholesale pricing' },
    { name: 'Business Accounts', icon: Building2, description: 'Dedicated account management' },
    { name: 'Corporate Billing', icon: CreditCard, description: 'Net 30, 60, 90 day terms' },
    { name: 'API Access', icon: Code, description: 'Integration and automation tools' },
  ];

  const b2cFeatures = [
    { name: 'Fast Delivery', icon: Truck, description: 'Same day and next day options' },
    { name: 'Easy Returns', icon: RotateCcw, description: '30-day hassle-free returns' },
    { name: 'Customer Support', icon: Headphones, description: '24/7 live chat and phone' },
    { name: 'Secure Shopping', icon: Shield, description: 'SSL encryption and fraud protection' },
  ];

  return (
    <nav className="bg-secondary border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* B2B/B2C Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsB2BMode(false)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                !isB2BMode
                  ? 'bg-primary text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              B2C
            </button>
            <button
              onClick={() => setIsB2BMode(true)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                isB2BMode
                  ? 'bg-primary text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              B2B
            </button>
          </div>

          {/* Category Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2">
                  <category.icon size={16} />
                  <span>{category.name}</span>
                  <ChevronDown size={14} />
                </button>

                {/* Dropdown */}
                {activeDropdown === category.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side features */}
          <div className="hidden lg:flex items-center space-x-4">
            {isB2BMode ? (
              b2bFeatures.map((feature) => (
                <div key={feature.name} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <feature.icon size={16} />
                  <span className="text-sm">{feature.name}</span>
                </div>
              ))
            ) : (
              b2cFeatures.map((feature) => (
                <div key={feature.name} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <feature.icon size={16} />
                  <span className="text-sm">{feature.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Placeholder icons for categories
const Home = ({ size }: { size: number }) => <div className="w-4 h-4 bg-gray-400 rounded" />;
const Activity = ({ size }: { size: number }) => <div className="w-4 h-4 bg-gray-400 rounded" />;
const Car = ({ size }: { size: number }) => <div className="w-4 h-4 bg-gray-400 rounded" />;
const Heart = ({ size }: { size: number }) => <div className="w-4 h-4 bg-gray-400 rounded" />;
const CreditCard = ({ size }: { size: number }) => <div className="w-4 h-4 bg-gray-400 rounded" />;
const Code = ({ size }: { size: number }) => <div className="w-4 h-4 bg-gray-400 rounded" />;
const RotateCcw = ({ size }: { size: number }) => <div className="w-4 h-4 bg-gray-400 rounded" />;
