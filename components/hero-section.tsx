"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  ArrowDown,
  Code2,
  Database,
  Palette,
} from "lucide-react";

const roles = [
  "Software Developer",
  "Data Analyst",
  "Tech Enthusiast",
  "UI Designer",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRole];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        } else if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Halo, Saya{" "}
              <span className="text-gradient">Mahardika Ardiansyah.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Mahasiswa Sistem Informasi &{" "}
                <span className="text-primary font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed"
            >
              Fokus pada pengembangan aplikasi desktop, perancangan website dan
              design grafis. Menciptakan pengalaman digital yang menarik dan
              fungsional.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              {[
                {
                  icon: Github,
                  href: "https://github.com/SnappyXD",
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/snapdxkz",
                  label: "Instagram",
                },
                {
                  icon: Mail,
                  href: "mailto:mahardikaardiansyah90@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#proyek"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
              >
                Lihat Karya Saya
                <ArrowDown size={18} className="animate-bounce" />
              </motion.a>
              <motion.a
                href="#kontak"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-foreground hover:border-primary/50 transition-all"
              >
                Hubungi Saya
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Interactive cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-125">
              {/* Floating cards */}
              {[
                {
                  icon: Code2,
                  label: "Frontend",
                  color: "from-cyan-500/20 to-blue-500/20",
                  delay: 0,
                },
                {
                  icon: Database,
                  label: "Backend",
                  color: "from-teal-500/20 to-green-500/20",
                  delay: 0.2,
                },
                {
                  icon: Palette,
                  label: "Design",
                  color: "from-purple-500/20 to-pink-500/20",
                  delay: 0.4,
                },
              ].map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + card.delay }}
                  className={`absolute glass-card rounded-2xl p-6 w-48 ${
                    index === 0
                      ? "top-0 right-0"
                      : index === 1
                        ? "top-1/3 left-0"
                        : "bottom-0 right-1/4"
                  }`}
                  style={{
                    animation: `float ${6 + index}s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center mb-3`}
                  >
                    <card.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {card.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Development
                  </p>
                </motion.div>
              ))}

              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-[80px] animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
