import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Particles = ({ trigger }) => {
  const items = useMemo(() => Array.from({ length: 28 }, (_, i) => i), [trigger]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const distance = 120 + Math.random() * 120;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const delay = Math.random() * 0.15;
        return (
          <motion.div
            key={`${trigger}-${i}`}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
            animate={{ opacity: 0, x, y, scale: 1.1 }}
            transition={{ duration: 0.9, delay, ease: 'easeOut' }}
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500"
          />
        );
      })}
    </div>
  );
};

const ContactFooter = () => {
  const [sent, setSent] = useState(false);
  const [counter, setCounter] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setCounter((c) => c + 1);
    setTimeout(() => setSent(false), 2200);
  };

  return (
    <footer id="contact" className="relative w-full bg-gradient-to-b from-black via-[#070716] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Contact</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80">
          Have an idea or a role in mind? Let’s build something intelligent and beautiful.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_100px_-30px_rgba(236,72,153,0.25)] backdrop-blur-lg">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-cyan-100/80">Name</label>
              <input required type="text" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-cyan-400/30 placeholder:text-cyan-100/40 focus:ring" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-cyan-100/80">Email</label>
              <input required type="email" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-cyan-400/30 placeholder:text-cyan-100/40 focus:ring" placeholder="you@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-cyan-100/80">Message</label>
              <textarea required rows="4" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-cyan-400/30 placeholder:text-cyan-100/40 focus:ring" placeholder="Tell me about your project..." />
            </div>
            <div className="sm:col-span-2 mt-2 flex items-center justify-between">
              <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-cyan-300">
                Send Message
              </button>
              <div className="text-xs text-cyan-100/60">Response within 24 hours</div>
            </div>
          </form>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 text-center"
              >
                <Particles trigger={counter} />
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="text-lg font-semibold text-cyan-100">Thank you!</div>
                  <div className="text-sm text-cyan-100/70">Your message is on its way.</div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 text-center text-xs text-cyan-100/60">
          © {new Date().getFullYear()} Dharalingam Nandakishore. Crafted with creativity & code.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
