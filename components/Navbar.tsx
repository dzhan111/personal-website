"use client"
import Link from 'next/link';
import Toggle from './Toggle';

const Navbar = () => {
    return (
        <nav className="bg-primary-foreground text-primary py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo or Brand */}
                <div className="text-xl font-bold justify-start">
                    <Link href="/">
                        David Zhan
                    </Link>
                </div>
                <div className='flex justify-center'>
                    {/* Navigation Links */}
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
                            <Link href="/projects" className="hover:text-secondary transition">
                                Other
                            </Link>
                        </li>
                    
                    </ul>
                    {/* Theme Toggle Button */}
                    <div className='pl-4'>
                        {/* Import your Toggle component here */}
                        <Toggle />
                    </div>
                </div>

                
            </div>
        </nav>
    );
};

export default Navbar;
