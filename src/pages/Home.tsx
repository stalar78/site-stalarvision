import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Process } from '../components/Process';
import { TechStack } from '../components/TechStack';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
