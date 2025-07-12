import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Activity,
  AlertTriangle,
  Droplets,
  Utensils,
  Home,
  Eye,
  Calendar,
  Bug,
  Stethoscope,
  Phone
} from 'lucide-react';

const PetCareTips = () => {
  const careCards = [
    {
      icon: Calendar,
      title: "Regular Check-ups",
      description: "Schedule regular veterinary check-ups to ensure your pet's health and catch any potential issues early."
    },
    {
      icon: Utensils,
      title: "Proper Nutrition",
      description: "Feed your pet a balanced diet appropriate for their age, size, and health condition. Consult your vet for specific dietary recommendations."
    },
    {
      icon: Activity,
      title: "Regular Exercise",
      description: "Keep your pet active with regular exercise to maintain their physical and mental well-being."
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "Create a safe environment for your pet by removing hazards and providing appropriate shelter and supervision."
    }
  ];

  const dailyCare = [
    "Provide fresh water daily",
    "Clean food and water bowls regularly",
    "Maintain a clean living environment",
    "Spend quality time with your pet",
    "Monitor for any changes in behavior"
  ];

  const healthCare = [
    "Keep vaccinations up to date",
    "Maintain regular parasite prevention",
    "Schedule annual check-ups",
    "Monitor dental health",
    "Keep emergency contacts handy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pet Care Tips</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Essential advice for keeping your pets healthy and happy
          </p>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Caring for Your Pet Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Caring for Your Pet</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Taking care of a pet is a rewarding experience, but it also comes with responsibilities. Here are
                some essential tips to help you provide the best care for your furry friend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {careCards.map((card, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <card.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Essential Care Guidelines */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Care Guidelines</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Daily Care */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Care</h3>
                  <ul className="space-y-4">
                    {dailyCare.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Health Care */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Care</h3>
                  <ul className="space-y-4">
                    {healthCare.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Need Professional Help Section */}
          <section className="text-center bg-gray-50 py-16 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Professional Help?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              If you have specific concerns about your pet's health or need professional advice,
              our directory can help you find a trusted veterinary clinic near you.
            </p>
            <Button asChild size="lg">
              <Link to="/clinics">
                Find a Veterinary Clinic
              </Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PetCareTips;