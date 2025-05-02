
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-excleria-blue">
              Excleria<span className="text-white">Logistics</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Providing nationwide logistics solutions with technology-driven efficiency and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-excleria-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-excleria-blue">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-excleria-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-excleria-blue">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-excleria-blue">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-excleria-blue">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-excleria-blue">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-excleria-blue">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-excleria-blue">B2C Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-excleria-blue">B2B Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-excleria-blue">Same-Day Delivery</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-excleria-blue">Packers & Movers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-excleria-blue" />
                <span className="text-gray-300">
                  Head Office, Tech Plaza, Gomti Nagar, Lucknow, UP - 226010, India
                </span>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-excleria-blue" />
                <span className="text-gray-300">+91 522 123 4567</span>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-excleria-blue" />
                <span className="text-gray-300">info@excleria.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Excleria Logistics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-excleria-blue text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-excleria-blue text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-excleria-blue text-sm">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
