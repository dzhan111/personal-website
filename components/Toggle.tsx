import { applySavedTheme, toggleTheme } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FaMoon, FaRegMoon } from 'react-icons/fa';

const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Apply the saved theme on initial load
        const darkModeEnabled = applySavedTheme();
        setIsDarkMode(darkModeEnabled);
    }, []);

    const handleToggleTheme = () => {
        const newThemeState = toggleTheme();
        setIsDarkMode(newThemeState);
    };
    return (
        <button
            onClick={handleToggleTheme}
            className="px-6  py-3 rounded-md bg-primary-foreground border-card-foreground text-primary font-medium hover:bg-opacity-80 transition"
        >
            {isDarkMode ? <FaRegMoon />
                : <FaMoon />
            }
        </button>
    )
}

export default Toggle