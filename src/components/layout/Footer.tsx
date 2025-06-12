import React from 'react';
import { Link } from 'react-router-dom';
import { Rabbit, Terminal } from 'lucide-react'; // Using Rabbit as a placeholder for Milo

const Footer: React.FC = () => {
  console.log('Footer loaded');

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/themes', label: 'Themes' },
    { to: '/sponsors', label: 'Sponsors' },
    { to: '/past-achievements', label: 'Past Achievements' },
    { to: '/registration', label: 'Register' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Milo Motif and Site Name */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-4 group">
              {/* Placeholder for animated Milo the bunny. Using Rabbit icon for now. */}
              <Rabbit className="h-10 w-10 text-purple-400 group-hover:animate-bounce" />
              <span className="ml-3 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">MiloHack</span>
            </Link>
            <p className="text-sm text-center md:text-left">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Quick Links</h3>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact/Info placeholder */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <p className="mb-2">Follow us on social media!</p>
            {/* Placeholder for social media icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-purple-300"><Terminal className="h-6 w-6" /></a>
              <a href="#" className="hover:text-purple-300"><Terminal className="h-6 w-6" /></a>
              <a href="#" className="hover:text-purple-300"><Terminal className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MiloHack. All rights reserved.
            {/* This is where the friendly, animated Milo the bunny motif would be more prominent if it's a global footer element rather than just an icon */}
          </p>
          <p className="text-xs mt-1 text-gray-500">
            Designed with <span className="text-purple-400">&lt;3</span> by the MiloHack Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;