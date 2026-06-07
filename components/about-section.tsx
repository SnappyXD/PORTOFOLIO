"use client";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";
import { Code2, Palette, Database, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  { icon: Palette, label: "Design", items: ["UI/UX", "Figma", "Illustrator"] },
  { icon: Database, label: "Backend", items: ["Node.js", "REST API", "SQL"] },
  {
    icon: Globe,
    label: "Web Dev",
    items: ["Responsive", "SEO", "Performance"],
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="relative py-32 overflow-hidden">
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
              Tentang Saya
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-4 text-balance"
            >
              Membangun Pengalaman Digital yang{" "}
              <span className="text-gradient">Bermakna</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Saya adalah mahasiswa Sistem Informasi yang memiliki
                ketertarikan besar pada perpaduan antara teknologi dan estetika
                visual. Fokus utama saya berada di ranah{" "}
                <span className="text-primary font-semibold">
                  Frontend Web Development
                </span>{" "}
                dan{" "}
                <span className="text-primary font-semibold">
                  Desain Grafis
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Berbekal pengalaman dalam merancang antarmuka website seperti
                landing page properti dan portal edukasi serta membuat elemen
                visual yang interaktif menggunakan HTML, CSS, dan JavaScript,
                saya selalu berusaha menerjemahkan ide kreatif menjadi produk
                digital yang tidak hanya fungsional, tetapi juga nyaman dan
                menarik bagi pengguna.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: "10+", label: "Proyek" },
                  { value: "4+", label: "Tahun Exp" },
                  { value: "100%", label: "Dedikasi" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card rounded-2xl p-6 group cursor-pointer hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {skill.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
