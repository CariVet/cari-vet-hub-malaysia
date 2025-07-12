import { Shield, MapPin, Clock, Users, Star, Heart } from 'lucide-react';

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Clinics",
      description: "All veterinary clinics are verified and licensed, ensuring quality care for your pets.",
      stats: "100% Verified"
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage", 
      description: "Find trusted veterinary care across all states in Malaysia, from urban centers to rural areas.",
      stats: "13 States Coverage"
    },
    {
      icon: Clock,
      title: "Real-Time Availability",
      description: "Check clinic hours, availability, and book appointments in real-time for convenience.",
      stats: "Live Updates"
    },
    {
      icon: Users,
      title: "Expert Reviews",
      description: "Read genuine reviews from fellow pet owners to make informed decisions about your pet's care.",
      stats: "10,000+ Reviews"
    },
    {
      icon: Star,
      title: "Quality Ratings",
      description: "Our rating system helps you find the highest-rated clinics based on actual patient experiences.",
      stats: "Trusted Ratings"
    },
    {
      icon: Heart,
      title: "Pet-Focused Care",
      description: "Find clinics specializing in your pet type, from common pets to exotic animal specialists.",
      stats: "All Pet Types"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Pet Owners Trust CariVet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to connecting you with the best veterinary care in Malaysia
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary-50 px-2 py-1 rounded-full">
                        {benefit.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Trusted by Pet Owners Across Malaysia
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Verified Clinics</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-100">Happy Pets</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8★</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;