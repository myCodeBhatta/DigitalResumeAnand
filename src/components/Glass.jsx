import { forwardRef, useCallback, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

// Liquid Glass surface with a pointer-following specular spotlight and optional 3D tilt.
export const GlassCard = forwardRef(function GlassCard(
  { as = 'div', tilt = false, className = '', children, style, ...rest },
  forwardedRef,
) {
  const localRef = useRef(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(srx, (v) => `${v}deg`);
  const rotateY = useTransform(sry, (v) => `${v}deg`);

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const onMove = useCallback(
    (e) => {
      const el = localRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      if (tilt && !reduce) {
        ry.set(((x / r.width) - 0.5) * 8);
        rx.set(-((y / r.height) - 0.5) * 8);
      }
    },
    [tilt, reduce, rx, ry],
  );

  const onLeave = useCallback(() => {
    rx.set(0);
    ry.set(0);
  }, [rx, ry]);

  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      ref={setRefs}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`glass glass-spot ${className}`}
      style={tilt ? { rotateX, rotateY, transformPerspective: 900, ...style } : style}
      {...rest}
    >
      {children}
    </Comp>
  );
});

export function SectionHeader({ eyebrow, title, accent, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-title">
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </h2>
      {subtitle && <p className={`muted text-base sm:text-lg mt-4 ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>{subtitle}</p>}
    </motion.div>
  );
}

export const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};
