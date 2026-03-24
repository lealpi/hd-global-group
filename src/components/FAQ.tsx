"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Horizontal Directional Drilling (HDD)?",
    answer:
      "Horizontal directional drilling (HDD) is a trenchless method of installing underground utilities like pipes, conduits, and cables with minimal surface disruption. It\u2019s ideal for crossing roads, rivers, railroads, and environmentally sensitive areas without open-cut excavation. This technique preserves existing landscapes, reduces restoration costs, and allows precise placement of conduits, pipelines, and fiber optic cables beneath the surface. HDD is widely used for water, gas, electric, and telecommunications infrastructure projects.",
  },
  {
    question: "What areas does HD Global Group serve?",
    answer:
      "HD Global Group provides underground construction services across the United States, with active operations in over 12 states including Texas, Florida, Georgia, California, and throughout the Southeast and Midwest regions. Our mobile crews and extensive equipment fleet allow us to deploy rapidly to projects nationwide, supporting general contractors, utility companies, municipalities, and telecom providers wherever the work demands.",
  },
  {
    question: "What types of projects does HD Global Group handle?",
    answer:
      "We specialize in HDD drilling, fiber optic installation, underground utility support, and full project management for infrastructure and telecom contractors. Our experience spans residential fiber-to-the-home builds, municipal utility upgrades, interstate pipeline crossings, water and sewer line installations, and large-scale commercial underground infrastructure projects. We work with both private and public sector clients on projects of all sizes.",
  },
  {
    question: "How can I request a quote from HD Global Group?",
    answer:
      "You can request a free quote by filling out the contact form on our website or calling us directly at (555) 000-0000. Provide your project scope, location, timeline, and any relevant engineering plans or specifications. Our estimating team will review your requirements and respond with a detailed proposal within 24 business hours. There is no cost or obligation for initial project consultations.",
  },
  {
    question: "Is HD Global Group licensed and insured?",
    answer:
      "Yes. HD Global Group is fully licensed, bonded, and insured to perform underground construction services across the United States. We maintain comprehensive general liability and workers\u2019 compensation coverage, ensuring our clients and their projects are fully protected throughout every phase of work.",
  },
  {
    question: "What safety standards does HD Global Group follow?",
    answer:
      "Safety is our top priority on every underground construction jobsite. We follow all OSHA regulations, maintain a rigorous safety training program for every crew member, and conduct daily safety briefings before operations begin. Our safety-first culture includes proactive hazard identification, proper PPE enforcement, equipment inspections, and continuous improvement protocols. This approach has earned us an excellent track record across hundreds of projects with zero tolerance for unsafe practices.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="surface-card rounded-xl overflow-hidden border border-outline-variant/10"
    >
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full flex items-center justify-between p-6 lg:p-8 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dim"
        >
          <span className="text-on-surface font-semibold text-base lg:text-lg pr-4">
            {question}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              add
            </span>
          </motion.span>
        </button>
      </h3>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
          <p className="text-on-surface-variant/70 leading-relaxed text-sm lg:text-base">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-32 px-8 bg-surface-container-lowest"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.2em] text-primary-fixed-dim font-bold mb-4 block text-xs">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="text-5xl font-extrabold text-on-surface uppercase tracking-tighter mb-4"
          >
            Frequently Asked Questions
          </h2>
          <div className="amber-bar mx-auto" aria-hidden="true" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
