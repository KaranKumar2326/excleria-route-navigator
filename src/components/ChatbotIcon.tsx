
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('chat-input') as HTMLInputElement;
    if (input.value.trim()) {
      toast({
        title: "Message sent",
        description: "Our team will respond shortly!",
      });
      input.value = '';
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl mb-4 w-72 md:w-96 overflow-hidden animate-fade-in border border-orange-200">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Excleria Chat Support</h3>
            <Button 
              onClick={toggleChat} 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-orange-700 rounded-full"
            >
              <X size={18} />
            </Button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 bg-orange-50 space-y-4">
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-lg shadow max-w-[80%]">
                <p className="text-sm text-gray-800">Hello! How can we assist you today with your logistics needs?</p>
                <span className="text-xs text-gray-500 mt-1 block">Excleria Bot, 2:30 PM</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
            <input
              id="chat-input"
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600"
            >
              Send
            </button>
          </form>
        </div>
      )}
      
      <Button
        onClick={toggleChat}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg flex items-center justify-center text-white"
      >
        <MessageCircle size={28} />
      </Button>
    </div>
  );
};

export default ChatbotIcon;
