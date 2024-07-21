import React from 'react';

function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">The Recipe Hub</h2>
            <p className="mt-2 text-black-400">Your ultimate destination for delicious recipes</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#home" className="text-black-400 hover:text-white">Home</a></li>
              <li><a href="#recipes" className="text-black-400 hover:text-white">Recipes</a></li>
              <li><a href="#about" className="text-black-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-black-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-end space-x-4">
              <a href="https://www.facebook.com" className="text-black-400 hover:text-white"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="https://www.twitter.com" className="text-black-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="https://www.instagram.com" className="text-black-400 hover:text-white"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-black-800 pt-4 text-center">
          <p className="text-black-400">&copy; 2024 The Recipe Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
