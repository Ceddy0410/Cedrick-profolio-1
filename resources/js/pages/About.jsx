import { Head } from '@inertiajs/react';
import { Download, GraduationCap, Trophy } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';
import { experience, skillGroups } from '../data/portfolio';

export default function About() {
    return (
        <SiteLayout>
            <Head title="About" />
            <section className="page-hero section-pad page-hero--about">
                <div><p className="eyebrow"><span />About me</p><h1>A developer’s mindset with a tester’s eye.</h1><p>I care about what happens after a page looks finished: whether it works, whether people understand it, and whether the business can keep improving it.</p></div>
                <img src="/images/cedrick-opina-profile-v1.png" alt="Portrait of Cedrick Opina" />
            </section>
            <section className="story-grid section-pad">
                <div className="section-heading"><p className="kicker">My approach</p><h2>Build carefully. Test honestly. Improve what matters.</h2></div>
                <div className="story-copy"><p>I’m Cedrick Opina, a BSIT graduate based in Quezon City. My work sits at the intersection of website development, quality assurance, and search improvement.</p><p>That combination helps me see a digital product from more than one angle. I can build and maintain the experience, test the paths users depend on, report what is going wrong clearly, and support practical improvements.</p><p>Today, I test finance mobile and web experiences at HeyPenny while working full-time across website development, QA, SEO, and client support at GodesQ.</p><a className="button button--primary" href="/resume" download>Download résumé <Download size={18} /></a></div>
            </section>
            <section className="experience-section section-pad section-surface"><div className="section-heading"><p className="kicker">Experience</p><h2>Where I’m applying the work.</h2></div><div className="timeline">{experience.map((item) => <article key={item.company}><p>{item.period}</p><div><h3>{item.company}</h3><strong>{item.role}</strong><span>{item.description}</span></div></article>)}</div></section>
            <section className="credentials-grid section-pad">
                <article><GraduationCap /><p className="kicker">Education</p><h3>Bachelor of Science in Information Technology</h3><span>STI College Fairview · 2021–2025</span></article>
                <article><Trophy /><p className="kicker">Recognition</p><h3>Programmer of the Year</h3><span>STI · 2024</span><h3>Best Thesis</h3><span>Neko Food House · 2024</span></article>
            </section>
            <section className="skills-section section-pad"><div className="section-heading"><p className="kicker">Skills and tools</p><h2>A practical toolkit for building quality.</h2></div><div className="skills-list">{skillGroups.map(([group, list]) => <article key={group}><h3>{group}</h3><p>{list}</p></article>)}</div></section>
        </SiteLayout>
    );
}
