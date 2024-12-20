"use client";

import { useTheme } from 'next-themes'; // Import useTheme hook
import { useEffect, useState } from 'react';
import { FaMoon, FaRegMoon } from 'react-icons/fa';

const Toggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false); // To prevent mismatch on server-side render

    // Ensure this only runs on the client (to avoid SSR mismatch)
    useEffect(() => setMounted(true), []);

    const handleToggleTheme = () => {
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    if (!mounted) return null; // Wait until the app has mounted before displaying the toggle

    return (
        <button 
            onClick={handleToggleTheme} 
            className="px-6 py-3 rounded-md bg-primary-foreground border-card-foreground text-primary font-medium hover:bg-opacity-80 transition"
        >
            {resolvedTheme === 'dark' ? <FaRegMoon /> : <FaMoon />}
        </button>
    );
}

export default Toggle;
