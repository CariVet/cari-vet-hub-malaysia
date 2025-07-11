import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedClinics from '@/components/FeaturedClinics';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedClinics />
      <ServicesSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default Index;
