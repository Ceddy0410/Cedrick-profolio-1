import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/portfolio';

const navigation = [
    ['Home', '/'],
    ['About', '/about'],
    ['Work', '/projects'],
    ['Contact', '/contact'],
];

export default function SiteLayout({ children }) {
    const { url } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);
    const active = (href) => href === '/' ? url === '/' : url.startsWith(href);

    useEffect(() => {
        setMenuOpen(false);
    }, [url]);

    useEffect(() => {
        if (!menuOpen) return undefined;

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };

        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [menuOpen]);

    return (
        <div className="site-shell">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <aside className="side-rail" aria-label="Primary navigation">
                <Link className="monogram" href="/" aria-label="Cedrick Opina home">CO<span>.</span></Link>
                <nav className="rail-nav">
                    {navigation.map(([label, href], index) => (
                        <Link key={href} href={href} className={active(href) ? 'is-active' : ''} aria-current={active(href) ? 'page' : undefined}>
                            <span>0{index + 1}</span>{label}
                        </Link>
                    ))}
                </nav>
                <div className="rail-bottom">
                    <div className="availability"><span />Available for opportunities</div>
                    <ThemeToggle />
                </div>
            </aside>

            <header className="mobile-header">
                <Link className="monogram" href="/" aria-label="Cedrick Opina home">CO<span>.</span></Link>
                <div className="mobile-actions">
                    <ThemeToggle />
                    <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
                        <span className="sr-only">Toggle navigation</span>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {menuOpen && (
                    <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
                        {navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={active(href) ? 'is-active' : ''}>{label}</Link>)}
                    </nav>
                )}
            </header>

            <div className="page-column">
                <main id="main-content">{children}</main>
                <footer className="site-footer">
                    <div><span className="footer-mark">CO.</span><p>Built carefully. Tested thoroughly.<br />Improved continuously.</p></div>
                    <div className="footer-links">
                        <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
                        <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={14} /></a>
                    </div>
                    <p className="copyright">© {new Date().getFullYear()} Cedrick Opina</p>
                </footer>
            </div>
        </div>
    );
}
