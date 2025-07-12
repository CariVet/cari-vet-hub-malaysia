import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Filter } from 'lucide-react';
import heroImage from '@/assets/hero-veterinary.jpg';

const HeroSection = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('');

  const handleSearch = () => {
    // Navigate to clinic directory with search params
    console.log('Searching for:', selectedAnimal, 'in', selectedState);
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional veterinary care" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-600/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Find the Best
          <span className="block text-primary-100">Veterinary Care</span>
          in Malaysia
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Locate trusted veterinary clinics for your pets with our comprehensive directory
        </p>

        {/* Search Interface */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* States in Malaysia */}
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="johor">Johor</SelectItem>
                <SelectItem value="kedah">Kedah</SelectItem>
                <SelectItem value="kelantan">Kelantan</SelectItem>
                <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                <SelectItem value="labuan">Labuan</SelectItem>
                <SelectItem value="melaka">Melaka</SelectItem>
                <SelectItem value="negeri-sembilan">Negeri Sembilan</SelectItem>
                <SelectItem value="pahang">Pahang</SelectItem>
                <SelectItem value="penang">Penang</SelectItem>
                <SelectItem value="perak">Perak</SelectItem>
                <SelectItem value="perlis">Perlis</SelectItem>
                <SelectItem value="putrajaya">Putrajaya</SelectItem>
                <SelectItem value="sabah">Sabah</SelectItem>
                <SelectItem value="sarawak">Sarawak</SelectItem>
                <SelectItem value="selangor">Selangor</SelectItem>
                <SelectItem value="terengganu">Terengganu</SelectItem>
              </SelectContent>
            </Select>

            {/* Animals Treated */}
            <Select value={selectedAnimal} onValueChange={setSelectedAnimal}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Animals Treated" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dogs">Dogs</SelectItem>
                <SelectItem value="cats">Cats</SelectItem>
                <SelectItem value="birds">Birds</SelectItem>
                <SelectItem value="rabbits">Rabbits</SelectItem>
                <SelectItem value="hamsters">Hamsters</SelectItem>
                <SelectItem value="guinea-pigs">Guinea Pigs</SelectItem>
                <SelectItem value="reptiles">Reptiles</SelectItem>
                <SelectItem value="fish">Fish</SelectItem>
                <SelectItem value="exotic-pets">Exotic Pets</SelectItem>
                <SelectItem value="farm-animals">Farm Animals</SelectItem>
              </SelectContent>
            </Select>

            {/* Search Button */}
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleSearch}
              className="h-12 text-base font-semibold"
            >
              <Search className="w-5 h-5" />
              Find Clinics
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-600 mr-2">Popular:</span>
            {['Emergency Care', '24/7 Service', 'Vaccination', 'Surgery', 'Dental Care'].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-primary-100">
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Trusted Clinics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Emergency Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">All States</div>
            <div className="text-sm">Malaysia Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;