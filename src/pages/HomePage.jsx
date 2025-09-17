// src/pages/HomePage.jsx

import Header from '../components/common/Header';
import InteractiveMap from '../components/home/InteractiveMap';
import Footer from '../components/common/Footer';
import AshokaChakra from '../components/common/AshokaChakra';
import IntroSection from '../components/home/IntroSection';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <AshokaChakra />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <IntroSection />
        <div className="w-full max-w-full md:max-w-6xl aspect-[1.1/1] translucent-box rounded-xl shadow-2xl p-2 md:p-4 flex items-center justify-center">
          <InteractiveMap />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;