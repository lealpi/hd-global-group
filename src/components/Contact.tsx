"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 px-8 bg-surface-dim"
    >
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.2em] text-primary-fixed-dim font-bold mb-4 block text-xs">
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="text-5xl md:text-6xl font-black text-on-surface text-monolith uppercase mb-6"
          >
            Need a reliable team for your next{" "}
            <span className="text-primary-container">project?</span>
          </h2>
          <div className="amber-bar mx-auto" aria-hidden="true" />
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mt-6">
            Whether you need horizontal directional drilling, fiber optic
            installation, underground utility support, or full project
            management, HD Global Group is ready to deliver. Request a free
            quote for your next underground construction project and our team
            will respond with a detailed proposal within 24 business hours. We
            serve general contractors, utility companies, and telecom providers
            across the United States. From initial feasibility assessments to
            final as-built documentation, our project managers ensure every
            phase of your underground infrastructure build is executed with
            precision, safety, and full regulatory compliance.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto mb-6">
                <span
                  className="material-symbols-outlined text-primary-container text-3xl"
                  aria-hidden="true"
                >
                  check_circle
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">
                Message Sent
              </h3>
              <p className="text-on-surface-variant">
                We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              aria-label="Request a quote"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-on-surface-variant/60 mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-line w-full"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs uppercase tracking-wider text-on-surface-variant/60 mb-2 font-medium"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input-line w-full"
                    placeholder="Acme Construction"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-on-surface-variant/60 mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-line w-full"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-on-surface-variant/60 mb-2 font-medium"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-line w-full"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-on-surface-variant/60 mb-2 font-medium"
                >
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input-line w-full resize-none"
                  placeholder="Tell us about your underground construction project — scope, location, timeline..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-5 rounded-xl text-lg uppercase tracking-tight font-bold flex items-center justify-center gap-3 group"
              >
                Initialize Inquiry
                <span
                  className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
