"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Check } from "lucide-react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    description: "",
  });

  const ref = useRef(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);

    // Reset form after success animation
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        description: "",
      });
    }, 3500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 bg-zinc-950 border-t border-zinc-800/50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-zinc-950 to-zinc-950" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Let's Create Magic
          </h2>
          <p className="text-xl text-zinc-400">
            Tell us about your vision, and we'll craft a strategy to bring it to life.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Success State */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-zinc-950/90 backdrop-blur-sm rounded-2xl"
            >
              {/* Checkmark Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="mb-6"
              >
                <div className="relative w-24 h-24">
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  />
                  <Check className="w-24 h-24 text-white absolute inset-0" />
                </div>
              </motion.div>

              {/* Success Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl text-white text-center font-light"
              >
                Received. We will craft your strategy shortly.
              </motion.p>
            </motion.div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-zinc-900/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-zinc-800/50"
          >
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-zinc-400 mb-3">
                Full Name
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                disabled={isLoading}
                className="bg-black/40 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-white transition-colors"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-zinc-400 mb-3">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                disabled={isLoading}
                className="bg-black/40 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-white transition-colors"
              />
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-zinc-400 mb-3">
                Mobile Number
              </label>
              <Input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                disabled={isLoading}
                className="bg-black/40 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-white transition-colors"
              />
            </motion.div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-zinc-400 mb-3">
                Project Description
              </label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us about your project, goals, and vision..."
                required
                disabled={isLoading}
                rows={5}
                className="bg-black/40 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-white transition-colors resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full py-6 text-lg bg-white text-black hover:bg-zinc-200 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
