"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Toggle from "./Toggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto flex justify-between items-center px-6 h-16">
                {/* Logo or Brand */}
                <motion.div
                    className="text-xl font-bold text-foreground"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link href="/" onClick={() => isOpen && toggleMenu()}>
                        David Zhan
                    </Link>
                </motion.div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="text-foreground lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </motion.svg>
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <motion.div
                            key={item.href}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href={item.href}
                                className="text-foreground/80 hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                    <div className="pl-4">
                        <Toggle />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu with Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden border-t border-foreground/10"
                    >
                        <div className="bg-background/80 backdrop-blur-md">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.href}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-6 py-3"
                                >
                                    <Link
                                        href={item.href}
                                        className="block text-foreground/80 hover:text-foreground transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="px-6 py-3">
                                <Toggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
