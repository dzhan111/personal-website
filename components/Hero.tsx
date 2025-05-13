"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-background text-foreground flex items-center justify-center"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            David Zhan
          </h1>
          <h2 className="text-xl sm:text-2xl mb-8 text-foreground/80">
            Computer Science BSE, MSE @ UPenn
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link href="/about">
              <span className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold 
                hover:bg-opacity-90 transition-all inline-block cursor-pointer">
                Learn More
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
