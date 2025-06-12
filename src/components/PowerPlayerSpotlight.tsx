import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PowerPlayerSponsor {
  name: string;
  logoUrl: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  brandColor?: string; // e.g., '#FF5733' for accents and CTA
  backgroundImageUrl?: string; // URL for a full-width background image
}

interface PowerPlayerSpotlightProps {
  sponsor: PowerPlayerSponsor;
}

const PowerPlayerSpotlight: React.FC<PowerPlayerSpotlightProps> = ({ sponsor }) => {
  console.log('PowerPlayerSpotlight loaded for:', sponsor.name);

  const sectionStyle: React.CSSProperties = sponsor.backgroundImageUrl
    ? {
        backgroundImage: `url(${sponsor.backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Creates a simple parallax-like effect
      }
    : {
        backgroundColor: '#10101A', // Default dark, techy background
      };

  const ctaButtonStyle: React.CSSProperties = sponsor.brandColor
    ? {
        backgroundColor: sponsor.brandColor,
        borderColor: sponsor.brandColor,
        color: '#ffffff', // Assuming white text on brand color button
      }
    : {
        // Default button style if no brand color (uses shadcn default primary)
    };
  
  const accentTextStyle: React.CSSProperties = sponsor.brandColor 
    ? { color: sponsor.brandColor } 
    : { color: '#00C4F0' }; // Default accent if no brand color (bright tech blue)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      className="w-full py-20 md:py-32 text-white relative overflow-hidden"
      style={sectionStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay to ensure text readability over various backgrounds */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
      
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-1 flex justify-center md:justify-start"
          >
            <img
              src={sponsor.logoUrl || 'https://via.placeholder.com/250x100?text=Sponsor+Logo'}
              alt={`${sponsor.name} Logo`}
              className="max-h-20 md:max-h-28 object-contain bg-white/5 p-3 md:p-4 rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={accentTextStyle}>
              Power Player Sponsor
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {sponsor.name}
            </h2>
            <p className="mt-3 text-xl md:text-2xl text-gray-300 font-light" style={{ color: sponsor.brandColor ? sponsor.brandColor : '#9CA3AF' }}>
              {sponsor.tagline}
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
          <p className="text-md md:text-lg text-gray-200 leading-relaxedwhitespace-pre-wrap">
            {sponsor.description}
          </p>
        </motion.div>
          
        {sponsor.websiteUrl && (
          <motion.div variants={itemVariants} className="mt-10 md:mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
              style={ctaButtonStyle} // Apply brand color or default
              onMouseEnter={(e) => {
                if(sponsor.brandColor) e.currentTarget.style.boxShadow = `0 0 15px ${sponsor.brandColor}`;
              }}
              onMouseLeave={(e) => {
                if(sponsor.brandColor) e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <a href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Learn More About {sponsor.name}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default PowerPlayerSpotlight;