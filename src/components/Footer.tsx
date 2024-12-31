import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300">
            We offer premium clothing designed for style and comfort.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-300">Email: baixada@bdm.com</p>
          <p className="text-gray-300">Phone: +351 912 345 678</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/neeiualg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white"
            >
              Instagram
            </a>
            <a 
              href="https://www.facebook.com/universidade.algarve?locale=pt_PT" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}