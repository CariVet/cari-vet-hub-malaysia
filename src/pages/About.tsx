import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Shield, Users, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pet-Centered Care",
      description: "We believe every pet deserves the best possible care, and we're here to help you find it."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "All our partner clinics are verified and licensed to ensure quality veterinary care."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a community of caring pet owners and dedicated veterinary professionals."
    },
    {
      icon: MapPin,
      title: "Nationwide Access",
      description: "Connecting pet owners with quality care across all states in Malaysia."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About CariVet
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Malaysia's most trusted veterinary clinic directory, connecting pet owners with quality care since 2024.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At CariVet, we understand that pets are family. Our mission is to make finding trusted, 
            quality veterinary care as simple as possible for pet owners across Malaysia. We carefully 
            verify every clinic in our directory to ensure your beloved companions receive the best 
            possible care when they need it most.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether it's a routine check-up, emergency care, or specialized treatment, CariVet connects 
            you with licensed veterinary professionals who share your commitment to animal health and welfare.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at CariVet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Making a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our impact on pet healthcare in Malaysia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Verified Clinics</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">13</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Happy Pets</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;