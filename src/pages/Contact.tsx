
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[300px] overflow-hidden bg-gradient-to-r from-orange-600 to-orange-400">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white container mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-2xl animate-fade-in">
              Have questions? We're here to help. Reach out to our team for assistance.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-orange-600">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input 
                    id="phone" 
                    placeholder="Your phone number" 
                    required 
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required 
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your query in detail..." 
                    rows={5}
                    required 
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Submit Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Head Office</h4>
                    <p className="leading-relaxed">
                      Excleria Tower, Plot No. 23<br />
                      Sector 18, Gurugram<br />
                      Haryana - 122001, India
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Customer Support</h4>
                    <p className="leading-relaxed">
                      <strong>Email:</strong> support@exclerialogistics.com<br />
                      <strong>Phone:</strong> +91 1800 123 4567
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Business Enquiries</h4>
                    <p className="leading-relaxed">
                      <strong>Email:</strong> business@exclerialogistics.com<br />
                      <strong>Phone:</strong> +91 1800 987 6543
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-600">Request a Call Back</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Call back requested",
                    description: "Our team will call you shortly!",
                  });
                }} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="callback-name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input 
                      id="callback-name" 
                      placeholder="Your name" 
                      required 
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="callback-phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input 
                      id="callback-phone" 
                      placeholder="Your phone number" 
                      required 
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <Phone size={18} />
                    Request Call Back
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section (Placeholder) */}
        <section className="relative h-96 bg-gray-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579541591970-e5b2402f21d6?q=80&w=2070&auto=format&fit=crop" 
            alt="Map of India" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md text-center">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Nationwide Coverage</h3>
              <p className="mb-4 text-gray-700">
                With operational hubs across all major cities and coverage of over 10,000 pin codes, we're always close to you.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Find Nearest Hub
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
