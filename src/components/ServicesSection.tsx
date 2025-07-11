import { 
  Stethoscope, 
  Heart, 
  Scissors, 
  Zap, 
  Shield, 
  PawPrint,
  Clock,
  Syringe
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      name: "General Health Check",
      description: "Comprehensive health examinations for your pets",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Syringe,
      name: "Vaccination Services",
      description: "Complete vaccination programs and boosters",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Stethoscope,
      name: "Surgery & Operations",
      description: "Advanced surgical procedures with expert care",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: Scissors,
      name: "Grooming Services",
      description: "Professional grooming and hygiene care",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Zap,
      name: "Emergency Care",
      description: "24/7 emergency veterinary services available",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: PawPrint,
      name: "Specialized Care",
      description: "Exotic pets, birds, and specialized animal care",
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Pet Care Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find veterinary clinics offering specialized services for all your pet's health needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="medical-card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-accent rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              Need Urgent Care?
            </h3>
            <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">
              Find 24/7 emergency veterinary clinics near you for immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-medical">
                <Zap className="w-5 h-5" />
                Find Emergency Clinics
              </button>
              <button className="btn-secondary-medical">
                <Clock className="w-5 h-5" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;