import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Cases } from '@/sections/Cases';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Cases />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
