import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Homepage from "./pages/Homepage";
import PastAchievementsPage from "./pages/PastAchievementsPage";
import PowerPlayerSponsorPage from "./pages/PowerPlayerSponsorPage";
import RegistrationPage from "./pages/RegistrationPage";
import SponsorsPage from "./pages/SponsorsPage";
import ThemesPage from "./pages/ThemesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/past-achievements" element={<PastAchievementsPage />} />
          <Route path="/power-player-sponsor" element={<PowerPlayerSponsorPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/themes" element={<ThemesPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
