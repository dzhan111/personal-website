"use client"
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";

import { FaRegMoon } from "react-icons/fa";


export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  return (
    <div id="hero" className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-5xl font-bold">Hi, I&apos;m David</h1>
        <p className="text-lg mt-4">
          I&apos;m a software engineer and data enthusiast, passionate about creating solutions that make a difference.
          Welcome to my personal space!
        </p>

        <div className="mt-8 space-y-4 space-x-4">
          <button
            className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-opacity-80 transition"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </button>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="px-6  py-3 rounded-md bg-primary-foreground border-card-foreground text-primary font-medium hover:bg-opacity-80 transition"
          >
            {isDarkMode ? <FaRegMoon />
 : <FaMoon />
}
          </button>
        </div>
      </div>
    </div>
  );
}
