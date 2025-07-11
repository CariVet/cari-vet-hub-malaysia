import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  Heart,
  Shield,
  Zap,
  Stethoscope
} from 'lucide-react';

const FeaturedClinics = () => {
  // Mock data for featured clinics
  const featuredClinics = [
    {
      id: 1,
      name: "PetCare Veterinary Clinic",
      address: "Petaling Jaya, Selangor",
      rating: 4.8,
      reviews: 127,
      isOpen: true,
      isEmergency: true,
      image: "/placeholder.svg",
      services: ["Surgery", "Vaccination", "Dental"],
      specialties: ["Dogs", "Cats", "Small Animals"],
      phone: "+60 3-1234 5678"
    },
    {
      id: 2,
      name: "Animal Health Center",
      address: "Kuala Lumpur, WP",
      rating: 4.9,
      reviews: 203,
      isOpen: false,
      isEmergency: false,
      image: "/placeholder.svg",
      services: ["Grooming", "Health Check", "Vaccination"],
      specialties: ["Dogs", "Cats", "Birds"],
      phone: "+60 3-2345 6789"
    },
    {
      id: 3,
      name: "Pet Emergency Hospital",
      address: "Shah Alam, Selangor",
      rating: 4.7,
      reviews: 89,
      isOpen: true,
      isEmergency: true,
      image: "/placeholder.svg",
      services: ["Emergency", "Surgery", "ICU"],
      specialties: ["All Animals", "Exotic Pets"],
      phone: "+60 3-3456 7890"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Veterinary Clinics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover top-rated veterinary clinics trusted by pet owners across Malaysia
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClinics.map((clinic) => (
            <div key={clinic.id} className="clinic-card group">
              {/* Clinic Image */}
              <div className="relative h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={clinic.image} 
                  alt={clinic.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {clinic.isEmergency && (
                    <Badge variant="destructive" className="status-emergency">
                      <Zap className="w-3 h-3" />
                      24/7 Emergency
                    </Badge>
                  )}
                  <Badge 
                    variant={clinic.isOpen ? "default" : "secondary"}
                    className={clinic.isOpen ? "status-open bg-success" : "status-closed"}
                  >
                    <Clock className="w-3 h-3" />
                    {clinic.isOpen ? "Open Now" : "Closed"}
                  </Badge>
                </div>
              </div>

              {/* Clinic Info */}
              <div className="space-y-4">
                {/* Name and Rating */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {clinic.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {clinic.address}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{clinic.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({clinic.reviews} reviews)</span>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {clinic.services.map((service) => (
                      <span key={service} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <Stethoscope className="w-4 h-4 inline mr-1" />
                    Specializes in: {clinic.specialties.join(", ")}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button variant="medical" size="sm" className="flex-1">
                    <Heart className="w-4 h-4" />
                    View Details
                  </Button>
                  <Button variant="medical-outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="medical-outline" size="lg">
            View All Clinics
            <MapPin className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClinics;