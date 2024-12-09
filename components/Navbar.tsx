"use client"
import Link from 'next/link';
import Toggle from './Toggle';

const Navbar = () => {
    return (
        <nav className="bg-primary-foreground text-primary py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo or Brand */}
                <div className="text-xl font-bold">
                    <Link href="/">
                        David Zhan
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
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
                   
                </ul>

                {/* Theme Toggle Button */}
                <div>
                    {/* Import your Toggle component here */}
                    <Toggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
