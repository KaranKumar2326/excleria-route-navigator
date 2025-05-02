
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Form Submitted Successfully",
      description: "We'll get back to you as soon as possible!",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-pattern-2">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-excleria-blue to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're here to answer any questions you might have about our services.
              Reach out to us and we'll respond as soon as we can.
            </p>
          </div>
        </div>

        {/* Contact Info & Form */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="contact-section p-8">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-gray-600">+91 (800) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-excleria-blue text-white p-3 rounded-full mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-gray-600">info@exclerialogistics.com</p>
                    <p className="text-gray-600">support@exclerialogistics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visit Us</h3>
                    <p className="text-gray-600">Excleria Headquarters</p>
                    <p className="text-gray-600">123 Gomti Nagar, Lucknow</p>
                    <p className="text-gray-600">Uttar Pradesh, India 226010</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bold text-xl mb-4">Regional Offices</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold">Mumbai</h4>
                    <p className="text-sm text-gray-600">Andheri East, Mumbai</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold">Delhi NCR</h4>
                    <p className="text-sm text-gray-600">Sector 62, Noida</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold">Bangalore</h4>
                    <p className="text-sm text-gray-600">Electronic City, Bangalore</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold">Chennai</h4>
                    <p className="text-sm text-gray-600">OMR Road, Chennai</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your name" 
                              {...field} 
                              className="contact-input" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email address" 
                              type="email" 
                              {...field} 
                              className="contact-input" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your phone number" 
                              {...field} 
                              className="contact-input" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Subject of your message" 
                              {...field} 
                              className="contact-input" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your inquiry" 
                            {...field} 
                            className="contact-input min-h-[150px]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-excleria-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 w-full py-6 h-auto text-lg"
                  >
                    Submit Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-[400px] mt-8">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-2xl font-bold">Our Location</h2>
            <p className="text-gray-600">Find us on the map</p>
          </div>
          <div className="w-full h-[350px] bg-gray-200 relative">
            {/* Placeholder for a real map embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-center">Map Embed Placeholder</p>
              <p className="text-gray-500 text-center">(You would integrate Google Maps or another mapping service here)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
