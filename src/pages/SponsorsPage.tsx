import React from 'react';
import { Link } from 'react-router-dom'; // Though direct use might be minimal, good to have if needed.

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContentRevealModule from '@/components/ContentRevealModule';
import PowerPlayerSpotlight from '@/components/PowerPlayerSpotlight';

// shadcn/ui Components
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardTitle, CardDescription } from '@/components/ui/card'; // For unlocked sponsor display
import { Button } from '@/components/ui/button'; // Potentially for "Learn More" links if needed

// Lucide Icons
import { LockKeyhole, Building, Users, Handshake } from 'lucide-react';

// Placeholder data for sponsors
const powerPlayerSponsorData = {
  name: "TechNova Solutions",
  logoUrl: "https://img.logoipsum.com/296.svg", // Placeholder logo
  tagline: "Pioneering Tomorrow's Technology.",
  description: "TechNova Solutions is at the forefront of digital transformation, offering innovative solutions in AI, cloud computing, and cybersecurity. We are thrilled to empower the bright minds at this hackathon and witness the future they build.",
  websiteUrl: "https://example.com/technova", // External website for the sponsor
  brandColor: "#4F46E5", // Example: Indigo
  backgroundImageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" // Abstract tech background
};

interface TierSponsor {
  name: string;
  logoUrl: string;
  description: string;
  websiteUrl?: string;
}

const goldSponsors: TierSponsor[] = [
  { name: "QuantumLeap AI", logoUrl: "https://img.logoipsum.com/243.svg", description: "Leading advancements in artificial intelligence.", websiteUrl: "https://example.com/quantumleap" },
  { name: "CyberGuard Inc.", logoUrl: "https://img.logoipsum.com/244.svg", description: "Securing the digital frontier.", websiteUrl: "https://example.com/cyberguard" },
];

const silverSponsors: TierSponsor[] = [
  { name: "DevTools Pro", logoUrl: "https://img.logoipsum.com/225.svg", description: "Premium tools for developers.", websiteUrl: "https://example.com/devtools" },
  { name: "CloudServe Ltd.", logoUrl: "https://img.logoipsum.com/226.svg", description: "Reliable cloud infrastructure.", websiteUrl: "https://example.com/cloudserve" },
  { name: "Innovate Hub", logoUrl: "https://img.logoipsum.com/250.svg", description: "Fostering innovation and collaboration.", websiteUrl: "https://example.com/innovatehub" },
];

const communityPartners: TierSponsor[] = [
  { name: "OpenSource Org", logoUrl: "https://img.logoipsum.com/253.svg", description: "Supporting open source initiatives." },
  { name: "TechMeetup Group", logoUrl: "https://img.logoipsum.com/254.svg", description: "Connecting tech enthusiasts." },
];

const LockedSponsorContent: React.FC = () => (
  <div className="text-center py-10 text-gray-400">
    <LockKeyhole className="h-16 w-16 mx-auto text-purple-400 mb-4" />
    <p className="text-2xl font-semibold text-gray-200">Sponsor Details Unveiling Soon!</p>
    <p className="mt-2 text-gray-500">Our amazing sponsors are getting ready. Check back for exciting updates!</p>
  </div>
);

const UnlockedSponsorContent: React.FC<{ sponsors: TierSponsor[], tierName: string }> = ({ sponsors, tierName }) => (
  <div className="py-6">
    {sponsors.length === 0 ? (
      <p className="text-center text-gray-500">Details for {tierName} are being finalized.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor) => (
          <Card key={sponsor.name} className="bg-gray-800/70 border-gray-700/50 text-gray-200 p-6 flex flex-col items-center text-center shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
            <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className="h-20 max-w-[150px] object-contain mb-4 bg-white/5 p-2 rounded" />
            <CardTitle className="text-xl font-semibold text-purple-300 mb-1">{sponsor.name}</CardTitle>
            <CardDescription className="text-sm text-gray-400 flex-grow mb-4">{sponsor.description}</CardDescription>
            {sponsor.websiteUrl && (
              <Button asChild variant="outline" size="sm" className="mt-auto border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900">
                <a href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
              </Button>
            )}
          </Card>
        ))}
      </div>
    )}
  </div>
);

const SponsorsPage = () => {
  console.log('SponsorsPage loaded');

  // For demonstration, let's assume Gold sponsors are revealed and others are locked.
  // In a real app, this state would come from a CMS or be time-based.
  const [areGoldSponsorsRevealed, setAreGoldSponsorsRevealed] = React.useState(false);
  // To simulate reveal after some time for demo purpose.
  React.useEffect(() => {
    const timer = setTimeout(() => setAreGoldSponsorsRevealed(true), 3000); // Reveals Gold after 3s
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <ScrollArea className="flex-grow">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400"
          >
            Our Valued Sponsors
          </motion.h1>

          {/* General Sponsors Section */}
          <section className="space-y-12 md:space-y-16 mb-16 md:mb-24">
            <ContentRevealModule
              title="Gold Tier Sponsors"
              isLocked={!areGoldSponsorsRevealed}
              lockedContent={<LockedSponsorContent />}
              unlockedContent={<UnlockedSponsorContent sponsors={goldSponsors} tierName="Gold Tier Sponsors" />}
              className="bg-gray-850 border-gray-750 shadow-xl" // Custom class for specific styling if needed
            />
            <ContentRevealModule
              title="Silver Tier Sponsors"
              isLocked={true} // Kept locked for demo
              lockedContent={<LockedSponsorContent />}
              unlockedContent={<UnlockedSponsorContent sponsors={silverSponsors} tierName="Silver Tier Sponsors" />}
              className="bg-gray-850 border-gray-750 shadow-xl"
            />
            <ContentRevealModule
              title="Community Partners"
              isLocked={true} // Kept locked for demo
              lockedContent={<LockedSponsorContent />}
              unlockedContent={<UnlockedSponsorContent sponsors={communityPartners} tierName="Community Partners" />}
              className="bg-gray-850 border-gray-750 shadow-xl"
            />
          </section>

          {/* Power Player Sponsor Spotlight */}
          {/* The PowerPlayerSpotlight component is already designed to be a prominent section */}
          <PowerPlayerSpotlight sponsor={powerPlayerSponsorData} />
          
          {/* Optional: Link to the dedicated Power Player page if more info there */}
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
              <Link to="/power-player-sponsor">
                Learn More About Our Power Player: {powerPlayerSponsorData.name}
              </Link>
            </Button>
          </div>

        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

// Need to import motion from framer-motion for h1 animation if used
import { motion } from 'framer-motion';

export default SponsorsPage;