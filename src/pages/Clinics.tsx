import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star,
  Heart,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react';

const Clinics = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample clinic data
  const clinics = [
    {
      id: 1,
      name: "Animal Medical Centre Sdn Bhd (AMC)",
      location: "Kuala Lumpur, Kuala Lumpur",
      address: "Wisma Medivest, 8, Jln Tun Razak, Sentul Selatan",
      phone: "+60 34-0426 742",
      status: "Open 24/7",
      rating: 4.8,
      reviews: 156,
      featured: true,
      distance: "2.5 km",
      animals: ["Dogs", "Cats"],
      services: ["Emergency", "Surgery", "Dentistry"],
      isOpen: true
    },
    {
      id: 2,
      name: "PetCare Veterinary Clinic",
      location: "Petaling Jaya, Selangor",
      address: "No. 25, Jalan SS 2/61, SS 2",
      phone: "+60 3-7876 5432",
      status: "Open until 10 PM",
      rating: 4.6,
      reviews: 89,
      featured: false,
      distance: "4.2 km",
      animals: ["Dogs", "Cats", "Birds"],
      services: ["Vaccination", "Grooming", "Check-up"],
      isOpen: true
    },
    {
      id: 3,
      name: "Happy Paws Veterinary Centre",
      location: "Shah Alam, Selangor",
      address: "Plaza Shah Alam, Section 9",
      phone: "+60 3-5519 8765",
      status: "Closed - Opens 8 AM",
      rating: 4.4,
      reviews: 67,
      featured: false,
      distance: "8.1 km",
      animals: ["Dogs", "Cats", "Rabbits"],
      services: ["Surgery", "X-Ray", "Laboratory"],
      isOpen: false
    }
  ];

  const handleSearch = () => {
    console.log('Searching with filters:', {
      state: selectedState,
      city: selectedCity,
      animal: selectedAnimal,
      service: selectedService,
      query: searchQuery
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Veterinary Clinics</h1>
            <p className="text-lg text-gray-600">Discover trusted veterinary care near you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5 text-emerald-600" />
                    <h2 className="text-lg font-semibold">Filters</h2>
                  </div>

                  <div className="space-y-4">
                    {/* Search */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search clinics..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* State */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">State</label>
                      <Select value={selectedState} onValueChange={setSelectedState}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="johor">Johor</SelectItem>
                          <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                          <SelectItem value="selangor">Selangor</SelectItem>
                          <SelectItem value="penang">Penang</SelectItem>
                          <SelectItem value="perak">Perak</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* City */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">City</label>
                      <Select value={selectedCity} onValueChange={setSelectedCity}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kl-city">KL City</SelectItem>
                          <SelectItem value="petaling-jaya">Petaling Jaya</SelectItem>
                          <SelectItem value="shah-alam">Shah Alam</SelectItem>
                          <SelectItem value="subang-jaya">Subang Jaya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Animals Treated */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Animals Treated</label>
                      <Select value={selectedAnimal} onValueChange={setSelectedAnimal}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Animal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dogs">Dogs</SelectItem>
                          <SelectItem value="cats">Cats</SelectItem>
                          <SelectItem value="birds">Birds</SelectItem>
                          <SelectItem value="rabbits">Rabbits</SelectItem>
                          <SelectItem value="exotic-pets">Exotic Pets</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Services */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Services</label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency Care</SelectItem>
                          <SelectItem value="vaccination">Vaccination</SelectItem>
                          <SelectItem value="surgery">Surgery</SelectItem>
                          <SelectItem value="dentistry">Dentistry</SelectItem>
                          <SelectItem value="grooming">Grooming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={handleSearch} className="w-full">
                      <Search className="w-4 h-4 mr-2" />
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Clinics List */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-600">{clinics.length} clinics found</p>
                <Select defaultValue="distance">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Sort by Distance</SelectItem>
                    <SelectItem value="rating">Sort by Rating</SelectItem>
                    <SelectItem value="name">Sort by Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {clinics.map((clinic) => (
                  <Card key={clinic.id} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{clinic.name}</h3>
                            {clinic.featured && (
                              <Badge className="bg-emerald-600">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{clinic.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-sm">{clinic.distance}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-3">{clinic.address}</p>

                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="font-medium">{clinic.rating}</span>
                              <span className="text-gray-500 text-sm">({clinic.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span className={`text-sm font-medium ${clinic.isOpen ? 'text-emerald-600' : 'text-red-600'}`}>
                                {clinic.status}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="flex items-center gap-1">
                              <Heart className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-600">
                                {clinic.animals.join(', ')}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {clinic.services.map((service, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 ml-4">
                          <Button size="sm">
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/clinic/${clinic.id}`}>
                              <ExternalLink className="w-4 h-4 mr-1" />
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clinics;