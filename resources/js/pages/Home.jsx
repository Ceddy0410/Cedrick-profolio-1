import { Head, Link } from '@inertiajs/react';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';
import { capabilities, experience, profile, projects } from '../data/portfolio';

const capabilityIcons = {
    Build: Braces,
    Test: ShieldCheck,
    Grow: TrendingUp,
};

export default function Home() {
    return (
        <SiteLayout>
            <Head title="Website Developer & QA Specialist" />
            <section className="hero section-pad">
                <div className="hero-copy">
                    <p className="eyebrow"><span />Website Developer + QA Specialist</p>
                    <h1>I build digital experiences—<em>then make sure they work.</em></h1>
                    <p className="hero-intro">I combine website development, quality assurance, automation, UI/UX testing, and SEO to create reliable experiences for users and useful results for businesses.</p>
                    <div className="hero-actions">
                        <Link className="button button--primary" href="/projects">View my work <ArrowRight size={18} /></Link>
                        <Link className="text-link" href="/contact">Let’s work together <ArrowUpRight size={17} /></Link>
                    </div>
                    <a className="scroll-cue" href="#capabilities"><ArrowDown size={17} /> Explore what I do</a>
                </div>
                <div className="hero-visual" aria-label="Cedrick Opina professional profile">
                    <div className="portrait-frame">
                        <span className="portrait-code">BUILD / TEST / GROW</span>
                        <img src="/images/cedrick-opina-profile-v1.png" alt="Cedrick Opina in professional attire" />
                        <div className="portrait-stamp"><CheckCircle2 size={17} /> Quality checked</div>
                    </div>
                    <div className="hero-note"><span>Based in</span><strong>{profile.location}</strong><small>Working across web, mobile, and search</small></div>
                </div>
            </section>

            <section className="capability-section section-pad" id="capabilities">
                <div className="section-heading"><p className="kicker">What I bring</p><h2>One workflow. Three ways to make a product better.</h2></div>
                <div className="capability-grid">
                    {capabilities.map((item) => {
                        const Icon = capabilityIcons[item.label];

                        return (
                            <article className={`capability-card capability-card--${item.label.toLowerCase()}`} key={item.label}>
                                <div className="capability-card__top">
                                    <span className="capability-card__number">{item.number}</span>
                                    <span className="capability-card__icon"><Icon size={20} strokeWidth={1.8} /></span>
                                </div>
                                <div className="capability-card__label"><span />{item.label}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="capability-card__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="work-section section-pad">
                <div className="section-heading section-heading--row"><div><p className="kicker">Selected work</p><h2>Projects shaped by curiosity and care.</h2></div><Link className="text-link" href="/projects">See all projects <ArrowRight size={17} /></Link></div>
                <div className="project-stack">
                    {projects.map((project, index) => (
                        <Link className={`project-card project-card--${project.accent}`} href={`/projects/${project.slug}`} key={project.slug}>
                            <div className="project-index">0{index + 1}</div>
                            <div className="project-copy"><p>{project.type}</p><h3>{project.title}</h3><span>{project.summary}</span><div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
                            <div className="project-status">{project.status}<ArrowUpRight size={20} /></div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="experience-section section-pad">
                <div className="section-heading"><p className="kicker">Current experience</p><h2>Building and testing in active teams.</h2></div>
                <div className="timeline">
                    {experience.map((item) => <article key={item.company}><p>{item.period}</p><div><h3>{item.company}</h3><strong>{item.role}</strong><span>{item.description}</span></div></article>)}
                </div>
                <Link className="button button--outline" href="/about">More about my journey <ArrowRight size={17} /></Link>
            </section>

            <section className="closing-cta section-pad">
                <p className="kicker">Have something in mind?</p><h2>Let’s turn the next idea into something reliable.</h2>
                <Link className="button button--cream" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link>
            </section>
        </SiteLayout>
    );
}
