"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-32 px-8 bg-surface-dim"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            id="services-heading"
            className="text-5xl font-extrabold text-on-surface uppercase tracking-tighter mb-4"
          >
            Core Competencies
          </h2>
          <div className="amber-bar" aria-hidden="true" />
          <p className="text-on-surface-variant text-lg leading-relaxed mt-6 max-w-2xl">
            HD Global Group offers a comprehensive range of underground
            construction services designed to meet the demands of modern
            infrastructure projects. From trenchless HDD drilling to full-scale
            fiber optic deployment, our experienced crews deliver reliable
            results on every jobsite across the United States. Our capabilities
            span residential subdivisions, commercial developments, municipal
            utility upgrades, and large-scale interstate infrastructure programs
            requiring coordination across multiple jurisdictions and terrain types.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* HDD — 8 cols */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 rounded-xl relative overflow-hidden group border border-outline-variant/10 h-[420px]"
          >
            <Image
              src="/images/service-hdd.jpg"
              alt="Vermeer D36x50 Navigator horizontal directional drilling machine on tracked chassis at underground utility construction site"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-white">
                  Horizontal Directional Drilling
                </h3>
                <span
                  className="material-symbols-outlined text-primary-container text-6xl opacity-60 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  precision_manufacturing
                </span>
              </div>
              <p className="text-white/80 text-lg max-w-lg mb-6">
                We provide efficient and precise HDD drilling solutions for
                underground utility installation with minimal surface disruption
                and maximum field performance. Our trenchless drilling capabilities
                handle a wide range of bore sizes and soil conditions across the
                United States.
              </p>
              <ul className="space-y-2 text-sm text-white/60 uppercase tracking-widest font-bold">
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-primary-container rounded-full"
                    aria-hidden="true"
                  />
                  Rock &amp; Dirt Boring
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-primary-container rounded-full"
                    aria-hidden="true"
                  />
                  Environmental Protection
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-primary-container rounded-full"
                    aria-hidden="true"
                  />
                  Precision Guidance Systems
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Fiber — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 rounded-xl relative overflow-hidden group border border-outline-variant/20 h-[420px]"
          >
            <Image
              src="/images/service-fiber.jpg"
              alt="Fiber optic cable installation for underground telecommunications infrastructure"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
              <span
                className="material-symbols-outlined text-primary-container text-4xl mb-4 block"
                aria-hidden="true"
              >
                settings_input_component
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Fiber Optic Installation
              </h3>
              <p className="text-white/70 leading-relaxed">
                From conduit placement to fiber infrastructure support, we execute
                underground fiber optic projects with strong production standards
                and dependable field coordination for both long-haul and last-mile
                deployments.
              </p>
            </div>
          </motion.div>

          {/* Project Management — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 rounded-xl relative overflow-hidden group border border-outline-variant/10 h-[380px]"
          >
            <Image
              src="/images/service-management.jpg"
              alt="Construction project manager supervising field operations at HD Global Group job site"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
              <span
                className="material-symbols-outlined text-primary-container text-4xl mb-4 block"
                aria-hidden="true"
              >
                architecture
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Project Management
              </h3>
              <p className="text-white/70 leading-relaxed">
                Turnkey oversight from feasibility studies and planning through
                daily field execution, coordination, and final site restoration
                with complete documentation.
              </p>
            </div>
          </motion.div>

          {/* Utility — 8 cols */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-8 rounded-xl relative overflow-hidden group border border-outline-variant/10 h-[380px]"
          >
            <Image
              src="/images/service-utility.jpg"
              alt="Underground utility pipe installation in excavated trench for infrastructure project"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-4">
                Underground Utility Support
              </h3>
              <p className="text-white/80 text-lg max-w-lg">
                Comprehensive gas, electric, water, and telecom utility
                infrastructure maintenance and new-build installations. As a
                trusted underground utility contractor, we handle complex
                projects across diverse terrains nationwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
