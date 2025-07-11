import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Clinics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Veterinary Clinics</h1>
          <p className="text-lg text-gray-600">Clinic directory coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Clinics;