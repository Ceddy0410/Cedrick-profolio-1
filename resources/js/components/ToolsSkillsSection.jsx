import {
    siAndroidstudio,
    siElementor,
    siFlutter,
    siGooglegemini,
    siJavascript,
    siLaravel,
    siPhp,
    siReact,
    siSemrush,
    siWoocommerce,
    siWordpress,
} from 'simple-icons';
import { useEffect, useRef, useState } from 'react';

const buildTools = [
    { name: 'WordPress', icon: siWordpress },
    { name: 'Elementor', icon: siElementor, color: '#fffdf7' },
    { name: 'Laravel', icon: siLaravel },
    { name: 'React', icon: siReact },
    { name: 'JavaScript', icon: siJavascript },
    { name: 'PHP', icon: siPhp },
    { name: 'Flutter', icon: siFlutter },
    { name: 'WooCommerce', icon: siWoocommerce },
];

const optimizationTools = [
    { name: 'Maestro', image: 'https://maestro.dev/favicon.svg' },
    { name: 'Playwright', image: 'https://playwright.dev/img/playwright-logo.svg' },
    { name: 'Android Studio', icon: siAndroidstudio },
    { name: 'Semrush', icon: siSemrush },
    { name: 'Google Gemini', icon: siGooglegemini },
    { name: 'OpenAI Codex', image: 'https://cdn.jsdelivr.net/npm/simple-icons@15.15.0/icons/openai.svg', monochrome: true },
];

function BrandMark({ tool }) {
    if (tool.image) {
        return (
            <img
                className={`tool-logo__image${tool.monochrome ? ' tool-logo__image--monochrome' : ''}`}
                src={tool.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                draggable="false"
            />
        );
    }

    return (
        <svg
            className="tool-logo__svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d={tool.icon.path} />
        </svg>
    );
}

function ToolList({ tools, duplicate = false }) {
    return (
        <ul className={`tool-logo-list${duplicate ? ' tool-logo-list--duplicate' : ''}`} aria-hidden={duplicate || undefined}>
            {tools.map((tool) => (
                <li
                    className="tool-logo"
                    key={`${tool.name}-${duplicate ? 'duplicate' : 'primary'}`}
                    tabIndex={duplicate ? -1 : 0}
                    aria-label={duplicate ? undefined : `${tool.name} logo`}
                    style={{ '--tool-color': tool.color || `#${tool.icon?.hex}` }}
                >
                    <span className="tool-logo__mark"><BrandMark tool={tool} /></span>
                    <span className="tool-logo__name" aria-hidden="true">{tool.name}</span>
                </li>
            ))}
        </ul>
    );
}

function LogoTrack({ label, tools, direction }) {
    const viewportRef = useRef(null);
    const dragRef = useRef({ active: false, pointerId: null, x: 0 });
    const resumeTimerRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [focusWithin, setFocusWithin] = useState(false);
    const [settling, setSettling] = useState(false);
    const paused = dragging || focusWithin || settling;

    const getMarqueeAnimation = () => {
        const viewport = viewportRef.current;
        return viewport?.querySelector('.logo-track__content')?.getAnimations()[0];
    };

    const pauseAfterInteraction = () => {
        window.clearTimeout(resumeTimerRef.current);
        setSettling(true);
        resumeTimerRef.current = window.setTimeout(() => {
            const content = viewportRef.current?.querySelector('.logo-track__content');
            if (content) content.style.animationPlayState = '';
            setSettling(false);
        }, 450);
    };

    useEffect(() => () => window.clearTimeout(resumeTimerRef.current), []);

    const handlePointerDown = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;

        const viewport = viewportRef.current;
        const content = viewport.querySelector('.logo-track__content');
        dragRef.current = { active: true, pointerId: event.pointerId, x: event.clientX };
        viewport.setPointerCapture(event.pointerId);
        if (content) content.style.animationPlayState = 'paused';
        window.clearTimeout(resumeTimerRef.current);
        setSettling(false);
        setDragging(true);
    };

    const handlePointerMove = (event) => {
        if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) return;

        const viewport = viewportRef.current;
        const distance = event.clientX - dragRef.current.x;
        const content = viewport.querySelector('.logo-track__content');
        const animation = getMarqueeAnimation();
        const loopWidth = content?.scrollWidth / 3;
        const duration = Number(animation?.effect?.getTiming().duration);

        if (animation && loopWidth && duration) {
            const directionMultiplier = direction === 'reverse' ? -1 : 1;
            const timeShift = (distance / loopWidth) * duration * directionMultiplier;
            const currentTime = Number(animation.currentTime) || 0;
            animation.currentTime = ((currentTime + timeShift) % duration + duration) % duration;
        }

        dragRef.current.x = event.clientX;
    };

    const endPointerInteraction = (event) => {
        if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) return;

        const viewport = viewportRef.current;
        if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
        dragRef.current = { active: false, pointerId: null, x: 0 };
        setDragging(false);
        pauseAfterInteraction();
    };

    const handleFocus = (event) => {
        setFocusWithin(true);
    };

    const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusWithin(false);
            pauseAfterInteraction();
        }
    };

    return (
        <div className={`logo-track logo-track--${direction}${paused ? ' is-paused' : ''}`}>
            <p className="logo-track__label">{label}</p>
            <div
                className={`logo-track__viewport${dragging ? ' is-dragging' : ''}`}
                ref={viewportRef}
                role="region"
                aria-label={`${label} tools. Drag or swipe to explore.`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endPointerInteraction}
                onPointerCancel={endPointerInteraction}
            >
                <div className="logo-track__content">
                    <ToolList tools={tools} />
                    <ToolList tools={tools} duplicate />
                    <ToolList tools={tools} duplicate />
                </div>
            </div>
        </div>
    );
}

export default function ToolsSkillsSection() {
    return (
        <section className="tools-section section-pad" aria-labelledby="tools-heading">
            <div className="tools-section__intro">
                <p className="kicker">Tools &amp; Skills</p>
                <h2 id="tools-heading">The tools behind the work.</h2>
                <p>A practical toolkit for building, testing, and improving digital experiences.</p>
            </div>

            <div className="tools-marquee">
                <LogoTrack label="Build & Develop" tools={buildTools} direction="reverse" />
                <LogoTrack label="Test & Optimize" tools={optimizationTools} direction="forward" />
            </div>

            <p className="tools-section__instruction">Auto-scroll · Drag to explore</p>
        </section>
    );
}
