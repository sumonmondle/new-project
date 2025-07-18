"use client";
import { motion } from "framer-motion";

export default function AnimatedSection({ id, children }) {
  return (
    <motion.section
      id={id} // <-- this is important for scroll targeting
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black"
    >
      {children}
    </motion.section>
  );
}
