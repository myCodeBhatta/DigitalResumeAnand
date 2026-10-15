import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import { ToastProvider } from './hooks/useToast';
import { useTheme } from './hooks/useTheme';

// Chromium can feed an SVG displacement map into backdrop-filter, which gives real lens refraction.
// Other browsers keep the plain frosted blur.
function useRefractionSupport() {
  useEffect(() => {
    const chromium = navigator.userAgentData?.brands?.some((b) => b.brand === 'Chromium');
    document.documentElement.classList.toggle('can-refract', Boolean(chromium));
  }, []);
}

function LiquidFilter() {
  return (
    <svg aria-hidden width="0" height="0" style={{ position: 'absolute' }}>
      <filter id="liquid-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
        <feDisplacementMap in="SourceGraphic" in2="soft" scale="38" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  const [palette, setPalette] = useState(false);
  useRefractionSupport();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closePalette = useCallback(() => setPalette(false), []);
  const openPalette = useCallback(() => setPalette(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <LiquidFilter />
        <Background />
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] btn-primary">
          Skip to content
        </a>
        <Navbar theme={theme} onToggleTheme={toggle} onOpenPalette={openPalette} />
        <main>
          <Hero />
          <AboutProject />
          <Skills />
          <Experience />
          <Credentials />
        </main>
        <Contact />
        <CommandPalette open={palette} onClose={closePalette} onToggleTheme={toggle} />
      </ToastProvider>
    </MotionConfig>
  );
}
