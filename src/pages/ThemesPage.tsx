import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header'; // Custom component
import Footer from '@/components/layout/Footer'; // Custom component
import ContentRevealModule from '@/components/ContentRevealModule'; // Custom component
import { ScrollArea } from '@/components/ui/scroll-area'; // shadcn/ui
import { Button } from '@/components/ui/button'; // shadcn/ui
import { Lock, Unlock, Lightbulb, Zap, BrainCircuit } from 'lucide-react'; // lucide-react icons

interface ThemeState {
  id: string;
  title: string;
  IconComponent: React.ElementType;
  iconColor: string;
  lockedContentNode: React.ReactNode;
  unlockedContentNode: React.ReactNode;
  isLocked: boolean;
}

const initialThemesData: Omit<ThemeState, 'isLocked'> & { initiallyLocked: boolean }[] = [
  {
    id: 'theme1',
    title: 'AI for Social Impact',
    IconComponent: BrainCircuit,
    iconColor: 'text-pink-400',
    initiallyLocked: false,
    lockedContentNode: (
      <div className="text-center p-6 flex flex-col items-center justify-center min-h-[150px]">
        <Lock className="h-10 w-10 text-gray-500 mb-3" />
        <p className="text-lg font-semibold text-gray-300">Shh... It's a Secret!</p>
        <p className="text-sm text-gray-400 mt-1">Details for "AI for Social Impact" are brewing. Stay tuned!</p>
      </div>
    ),
    unlockedContentNode: (
      <div className="p-6">
        <BrainCircuit className="float-left mr-4 h-10 w-10 text-pink-400" />
        <h3 className="text-xl font-bold mb-2 text-pink-400">AI for Social Impact: Revealed!</h3>
        <p className="text-gray-300">
          Leverage the power of Artificial Intelligence to address pressing social and environmental challenges. 
          Develop solutions for sustainability, healthcare, education, and global accessibility.
        </p>
      </div>
    ),
  },
  {
    id: 'theme2',
    title: 'Sustainable Tech & Green Future',
    IconComponent: Zap,
    iconColor: 'text-green-400',
    initiallyLocked: true,
    lockedContentNode: (
      <div className="text-center p-6 flex flex-col items-center justify-center min-h-[150px]">
        <Lock className="h-10 w-10 text-gray-500 mb-3" />
        <p className="text-lg font-semibold text-gray-300">Almost Ready...</p>
        <p className="text-sm text-gray-400 mt-1">"Sustainable Tech" theme is under wraps. Excitement is building!</p>
      </div>
    ),
    unlockedContentNode: (
      <div className="p-6">
        <Zap className="float-left mr-4 h-10 w-10 text-green-400" />
        <h3 className="text-xl font-bold mb-2 text-green-400">Sustainable Tech: Unlocked!</h3>
        <p className="text-gray-300">
          Innovate for a greener planet. Focus on renewable energy, waste reduction, smart eco-systems, 
          and conservation technologies that pave the way for a sustainable tomorrow.
        </p>
      </div>
    ),
  },
  {
    id: 'theme3',
    title: 'Web3 & Decentralized Worlds',
    IconComponent: Lightbulb, // Placeholder, could be more specific Web3 icon
    iconColor: 'text-purple-400',
    initiallyLocked: true,
    lockedContentNode: (
      <div className="text-center p-6 flex flex-col items-center justify-center min-h-[150px]">
        <Lock className="h-10 w-10 text-gray-500 mb-3" />
        <p className="text-lg font-semibold text-gray-300">Coming Soon!</p>
        <p className="text-sm text-gray-400 mt-1">Prepare for "Web3 & Decentralized Worlds". The reveal is near!</p>
      </div>
    ),
    unlockedContentNode: (
      <div className="p-6">
        <Lightbulb className="float-left mr-4 h-10 w-10 text-purple-400" />
        <h3 className="text-xl font-bold mb-2 text-purple-400">Web3 & Decentralized Worlds: Live!</h3>
        <p className="text-gray-300">
          Explore the future of the internet. Build decentralized applications (dApps), experiment with blockchain technology,
          NFTs, DAOs, and craft immersive experiences in the metaverse.
        </p>
      </div>
    ),
  },
];

const ThemesPage: React.FC = () => {
  const [themes, setThemes] = useState<ThemeState[]>([]);

  useEffect(() => {
    console.log('ThemesPage loaded');
    setThemes(
      initialThemesData.map(theme => ({
        ...theme,
        isLocked: theme.initiallyLocked,
      }))
    );
  }, []);

  const toggleThemeLock = (themeId: string) => {
    setThemes(prevThemes =>
      prevThemes.map(theme =>
        theme.id === themeId ? { ...theme, isLocked: !theme.isLocked } : theme
      )
    );
  };
  
  const firstLockedThemeId = themes.find(t => t.isLocked)?.id;

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <ScrollArea className="flex-grow">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          >
            Hackathon Themes
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            Unveil the challenges that await your ingenuity! Some themes are currently under lock and key, 
            building anticipation. Check back as we progressively reveal more exciting domains to explore.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ContentRevealModule
                  title={theme.title}
                  isLocked={theme.isLocked}
                  lockedContent={theme.lockedContentNode}
                  unlockedContent={theme.unlockedContentNode}
                  className="bg-gray-900 border border-gray-700/80 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 rounded-xl"
                />
              </motion.div>
            ))}
          </div>

          {firstLockedThemeId && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: themes.length * 0.15 + 0.3 }}
              className="text-center mt-12 md:mt-16"
            >
              <Button
                onClick={() => toggleThemeLock(firstLockedThemeId)}
                variant="outline"
                size="lg"
                className="text-purple-300 border-purple-400/70 hover:bg-purple-400/10 hover:text-purple-200 hover:border-purple-400 transition-colors duration-300 group"
              >
                <Unlock className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Reveal Next Theme (Demo)
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                (In a real scenario, themes would unlock automatically over time!)
              </p>
            </motion.div>
          )}
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default ThemesPage;