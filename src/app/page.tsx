import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BusinessFeatures from '@/components/home/BusinessFeatures';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <BusinessFeatures />
      </main>
      <Footer />
    </div>
  );
}
