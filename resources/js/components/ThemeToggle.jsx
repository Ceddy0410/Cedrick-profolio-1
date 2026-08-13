import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme || 'light');
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('cedrick-theme', next);
        setTheme(next);
    };

    return (
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <Sun aria-hidden="true" size={16} />
            <span className="theme-toggle__track"><span className="theme-toggle__dot" /></span>
            <Moon aria-hidden="true" size={16} />
        </button>
    );
}
