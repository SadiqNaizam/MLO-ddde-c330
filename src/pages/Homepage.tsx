import React from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DynamicHeroBanner from '@/components/DynamicHeroBanner';
import ContentRevealModule from '@/components/ContentRevealModule';
import StyledInfoCard from '@/components/StyledInfoCard';

// Shadcn/ui Components
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'; // Using Card for simple info blocks

// Icons
import { Rabbit, Award, Lightbulb, Users, CalendarDays, Mail } from 'lucide-react';

const Homepage: React.FC = () => {
  console.log('Homepage loaded');

  // Placeholder content for ContentRevealModule
  const lockedThemesContent = (
    <div className="text-center p-4 md:p-6">
      <Rabbit className="mx-auto h-10 w-10 md:h-12 md:w-12 text-purple-400 mb-3 md:mb-4" />
      <p className="text-lg font-semibold text-card-foreground">Themes Unveiling Soon!</p>
      <p className="text-sm text-muted-foreground mt-1">
        Milo's busy cooking up exciting challenges. Check back for the big reveal!
      </p>
    </div>
  );

  const unlockedThemesContent = (
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-3 text-purple-400">Themes Revealed!</h3>
      <ul className="list-disc list-inside space-y-1 text-card-foreground">
        <li>Sustainable Future: Tech for Good</li>
        <li>AI & Machine Learning Innovations</li>
        <li>Decentralized Web & Blockchain</li>
        <li>Next-Gen Gaming & Metaverse</li>
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-gray-200">
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero Banner */}
        <section id="hero-banner" aria-labelledby="page-main-title">
          <h1 id="page-main-title" className="sr-only">Hackathon X Homepage - The Future of Innovation</h1>
          <DynamicHeroBanner />
        </section>

        {/* Section 2: Event Overview & Teasers */}
        <section id="event-overview" aria-labelledby="overview-title" className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="overview-title" className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-100">
              Welcome to <span className="text-purple-400">Hackathon X</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <StyledInfoCard
                title="What is Hackathon X?"
                description="Dive into an electrifying 2-day event where developers, designers, and visionaries collaborate to build groundbreaking solutions. Network, learn, and innovate with the best!"
                imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                imageAlt="Diverse team collaborating on a project"
                category="Event Introduction"
                className="h-full" // Rely on StyledInfoCard's internal theming
              />
              <ContentRevealModule
                title="Explore the Themes"
                isLocked={true} 
                lockedContent={lockedThemesContent}
                unlockedContent={unlockedThemesContent}
                className="h-full" // Rely on ContentRevealModule's internal theming
              />
            </div>
          </div>
        </section>

        {/* Section 3: Why Join & Milo */}
        <section id="why-join" aria-labelledby="why-join-title" className="py-12 md:py-16 bg-slate-800"> {/* Section with a slightly different background */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="why-join-title" className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-100">
              Why Join Hackathon X?
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <StyledInfoCard
                title="Innovate & Create"
                description="Bring your ideas to life. Work on exciting challenges and build a project you're proud of."
                imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                imageAlt="Team brainstorming with sticky notes"
                category="Core Value"
              />
              <StyledInfoCard
                title="Learn & Grow"
                description="Attend workshops, get mentorship from industry experts, and expand your skillset in a dynamic environment."
                imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                imageAlt="Students learning in a workshop"
                category="Benefit"
              />
              <StyledInfoCard
                title="Meet Milo!"
                description="Our friendly mascot, Milo the bunny, will guide you through the hackathon journey, offering tips, encouragement, and a bit of fun!"
                imageUrl="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                imageAlt="Milo the bunny mascot"
                category="Mascot Introduction"
              />
            </div>
          </div>
        </section>
        
        {/* Section 4: Hackathon at a Glance */}
        <section id="quick-info" aria-labelledby="quick-info-title" className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="quick-info-title" className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-100">
                    Hackathon at a Glance
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-slate-800 border-slate-700 text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <CalendarDays className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Dates</h3>
                        <p className="text-gray-300 text-sm sm:text-base">October 26-27, 2024</p>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700 text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <Users className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Participants</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Open to all skill levels</p>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700 text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <Award className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Prizes</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Exciting prizes & swags!</p>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700 text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Focus</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Innovation & Collaboration</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* Section 5: Stay Updated / Contact Form */}
        <section id="stay-updated" aria-labelledby="stay-updated-title" className="py-12 md:py-16 bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center bg-slate-700 p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
              <Mail className="h-12 w-12 sm:h-16 sm:w-16 text-purple-400 mx-auto mb-4 sm:mb-6" />
              <h2 id="stay-updated-title" className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-100">
                Have Questions or Want Updates?
              </h2>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Drop us a line for inquiries, sponsorship details, or just to say hi! Or subscribe to our newsletter for the latest announcements.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <Textarea
                  placeholder="Your message or email for newsletter..."
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                  rows={4}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-base sm:text-lg font-semibold"
                >
                  Send Message / Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Your information is safe with us.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;