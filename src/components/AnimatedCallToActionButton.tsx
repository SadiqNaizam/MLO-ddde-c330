import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

interface AnimatedCallToActionButtonProps {
  text?: string;
  className?: string;
}

const AnimatedCallToActionButton: React.FC<AnimatedCallToActionButtonProps> = ({
  text = "Register Now!",
  className = '',
}) => {
  console.log('AnimatedCallToActionButton loaded');

  // motion() HOC to animate shadcn/ui Button
  const MotionButton = motion(Button);

  return (
    <Link to="/registration" className={`inline-block ${className}`} aria-label={text}>
      <MotionButton
        size="lg" // Using "lg" for a more prominent button
        className="font-bold text-lg text-white shadow-lg 
                   bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 
                   hover:from-green-600 hover:via-teal-600 hover:to-blue-700
                   dark:from-green-400 dark:via-teal-400 dark:to-blue-500
                   dark:hover:from-green-500 dark:hover:via-teal-500 dark:hover:to-blue-600"
        animate={{
          scale: [1, 1.03, 1], // Pulsing scale effect
          boxShadow: [ // Pulsing glow effect, using a teal/greenish hue for energy
            "0px 2px 10px rgba(20, 184, 166, 0.3)", // Adjusted for teal-500
            "0px 4px 20px rgba(20, 184, 166, 0.5)",
            "0px 2px 10px rgba(20, 184, 166, 0.3)",
          ],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{
          scale: 1.05,
          y: -3, // Slight lift on hover
          boxShadow: "0px 6px 25px rgba(20, 184, 166, 0.6)", // More intense glow on hover
        }}
        whileTap={{ scale: 0.98, y: 0 }} // Button press effect
      >
        <Rocket className="mr-2.5 h-5 w-5 sm:h-6 sm:w-6" /> {/* Responsive icon size */}
        {text}
      </MotionButton>
      {/* 
        For "subtle Milo integration", consider adding a small, themed element here if assets become available.
        Example: A small Milo graphic peeking out, or Milo-themed particle effects on hover/click.
      */}
    </Link>
  );
};

export default AnimatedCallToActionButton;