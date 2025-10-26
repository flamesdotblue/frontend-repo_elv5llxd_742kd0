import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Rocket, Atom, Server } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-6 w-6" />, label: 'Full-Stack Developer' },
  { icon: <Cpu className="h-6 w-6" />, label: 'AI Enthusiast' },
  { icon: <Atom className="h-6 w-6" />, label: 'React & Tailwind' },
  { icon: <Server className="h-6 w-6" />, label: 'Flask & Django' },
  { icon: <Database className="h-6 w-6" />, label: 'MySQL & MongoDB' },
  { icon: <Rocket className="h-6 w-6" />, label: 'Creative Technologist' },
];

const HoverCard = ({ children }) => (
  <motion.div
    whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_80px_-20px_rgba(168,85,247,0.35)]"
    style={{ transformStyle: 'preserve-3d' }}
  >
    {/* glow */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-[#070716] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          About Me
        </motion.h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-cyan-100/80">
          Software Developer • Creative Technologist • Full-Stack Developer • AI Enthusiast
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <HoverCard>
            <h3 className="mb-2 bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-xl font-semibold text-transparent">
              Philosophy
            </h3>
            <p className="text-sm text-cyan-100/80">
              I design and build intelligent, immersive digital experiences that blend artful aesthetics with robust engineering.
            </p>
          </HoverCard>
          <HoverCard>
            <h3 className="mb-2 bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-xl font-semibold text-transparent">
              Focus
            </h3>
            <p className="text-sm text-cyan-100/80">
              Human-centered interfaces, performant systems, and creative tools powered by modern web and AI technologies.
            </p>
          </HoverCard>
          <HoverCard>
            <h3 className="mb-2 bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-xl font-semibold text-transparent">
              Stack
            </h3>
            <p className="text-sm text-cyan-100/80">
              React, Tailwind, Django, Flask, FastAPI, Node, Python, Java, SQL/NoSQL, and cloud-native tooling.
            </p>
          </HoverCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="mb-4 text-center text-lg font-semibold text-cyan-100">Experience & Skills</h3>
          <div className="[perspective:1200px] grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ rotateX: -6, rotateY: 6, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center shadow-inner backdrop-blur"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-cyan-200 group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/30">
                  {s.icon}
                </div>
                <div className="text-xs text-cyan-100/80">{s.label}</div>
                <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen group-hover:opacity-100" style={{
                  background: 'radial-gradient(600px 80px at 50% 110%, rgba(168,85,247,0.25), transparent), radial-gradient(300px 40px at 10% -10%, rgba(34,211,238,0.3), transparent)'
                }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
