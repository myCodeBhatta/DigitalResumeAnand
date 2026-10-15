import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

// Colourful, slowly drifting light field. Liquid Glass needs something vivid behind it to refract.
export default function Background() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 30, damping: 20 });
  const sy = useSpring(y, { stiffness: 30, damping: 20 });

  useEffect(() => {
    if (reduce) return undefined;
    const onMove = (e) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 60);
      y.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, x, y]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div style={{ x: sx, y: sy }} className="absolute inset-[-10%]">
        <div className="blob w-[42vw] h-[42vw] top-[2%] left-[4%]" style={{ background: 'var(--blob-1)' }} />
        <div className="blob w-[36vw] h-[36vw] top-[30%] right-[2%]" style={{ background: 'var(--blob-2)', animationDelay: '-6s' }} />
        <div className="blob w-[30vw] h-[30vw] bottom-[6%] left-[22%]" style={{ background: 'var(--blob-3)', animationDelay: '-12s' }} />
        <div className="blob w-[26vw] h-[26vw] bottom-[24%] right-[30%]" style={{ background: 'var(--blob-4)', animationDelay: '-17s' }} />
      </motion.div>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 noise" />
    </div>
  );
}
