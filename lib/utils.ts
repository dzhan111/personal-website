import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const applySavedTheme = (): boolean => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    return true; // Indicates that dark mode is enabled
  } else {
    document.documentElement.classList.remove("dark");
    return false; // Indicates that dark mode is disabled
  }
};

export const toggleTheme = (): boolean => {
  document.documentElement.classList.toggle("dark");
  const isDarkMode = document.documentElement.classList.contains("dark");
  const newTheme = isDarkMode ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  return isDarkMode; // Returns the updated theme state
};
