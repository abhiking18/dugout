/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { BookingSection } from './components/BookingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedFacility, setPreselectedFacility] = useState<string | undefined>(undefined);

  const handleScrollToBooking = (facilityName?: string) => {
    if (facilityName) {
      setPreselectedFacility(facilityName);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#F3F4F6] selection:bg-[#FF5A1F] selection:text-white">
      {/* Navigation */}
      <Navbar onBookClick={() => handleScrollToBooking()} />

      <main>
        {/* Hero Section */}
        <Hero
          onBookClick={() => handleScrollToBooking()}
          onExploreClick={handleScrollToAbout}
        />

        {/* About Section */}
        <About onBookClick={() => handleScrollToBooking()} />

        {/* Facilities Section */}
        <Facilities onSelectFacilityForBooking={(name) => handleScrollToBooking(name)} />

        {/* Gallery Section */}
        <Gallery />

        {/* Booking Section */}
        <BookingSection preselectedFacility={preselectedFacility} />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Location & Contact Section */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
