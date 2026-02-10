import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Features } from '@/sections/Features';
import { Products } from '@/sections/Products';
import { About } from '@/sections/About';
import { HowItWorks } from '@/sections/HowItWorks';
import { Testimonials } from '@/sections/Testimonials';
import { FAQ } from '@/sections/FAQ';
import { CTABanner } from '@/sections/CTABanner';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
