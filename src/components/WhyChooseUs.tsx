"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    icon: "shield",
    title: "Safety-First Culture & Compliance",
    description:
      "Rigorous safety protocols, daily briefings, and full OSHA regulatory compliance on every underground construction jobsite.",
  },
  {
    icon: "engineering",
    title: "Experienced Field Crews",
    description:
      "Seasoned professionals who understand the demands of HDD drilling, fiber optic installation, and underground utility work.",
  },
  {
    icon: "schedule",
    title: "On-Time, On-Budget Delivery",
    description:
      "We deliver underground construction projects within scope and schedule — no surprises, no excuses, no wasted time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className="py-32 px-8 bg-surface-container-lowest"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="uppercase tracking-[0.2em] text-primary-fixed-dim font-bold mb-4 block text-xs">
                Why Choose Us
              </span>
              <h2
                id="why-heading"
                className="text-5xl md:text-6xl font-black text-on-surface text-monolith uppercase mb-6"
              >
                We don&apos;t just dig —{" "}
                <span className="text-primary-container">we deliver</span>
              </h2>
              <div className="amber-bar" aria-hidden="true" />
              <p className="text-on-surface-variant text-lg leading-relaxed mt-8 mb-6">
                We set ourselves apart through relentless commitment to quality,
                safety, and execution. When you partner with HD Global Group for
                your underground construction needs, you get a team that treats
                your project like their own — whether it is a small-scale
                residential fiber optic installation or a multi-state
                underground utility infrastructure rollout.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                From horizontal directional drilling operations to fiber optic
                infrastructure builds, our crews deliver consistent results
                across every project type and jobsite condition. Our field
                supervisors bring decades of combined experience in trenchless
                construction, utility locating, and project coordination.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                General contractors and utility companies choose HD Global Group
                because we combine the responsiveness of a local crew with the
                capacity and professionalism of a national underground
                construction firm. Every project benefits from proactive
                communication, strict safety compliance, and crews that show up
                ready to produce.
              </p>
            </motion.div>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center group-hover:bg-primary-container/20 transition-colors duration-300">
                    <span
                      className="material-symbols-outlined text-primary-container text-2xl"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-on-surface font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Image with testimonial overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-surface-container-highest rounded-2xl overflow-hidden relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQp7YLptA3ON_kLWY8HvwCX2685eFFSz5azYNXeKrHUgJ-0EQTcWBrlOIpHefVAd4Owuc3MvlRIgdPfJDR6-GlDq3tgu3qsjYBPG66fhcGpI3_hdwJ0g5KtRoRl5_LGPWbaLo4szj7Aei13_uDPYjhZOcnk-jjM2zXFn1GdN1wyJIlcj4GyFZ_nwBGV8mb1lilmSmahuGf2aw44LyvAWxnwA3x0Q8Cm927fAzFRP49JlvHIpL1TQh-AI7AgoYyD0O3S9JTn5yp_2VE"
                alt="Construction worker in high-visibility gear operating heavy machinery on a drill site"
                className="w-full h-full object-cover contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent" />
            </div>

            {/* Floating testimonial card */}
            <div className="absolute -bottom-10 -left-10 bg-surface-variant/80 backdrop-blur-2xl p-8 rounded-xl border border-outline-variant/30 max-w-xs shadow-2xl">
              <p className="text-on-surface italic font-medium leading-relaxed">
                &ldquo;HD Global&apos;s precision in HDD is the benchmark for
                the industry. They handle complexity with silence and
                speed.&rdquo;
              </p>
              <div className="mt-4 font-bold text-primary-container text-sm uppercase tracking-widest">
                — Chief Engineer, Metro Utility
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
