import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { WhatsAppButton } from './components/Layout/WhatsAppButton';

// Pages
import { HomePage } from './app/HomePage';
import { AboutPage } from './app/AboutPage';
import { VolunteerPage } from './app/VolunteerPage';
import { DonatePage } from './app/DonatePage';
import { ContactPage } from './app/ContactPage';

// Helper component to scroll to top on page transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp CTA */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
