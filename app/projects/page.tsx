"use client"
import Projects from "@/components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
    {/* <Hero /> */}
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // Start slightly below with 0 opacity
      animate={{ opacity: 1, y: 0 }}   // Move to normal position with full opacity
      exit={{ opacity: 0, y: -20 }}    // Exit by moving up and fading out
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
    >
      <Projects />
    </motion.div>

    </>
  );
}
