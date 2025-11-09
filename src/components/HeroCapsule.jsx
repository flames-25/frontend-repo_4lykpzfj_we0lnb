import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroCapsule = () => {
  return (
    <section id="capsule" className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[86vh] w-full overflow-hidden bg-gradient-to-b from-white via-white to-zinc-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlay for glassmorphism depth, doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 pt-20 pb-28 flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ALEKSEI DOLGIKH
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-zinc-700/90 text-sm sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          Minimalist capsule collections refined for modern movement. Precision-made essentials with a quiet, enduring luxury.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#catalog" className="px-5 py-2.5 rounded-full bg-black text-white text-sm tracking-wide hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30" aria-label="Shop Capsule">
            SHOP CAPSULE
          </a>
          <a href="#lookbook" className="px-5 py-2.5 rounded-full border border-black/10 bg-white text-sm tracking-wide hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20" aria-label="View Lookbook">
            VIEW LOOKBOOK
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCapsule;
