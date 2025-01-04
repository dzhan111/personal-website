"use client";
import Link from "next/link";
import { useState } from "react";
import Toggle from "./Toggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary-foreground text-primary py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo or Brand */}
                <div className="text-xl font-bold">
                    <Link href="/">
                        David Zhan
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="text-primary lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex justify-center items-center">
                    <ul className="flex space-x-8 py-2">
                        <li>
                            <Link href="/" className="hover:text-secondary transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-secondary transition">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/soccer" className="hover:text-secondary transition">
                                Soccer
                            </Link>
                        </li>
                    </ul>
                    <div className="pl-4">
                        <Toggle />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="lg:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 bg-primary-foreground text-primary">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-secondary transition"
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="hover:text-secondary transition"
                                onClick={toggleMenu}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/other"
                                className="hover:text-secondary transition"
                                onClick={toggleMenu}
                            >
                                Other
                            </Link>
                        </li>
                        <div className="pt-4">
                            <Toggle />
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
