import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Globe, 
  Clock, 
  Star,
  Heart,
  Stethoscope,
  Eye,
  Scissors,
  FlaskConical,
  Activity,
  ArrowLeft,
  Navigation as NavigationIcon
} from 'lucide-react';

const ClinicDetails = () => {
  const clinic = {
    name: "Animal Medical Centre Sdn Bhd (AMC)",
    location: "Kuala Lumpur, Kuala Lumpur",
    status: "Open 24/7 - Emergency services available",
    featured: true,
    address: "Wisma Medivest, 8, Jln Tun Razak, Sentul Selatan, Kuala Lumpur, Kuala Lumpur, 50400",
    phone: "+60 34-0426 742",
    website: "https://example.com",
    facebook: "https://facebook.com/amc",
    operatingHours: "24 Hours (Monday through Sunday)",
    emergency: "24/7 availability",
    animalsTreated: ["Dogs", "Cats"],
    specializations: ["Orthopedics", "Dermatology", "Ophthalmology", "Dentistry"],
    services: [
      "24 Hours Emergency Services",
      "Endoscopy", 
      "Dermatology",
      "Stem Cell Services",
      "Ophthalmology",
      "Dentistry",
      "Physio & Rehab",
      "Orthopedic",
      "Laboratory"
    ]
  };

  const specializationIcons = {
    "Orthopedics": Activity,
    "Dermatology": Heart,
    "Ophthalmology": Eye,
    "Dentistry": Scissors
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Clinics
          </Button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinic.name}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{clinic.location}</span>
                </div>
                <Badge variant="secondary" className="mb-2">
                  {clinic.status}
                </Badge>
                {clinic.featured && (
                  <Badge className="ml-2">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Clinic
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Contact Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                    Contact Information
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                      <span className="text-gray-700">{clinic.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{clinic.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <a href={clinic.website} className="text-primary hover:underline">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                    Operating Hours
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">All Days:</span>
                      <span className="font-medium">{clinic.operatingHours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Emergency:</span>
                      <span className="font-medium text-emerald-600">{clinic.emergency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Offered */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Stethoscope className="w-5 h-5 mr-2 text-emerald-600" />
                    Services Offered
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {clinic.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Clinic
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <NavigationIcon className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Animals Treated */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Animals Treated</h3>
                  <div className="flex flex-wrap gap-2">
                    {clinic.animalsTreated.map((animal, index) => (
                      <Badge key={index} variant="secondary">
                        {animal}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Specializations</h3>
                  <div className="space-y-3">
                    {clinic.specializations.map((spec, index) => {
                      const IconComponent = specializationIcons[spec as keyof typeof specializationIcons] || FlaskConical;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <IconComponent className="w-4 h-4 text-emerald-600" />
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClinicDetails;