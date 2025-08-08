import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Location from './components/Location';
import Facilities from './components/Facilities';
import Government from './components/Government';
import GovernmentServices from './components/GovernmentServices';
import NewsAndAnnouncements from './components/NewsAndAnnouncements';
import ContactInformation from './components/ContactInformation';
import KKNT114Section from './components/KKNT114Section';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="bg-green-100 text-gray-900 min-h-screen">

{/* Navbar */}
<Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Village Profile */}
      <Profile />
      
      {/* Location Section */}
      <Location />

      {/* Facilities Section */}
       <Facilities />

      {/* Struktur Pemerintahan dari API */}
      <Government />

      {/* Local Government Structure */}
      <GovernmentServices />

      {/* News & Announcements */}
      <NewsAndAnnouncements />

      {/* Contact Information */}
      <ContactInformation />

      {/* KKNT114 */}
      <KKNT114Section />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;