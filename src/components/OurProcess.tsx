"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "search",
    title: "Discovery & Planning",
    description:
      "We begin every underground construction project with a thorough assessment of scope, site conditions, and client requirements. Our team reviews engineering plans, identifies potential conflicts with existing utilities, and develops a detailed execution strategy that accounts for safety, efficiency, and regulatory compliance.",
  },
  {
    number: "02",
    icon: "construction",
    title: "Mobilization & Setup",
    description:
      "Once planning is complete, we mobilize our experienced crews and equipment to the jobsite. Our field supervisors coordinate with all stakeholders, establish safety protocols, secure necessary permits, and ensure every clearance is in place before HDD drilling or utility work begins.",
  },
  {
    number: "03",
    icon: "precision_manufacturing",
    title: "Execution & Production",
    description:
      "Our field crews execute the project with precision — whether it involves horizontal directional drilling, fiber optic conduit installation, or underground utility support. Daily production reports, real-time communication, and on-site oversight keep every stakeholder informed and the project on schedule.",
  },
  {
    number: "04",
    icon: "verified",
    title: "Quality Assurance & Handoff",
    description:
      "Before project completion, we conduct thorough quality inspections and compile as-built documentation. Every deliverable is verified against client specifications and industry standards, providing a clean handoff with full project records and sign-off documentation.",
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-32 px-8 bg-surface-container-low relative overflow-hidden"
    >
      {/* Background texture */}
      <Image
        src="/images/texture-dark.jpg"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover opacity-[0.06] grayscale mix-blend-luminosity"
        loading="lazy"
        quality={60}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low via-surface-container-low/95 to-surface-container-low" />

      <div className="container mx-auto relative z-10">
        {/* Two-column header with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[0.2em] text-primary-fixed-dim font-bold mb-4 block text-xs">
              How We Work
            </span>
            <h2
              id="process-heading"
              className="text-5xl font-extrabold text-on-surface uppercase tracking-tighter mb-4"
            >
              Our Process
            </h2>
            <div className="amber-bar" aria-hidden="true" />
            <p className="text-on-surface-variant text-lg leading-relaxed mt-6">
              Every successful underground construction project follows a proven
              workflow. At HD Global Group, our four-phase approach ensures your
              HDD drilling, fiber optic, or utility project is planned
              meticulously, executed safely, and delivered on time with full
              documentation and quality assurance at every stage. This structured
              methodology has been refined over hundreds of completed projects
              and allows us to maintain consistent production rates, minimize
              costly change orders, and keep all stakeholders informed from
              mobilization through final closeout. Whether your project involves
              a single bore or a multi-mile underground infrastructure build,
              our process scales to match the complexity and demands of the work.
            </p>
          </motion.div>

          {/* Process image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden relative group h-[300px] sm:h-[350px] lg:h-full lg:min-h-[350px]">
              <Image
                src="/images/process-site.jpg"
                alt="HD Global Group field worker using Radiodetection F5+ utility locator on active horizontal directional drilling jobsite"
                fill
                className="object-cover brightness-75 contrast-110 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 via-transparent to-surface-container-low/40" />
              <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-primary-container/20 to-transparent z-0"
                  aria-hidden="true"
                />
              )}

              <div className="glass-card rounded-xl p-8 h-full relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary-container text-3xl"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                  <span className="text-4xl font-black text-primary-container/10 tracking-tight">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-3">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
