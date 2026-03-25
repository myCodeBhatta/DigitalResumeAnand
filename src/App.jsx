import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Certifications />
        <Education />
        <Accomplishments />
      </main>
      <Contact />
    </div>
  );
}
