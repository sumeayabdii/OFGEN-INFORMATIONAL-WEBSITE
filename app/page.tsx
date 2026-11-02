import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/ProjectsSection";
import Sectors from "@/components/Sectors";
import Clients from "@/components/Clients";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <a href="#about" className="skip-link">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Sectors />
        <Clients />
        <Impact />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}