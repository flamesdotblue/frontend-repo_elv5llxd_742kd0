import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon UI Kit',
    desc: 'A futuristic component library with glassmorphism and motion primitives.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    source: '#',
  },
  {
    title: 'AI Sketchpad',
    desc: 'Creative tool that turns doodles into code hints using on-device models.',
    tech: ['Python', 'FastAPI', 'Canvas'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Hologram Blog',
    desc: '3D-inspired publishing platform with depth and parallax storytelling.',
    tech: ['Next.js', 'MDX', 'Three.js'],
    demo: '#',
    source: '#',
  },
];

const ProjectCard = ({ p, i }) => (
  <motion.a
    href={p.demo}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05, duration: 0.6 }}
    className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-[0_0_100px_-30px_rgba(59,130,246,0.25)] backdrop-blur-lg"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
      background: 'radial-gradient(500px_50px_at_50%_110%,rgba(34,211,238,0.25),transparent),radial-gradient(400px_50px_at_-10%_-10%,rgba(217,70,239,0.3),transparent)'
    }} />

    <div className="relative z-10">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-lg font-semibold text-white">{p.title}</h4>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">3D</span>
      </div>
      <p className="mb-4 text-sm text-cyan-100/80">{p.desc}</p>
      <div className="flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-cyan-100/80">
            {t}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rotate-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl" />
    </div>
  </motion.a>
);

const ProjectsGallery = () => {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-black via-[#05050d] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.1),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Projects Showcase
        </motion.h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-cyan-100/80">
          Interactive gallery — hover to reveal depth. Click any card to open the live demo.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
