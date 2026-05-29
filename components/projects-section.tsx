"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bot WhatsApp",
    description:
      "Bot otomatis untuk WhatsApp dengan berbagai fitur interaktif menggunakan REST API.",
    tags: ["Node.js", "REST API", "Automation"],
    color: "from-green-500/20 to-emerald-500/20",
    featured: true,
    githubUrl: "", // Dikosongkan jika tidak ada repo publik
    liveUrl: "https://wa.me/6282245353231",
  },
  {
    id: 2,
    title: "Web Perumahan SRB Property",
    description:
      "Landing page modern untuk perusahaan properti dengan desain responsif.",
    tags: ["Web Development", "Frontend", "UI/UX"],
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
    githubUrl: "https://github.com/SnappyXD/srbproperty",
    liveUrl: "https://srbproperty.vercel.app/",
  },
  {
    id: 3,
    title: "Snappy AI",
    description:
      "Aplikasi kecerdasan buatan interaktif yang terintegrasi dengan API untuk membantu berbagai tugas dan produktivitas harian.",
    tags: ["AI Integration", "API", "Frontend"],
    color: "from-sky-500/20 to-indigo-500/20",
    featured: true,
    githubUrl: "https://github.com/SnappyXD/SNAPPY-AI",
    liveUrl: "https://snappy-ai-six.vercel.app/",
  },
  {
    id: 4,
    title: "Website Kelas SMK",
    description:
      "Portal edukasi interaktif untuk kelas SMK dengan fitur lengkap.",
    tags: ["Web Design", "UI/UX", "Education"],
    color: "from-purple-500/20 to-pink-500/20",
    featured: false,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Aplikasi E-Commerce",
    description:
      "Platform toko online modern dengan fitur katalog produk, keranjang belanja, dan antarmuka pengguna yang menarik.",
    tags: ["React", "Web App", "UI/UX"],
    color: "from-violet-500/20 to-fuchsia-500/20",
    featured: false,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Famili Number Tracking",
    description:
      "Sistem manajemen dan pelacakan kontak nomor keluarga untuk memudahkan pengelolaan data dan komunikasi darurat.",
    tags: ["Management", "Web Development", "Database"],
    color: "from-rose-500/20 to-orange-500/20",
    featured: false,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 7,
    title: "New Year Countdown Timer",
    description:
      "Countdown timer interaktif dengan animasi menarik untuk pergantian tahun.",
    tags: ["JavaScript", "DOM", "Animation"],
    color: "from-orange-500/20 to-red-500/20",
    featured: false,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 8,
    title: "Image Slider Design",
    description:
      "Komponen slider gambar dengan transisi halus dan kontrol navigasi.",
    tags: ["CSS Animation", "Design", "Interactive"],
    color: "from-teal-500/20 to-cyan-500/20",
    featured: false,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 9,
    title: "Program Matematika",
    description:
      "Aplikasi kalkulasi matematika dengan berbagai fungsi dan formula.",
    tags: ["Logic", "Problem Solving", "Algorithm"],
    color: "from-indigo-500/20 to-violet-500/20",
    featured: false,
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="proyek" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="text-primary text-sm font-semibold tracking-wider uppercase"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-4 text-balance"
            >
              Proyek <span className="text-gradient">Terbaru</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Koleksi proyek yang menunjukkan kemampuan dalam pengembangan web,
              desain, dan pemrograman.
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative"
                >
                  <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 overflow-hidden">
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                        >
                          <span className="text-2xl font-bold text-primary">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={
                            hoveredId === project.id
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.5 }
                          }
                          className="flex gap-2"
                        >
                          {/* GitHub Link */}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                              aria-label="View on GitHub"
                            >
                              <Github size={18} />
                            </a>
                          )}
                          {/* Live/External Link */}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                              aria-label="View project"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="glass-card rounded-xl p-5 h-full hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
                      >
                        <span className="text-sm font-bold text-primary">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      {/* Tautan untuk ikon panah pada proyek biasa */}
                      <a 
                        href={project.liveUrl !== "#" ? project.liveUrl : undefined} 
                        target={project.liveUrl !== "#" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <ArrowUpRight
                          size={16}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                        />
                      </a>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
