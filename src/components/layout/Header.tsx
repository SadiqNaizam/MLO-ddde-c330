import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Hexagon, Rabbit } from 'lucide-react';
import AnimatedCallToActionButton from '@/components/AnimatedCallToActionButton';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/themes", label: "Themes" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/past-achievements", label: "Past Achievements" },
  { href: "/power-player-sponsor", label: "Power Player" },
];

const Header: React.FC = () => {
  console.log('Header component loaded');

  const desktopActiveLink = "text-primary font-semibold";
  const desktopInactiveLink = "hover:text-primary transition-colors";

  const mobileActiveLink = "bg-primary text-primary-foreground";
  const mobileInactiveLink = "hover:bg-gray-800 hover:text-primary";

  return (
    <header className="bg-gray-900 text-gray-100 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo and Milo Motif */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold hover:text-primary transition-colors">
          <Hexagon className="h-8 w-8 text-primary" aria-label="Hackathon Logo Icon" />
          <span>HackathonSite</span>
          <Rabbit className="h-7 w-7 text-yellow-400 ml-1" aria-label="Milo the Bunny Icon" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? desktopActiveLink : desktopInactiveLink}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="ml-4">
            <AnimatedCallToActionButton />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-gray-900 text-gray-100 border-l border-gray-700 p-6 flex flex-col">
              <div className="mb-6">
                <SheetClose asChild>
                  <Link to="/" className="flex items-center space-x-2 text-lg font-semibold hover:text-primary transition-colors">
                    <Hexagon className="h-7 w-7 text-primary" />
                    <span>HackathonSite</span>
                    <Rabbit className="h-6 w-6 text-yellow-400 ml-1" />
                  </Link>
                </SheetClose>
              </div>
              
              <nav className="flex flex-col space-y-3 flex-grow">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-md text-base font-medium ${isActive ? mobileActiveLink : mobileInactiveLink}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-gray-700">
                <SheetClose asChild>
                  {/* Wrapping AnimatedCallToActionButton with SheetClose might be tricky if it has its own complex event handling.
                      If AnimatedCallToActionButton itself is a Link or handles navigation, clicking it should close the sheet.
                      If issues arise, this might need adjustment based on AnimatedCallToActionButton's actual implementation.
                      For now, this structure is the most logical.
                  */}
                  <AnimatedCallToActionButton />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;