'use client';

import { Building2, Users, Truck, Shield, CreditCard, Headphones, Package, Globe, Zap, BarChart3 } from 'lucide-react';

export default function BusinessFeatures() {
  const b2bFeatures = [
    {
      icon: Building2,
      title: 'Business Accounts',
      description: 'Dedicated account management with custom pricing and volume discounts',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Corporate Billing',
      description: 'Net 30, 60, 90 day payment terms with automated invoicing',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Package,
      title: 'Bulk Ordering',
      description: 'Streamlined procurement with quantity breaks and wholesale pricing',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive business intelligence and spending analytics',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const b2cFeatures = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same day and next day delivery options with real-time tracking',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'SSL encryption, fraud protection, and secure payment processing',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service via chat, phone, and email',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Personalized Experience',
      description: 'AI-powered recommendations and personalized shopping experience',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const platformFeatures = [
    {
      icon: Globe,
      title: 'Multi-Channel',
      description: 'Sell across web, mobile, and social media platforms',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast loading times and optimized user experience',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliance, data encryption, and regular security audits',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time stock tracking and automated reorder notifications',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive ecommerce platform is designed to serve both B2B and B2C needs 
            with enterprise-grade features and consumer-friendly experiences.
          </p>
        </div>

        {/* B2B Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Solutions (B2B)</h3>
            <p className="text-gray-600">Enterprise-grade features for wholesale and corporate customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* B2C Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Consumer Experience (B2C)</h3>
            <p className="text-gray-600">User-friendly features designed for individual shoppers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2cFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Capabilities</h3>
            <p className="text-gray-600">Core infrastructure and technical features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and consumers who trust our platform for their ecommerce needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 hover:shadow-lg">
              Start B2B Account
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
              Shop as Consumer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
