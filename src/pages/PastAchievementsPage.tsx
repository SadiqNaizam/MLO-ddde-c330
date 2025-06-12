import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StyledInfoCard from '@/components/StyledInfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, Briefcase, Star } from 'lucide-react'; // Icons for visual flair

const pastWinnersData = [
  {
    id: 'winner1',
    title: "Team Innovatech",
    category: "1st Place Winner - 2023",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    imageAlt: "Team Innovatech celebrating",
    description: "Developed 'EcoSort', an AI-powered waste sorting system for urban environments, revolutionizing recycling.",
    hoverDetails: "Judges praised their innovative use of machine learning and potential for real-world impact. The solution demonstrated scalability and a strong business case.",
  },
  {
    id: 'winner2',
    title: "Code Wizards",
    category: "Best Technical Solution - 2023",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    imageAlt: "Code Wizards' data visualization project",
    description: "Created a real-time data visualization platform for tracking global supply chain disruptions with predictive analytics.",
    hoverDetails: "Their complex backend architecture, efficient algorithms, and smooth user interface were key winning factors.",
  },
  {
    id: 'winner3',
    title: "HealthBridge AI",
    category: "Social Impact Award - 2022",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    imageAlt: "HealthBridge AI application screenshot",
    description: "Designed an accessible telehealth platform connecting rural patients with specialized medical professionals using AI diagnostics.",
    hoverDetails: "The project was commended for its focus on inclusivity and addressing a critical healthcare gap.",
  },
];

const pastSponsorsData = [
  {
    id: 'sponsor1',
    title: "TechSolutions Inc.",
    category: "Diamond Sponsor - 2023",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwb2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    imageAlt: "TechSolutions Inc. office building",
    description: "A leading provider of cloud infrastructure and advanced AI development tools, empowering innovators worldwide.",
    hoverDetails: "Contributed significantly to mentorship, workshops, and provided cloud credits to all participants.",
  },
  {
    id: 'sponsor2',
    title: "Innovate Hub",
    category: "Gold Partner - 2023",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    imageAlt: "Innovate Hub community event",
    description: "Local co-working space and tech incubator fostering a vibrant ecosystem for startups and tech talent.",
    hoverDetails: "Provided the venue, high-speed internet, and logistical support for the hackathon weekend, ensuring a smooth event.",
  },
  {
    id: 'sponsor3',
    title: "FutureWorks Capital",
    category: "Seed Sponsor - 2022",
    imageUrl: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlbnR1cmUlMjBjYXBpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    imageAlt: "FutureWorks Capital logo",
    description: "Venture capital firm specializing in early-stage tech startups with disruptive potential.",
    hoverDetails: "Offered exclusive pitch sessions to winning teams and provided valuable feedback on business models.",
  },
];


const PastAchievementsPage: React.FC = () => {
  console.log('PastAchievementsPage loaded');

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
      <Header />
      <ScrollArea className="flex-grow" id="main-content">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-2"
            >
              Our Legacy of Success
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-3 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Celebrating the brilliant minds and supportive partners who have made past hackathons unforgettable events of innovation and collaboration.
            </motion.p>
          </div>

          <Tabs defaultValue="winners" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 bg-gray-800/70 p-1.5 rounded-lg shadow-md">
              <TabsTrigger 
                value="winners" 
                className="py-2.5 text-sm sm:text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-md transition-all duration-200 ease-in-out"
              >
                <Award className="w-5 h-5 mr-2 inline-block" /> Past Winners
              </TabsTrigger>
              <TabsTrigger 
                value="sponsors" 
                className="py-2.5 text-sm sm:text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-md transition-all duration-200 ease-in-out"
              >
                <Briefcase className="w-5 h-5 mr-2 inline-block" /> Past Sponsors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="winners">
              <section aria-labelledby="past-winners-heading">
                <div className="text-center mb-10">
                    <Star className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                    <h2 id="past-winners-heading" className="text-2xl sm:text-3xl font-bold text-gray-200">
                        Hall of Champions
                    </h2>
                    <p className="text-gray-400 mt-1">Projects that pushed boundaries and inspired.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {pastWinnersData.map((winner, index) => (
                     <motion.div
                        key={winner.id}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                      >
                        <StyledInfoCard
                          title={winner.title}
                          category={winner.category}
                          imageUrl={winner.imageUrl}
                          imageAlt={winner.imageAlt}
                          description={winner.description}
                          hoverDetails={winner.hoverDetails}
                          className="h-full" // Ensure cards in a row take same height if content differs
                        />
                      </motion.div>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="sponsors">
              <section aria-labelledby="past-sponsors-heading">
                 <div className="text-center mb-10">
                    <Star className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                    <h2 id="past-sponsors-heading" className="text-2xl sm:text-3xl font-bold text-gray-200">
                        Our Esteemed Partners
                    </h2>
                    <p className="text-gray-400 mt-1">Organizations that believed in our vision.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {pastSponsorsData.map((sponsor, index) => (
                    <motion.div
                        key={sponsor.id}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                      >
                        <StyledInfoCard
                          title={sponsor.title}
                          category={sponsor.category}
                          imageUrl={sponsor.imageUrl}
                          imageAlt={sponsor.imageAlt}
                          description={sponsor.description}
                          hoverDetails={sponsor.hoverDetails}
                          className="h-full"
                        />
                      </motion.div>
                  ))}
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

// Minimal framer-motion import, if not already globally available in a layout
// For mlo, we assume it's available if components use it.
// If direct import needed for page-specific motion:
import { motion } from 'framer-motion';

export default PastAchievementsPage;