import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PowerPlayerSpotlight from '@/components/PowerPlayerSpotlight';

// Placeholder data for the PowerPlayerSpotlight component
const powerPlayerSponsorData = {
  name: "QuantumLeap Dynamics",
  logoUrl: "https://cdn.jsdelivr.net/gh/PhiloNL/svgl/html/HTML5.svg", // Placeholder logo
  tagline: "Pioneering the Next Frontier of Innovation.",
  description: "QuantumLeap Dynamics is at the forefront of deep-tech research and development, specializing in quantum computing, advanced AI, and sustainable energy solutions. We are thrilled to be the Power Player Sponsor for this hackathon, championing bright minds and groundbreaking ideas. Our mission is to empower innovators to tackle global challenges and build a transformative future. Discover how QuantumLeap is shaping the world of tomorrow.",
  websiteUrl: "https://example.com/quantumleap", // Placeholder external URL
  brandColor: "#4F46E5", // Example: Indigo, a techy and modern color
  backgroundImageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1920&q=80" // A dynamic, abstract tech background
};

const PowerPlayerSponsorPage: React.FC = () => {
  console.log('PowerPlayerSponsorPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        {/* The PowerPlayerSpotlight component is designed to be a full-width, immersive section */}
        <PowerPlayerSpotlight sponsor={powerPlayerSponsorData} />
        
        {/* Additional sections could be added here if the page design evolved, for example:
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Hackathon Initiatives</h2>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
            Details about specific workshops, talks, or prizes sponsored by QuantumLeap Dynamics...
          </p>
        </section>
        */}
      </main>
      <Footer />
    </div>
  );
};

export default PowerPlayerSponsorPage;