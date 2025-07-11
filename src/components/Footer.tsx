import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Find Clinics", href: "/clinics" },
        { name: "Emergency Services", href: "/emergency" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "General Health Check", href: "/services/health-check" },
        { name: "Vaccination", href: "/services/vaccination" },
        { name: "Surgery", href: "/services/surgery" },
        { name: "Emergency Care", href: "/services/emergency" }
      ]
    },
    {
      title: "Pet Care",
      links: [
        { name: "Dogs & Cats", href: "/pets/dogs-cats" },
        { name: "Exotic Pets", href: "/pets/exotic" },
        { name: "Small Animals", href: "/pets/small-animals" },
        { name: "Pet Insurance", href: "/insurance" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CariVet</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Malaysia's trusted veterinary clinic directory. Connecting pet owners with quality veterinary care nationwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+60 3-1234 5678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>hello@carivet.my</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 p-4 bg-red-600 rounded-lg text-center">
          <h3 className="font-semibold mb-2">Emergency Veterinary Care</h3>
          <p className="text-sm text-red-100">
            In case of pet emergency, contact your nearest 24/7 veterinary clinic immediately
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CariVet. All rights reserved. Made with ❤️ for pets in Malaysia.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;