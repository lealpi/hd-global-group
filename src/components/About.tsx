"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Expert Crew" },
  { value: 12, suffix: "", label: "States Served" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-6xl font-black text-primary-container tracking-tighter">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden"
    >
      {/* Company Description */}
      <div className="py-32 px-8 bg-surface-dim">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="uppercase tracking-[0.2em] text-primary-fixed-dim font-bold mb-4 block text-xs">
                Who We Are
              </span>
              <h2
                id="about-heading"
                className="text-5xl md:text-6xl font-black text-on-surface text-monolith uppercase mb-6"
              >
                Built on{" "}
                <span className="text-primary-container">Experience</span>
              </h2>
              <div className="amber-bar mb-10" aria-hidden="true" />

              {/* Drilling image */}
              <div className="rounded-2xl overflow-hidden relative group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4iXt2bCyBV0756efzZSAfddJlobrDP8jtoDZC_HWQf039DqMa7a3DJ6Pxkxb98LKcZnw-_WUXcV2GxjzO37nrNyxIkPvdVQy7j5oBS-QswDDbJ-NHxNx7dnbkcYUFwyzf4vMbf26R3Yk_KcexIyMo9iR8KszMEqHhbzIIzCiWzsCUwAgr1o_3xiP4tzaVGPOIDnNbNfFh4yDyQZjqLEi_orLIcUwkf49PvYzH4yeOMAe_51_QepmoxYA1iSs-b09OJgNb4u-umLv5"
                  alt="Active HDD drilling operation at a directional drilling entry point on a construction site"
                  className="w-full h-full object-cover aspect-[4/3] brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={700}
                  height={525}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/60 to-transparent" />
                <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center"
            >
              <div className="space-y-6">
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  HD Global Group is a full-service underground construction
                  company built on decades of combined field experience. We
                  specialize in horizontal directional drilling (HDD), fiber
                  optic installation, project management, and underground
                  utility support for general contractors, utility companies,
                  and telecom providers across the United States.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Our team understands the complexities of subsurface work —
                  from navigating existing utilities to adapting to challenging
                  soil conditions and tight project timelines. Every project we
                  take on is backed by experienced field crews, modern
                  equipment, and a management team committed to keeping your
                  work on track.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Whether you need trenchless drilling for a new fiber optic
                  network, HDD services for a pipeline crossing, or a dedicated
                  field supervision team to manage a multi-phase underground
                  utility project, HD Global Group has the expertise and
                  capacity to deliver results that meet your standards.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Founded with a mission to raise the bar in underground
                  construction, we have grown from a regional drilling crew
                  into a nationwide operation serving some of the largest
                  general contractors and utility providers in the industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className="py-24 bg-surface-container-lowest border-y border-outline-variant/10"
      >
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-2"
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
                <div className="uppercase tracking-widest text-on-surface-variant text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
