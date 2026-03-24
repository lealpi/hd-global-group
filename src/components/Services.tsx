"use client";

import { motion } from "framer-motion";

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
            className="md:col-span-8 bg-surface-container-low rounded-xl p-10 relative overflow-hidden group border border-outline-variant/10 hover:bg-surface-container-high transition-all"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4iXt2bCyBV0756efzZSAfddJlobrDP8jtoDZC_HWQf039DqMa7a3DJ6Pxkxb98LKcZnw-_WUXcV2GxjzO37nrNyxIkPvdVQy7j5oBS-QswDDbJ-NHxNx7dnbkcYUFwyzf4vMbf26R3Yk_KcexIyMo9iR8KszMEqHhbzIIzCiWzsCUwAgr1o_3xiP4tzaVGPOIDnNbNfFh4yDyQZjqLEi_orLIcUwkf49PvYzH4yeOMAe_51_QepmoxYA1iSs-b09OJgNb4u-umLv5"
              alt="Directional drilling entry point on an active HDD construction site"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              width={800}
              height={400}
            />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-on-surface">
                  Horizontal Directional Drilling
                </h3>
                <span
                  className="material-symbols-outlined text-primary-container text-6xl opacity-40 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  precision_manufacturing
                </span>
              </div>
              <p className="text-on-surface-variant text-lg max-w-lg mb-8">
                We provide efficient and precise HDD drilling solutions for
                underground utility installation with minimal surface disruption
                and maximum field performance. Our trenchless drilling capabilities
                handle a wide range of bore sizes and soil conditions across the
                United States.
              </p>
              <ul className="space-y-3 text-sm text-on-surface-variant/80 uppercase tracking-widest font-bold">
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
            className="md:col-span-4 bg-surface-container-highest/40 backdrop-blur-xl rounded-xl p-10 border border-outline-variant/20 group hover:border-primary-container/30 transition-all relative overflow-hidden"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB8qCx9F2kGx-Mk67_yztahqC2BTJuseTpDHdAWTQFAkUaul_oe6ytv_-nGVtH3ybfzcLuWyZgeF7Yw0LmcPDTxtvzXCl8BgTlBHhqdMhnSK2xtJg8MKYxa6QR7fY1SYnoe1DEJ3Wkp_9VdG0ZKxP1y7YKQZMO-Rl91u64mOf01Qa1ewrZuFSN4Q-zO6hrNP1Etg4arb2XmesNsnIf6-a_IIv4Cykd3HBNPb7yY38qAZt0H_rsAKbR20G8iaMp91ZzjQNKnH0a3owy"
              alt="Fiber optic cables in underground conduit installation"
              className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-10 grayscale group-hover:opacity-30 transition-all"
              loading="lazy"
              width={400}
              height={600}
            />
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-primary-container text-4xl mb-6 block"
                aria-hidden="true"
              >
                settings_input_component
              </span>
              <h3 className="text-2xl font-bold text-on-surface mb-4">
                Fiber Optic Installation
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
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
            className="md:col-span-4 bg-surface-container-low rounded-xl p-10 border border-outline-variant/10 group hover:bg-surface-container-high transition-all relative overflow-hidden"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx5k4_4xvrDLWbXvmgEIRPHdAX_Vi7w0LIe9Y7S9fdWpK3FcqxbuYpZPLo8YqLrUIMGN2ZOAM7KTo9QO6LwCL7AusDI9zcFTwHlX1Iw7Mpz556TMep65i25Z0yDFcmjZT5Ld9ccUBT0PcH6KvQ88idQqwdejkuKzATh1RT_COBtCWE6j48uhk_GfpCEFYLrPD7eWwrU5UZ50QNYCuff-O-jNYVkZYJNtedLNRZJN_QyIqbWNuolVva6tUqUI0wbtyLI5EggazkqctU"
              alt="Blueprints and technical documents for underground construction project management"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-10 grayscale group-hover:opacity-20 transition-all"
              loading="lazy"
              width={400}
              height={600}
            />
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-primary-container text-4xl mb-6 block"
                aria-hidden="true"
              >
                architecture
              </span>
              <h3 className="text-2xl font-bold text-on-surface mb-4">
                Project Management
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Turnkey oversight from feasibility studies and planning through
                daily field execution, coordination, and final site restoration
                with complete documentation.
              </p>
            </div>
          </motion.div>

          {/* Utility — 8 cols with bg image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-8 bg-surface-container-highest rounded-xl p-10 relative overflow-hidden group border border-outline-variant/10"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwDxGrwcvj5tkoae8hMP-uKhHaDgna1NbNB-KozEwlhbhXraal7TgrV1QXWuoyjA9b6Ol_-jVroSZPCFB1-EWhdH2n6MmY5iU2VdJ6UDVGRPLzEkkLFvZp7VvPcYq__BUtMJq8uPvMDCUIF6xth3CKGjzVKHmm6RfCASjHQ2k8Xkhva7Ddm4FCCBt-oLCzbS-uIz4Fq9h4WdjNSF7Vr3vdjIAYtWC9rOz-lha_WoOCufivV5JgjgSnQZ7Cp1ShpzV8MQvvjCxVvJKJ"
              alt="Underground utility infrastructure work with conduits and pipelines"
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity brightness-75 group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-1000 opacity-40"
              loading="lazy"
              width={800}
              height={400}
            />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-on-surface mb-4">
                Underground Utility Support
              </h3>
              <p className="text-on-surface-variant text-lg max-w-lg">
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
