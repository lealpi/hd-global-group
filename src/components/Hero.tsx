"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-container-lowest"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
        <Image
          src="/images/hero-construction.jpg"
          alt="Horizontal directional drilling rig and equipment set up for trenchless underground utility installation at residential construction site"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dim/70 via-surface-dim/50 to-surface-dim/90" />
      </motion.div>

      {/* Grain texture */}
      <div className="grain-texture absolute inset-0" aria-hidden="true" />

      {/* Content — left aligned */}
      <div className="relative z-10 container mx-auto px-8 pt-20">
        <div className="max-w-5xl">
          {/* Overline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase tracking-[0.2em] text-primary-fixed-dim font-bold mb-6 block text-sm"
          >
            Precision Engineering. Unrivaled Infrastructure.
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-[128px] font-black text-on-surface text-monolith mb-8 uppercase"
          >
            BUILDING BELOW THE{" "}
            <span className="text-primary-container">SURFACE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12"
          >
            Reliable underground construction solutions built for performance,
            safety, and execution. Expert HDD drilling, fiber optic
            installation, and utility services — nationwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary px-10 py-5 rounded-xl text-lg uppercase tracking-tight flex items-center gap-3 group"
            >
              Our Services
              <span
                className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost px-10 py-5 rounded-xl text-lg uppercase tracking-tight text-center"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
