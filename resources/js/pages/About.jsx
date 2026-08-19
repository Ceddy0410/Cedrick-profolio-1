import { Head } from '@inertiajs/react';
import { Award, BookOpen, Download, ExternalLink, GraduationCap, Trophy } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';
import { academicCertifications, certificates, experience, skillGroups } from '../data/portfolio';

export default function About() {
    return (
        <SiteLayout>
            <Head title="About" />
            <section className="page-hero section-pad page-hero--about">
                <div><p className="eyebrow"><span />About me</p><h1>A developer’s mindset with a tester’s eye.</h1><p>I care about what happens after a page looks finished: whether it works, whether people understand it, and whether the business can keep improving it.</p></div>
                <img
                    src="/images/cedrick-opina-profile-480.webp"
                    srcSet="/images/cedrick-opina-profile-480.webp 480w, /images/cedrick-opina-profile-960.webp 960w"
                    sizes="(max-width: 880px) min(100vw - 36px, 350px), 320px"
                    width="960"
                    height="960"
                    fetchPriority="high"
                    decoding="async"
                    alt="Portrait of Cedrick Opina"
                />
            </section>
            <section className="story-grid section-pad">
                <div className="section-heading"><p className="kicker">My approach</p><h2>Build carefully. Test honestly. Improve what matters.</h2></div>
                <div className="story-copy"><p>I’m Cedrick Opina, a BSIT graduate based in Quezon City with a GWA of 1.85. My work sits at the intersection of website development, quality assurance, automation, UI/UX evaluation, and search improvement.</p><p>That combination helps me see a digital product from more than one angle. I combine development and testing skills to build reliable digital experiences, identify usability issues, and improve websites for users and businesses.</p><p>Today, I test finance mobile and web experiences with Maestro automation at HeyPenny, backed by agency experience in WordPress, Elementor, QA, SEO, and client support at GodesQ.</p><a className="button button--primary" href="/resume" download>Download Resume <Download size={18} /></a></div>
            </section>
            <section className="experience-section section-pad section-surface"><div className="section-heading"><p className="kicker">Experience</p><h2>Where I’m applying the work.</h2></div><div className="timeline">{experience.map((item) => <article key={item.company}><p>{item.period}</p><div><h3>{item.company}</h3><strong>{item.role}</strong><span>{item.description}</span></div></article>)}</div></section>
            <section className="credentials-grid section-pad">
                <article><GraduationCap /><p className="kicker">Education</p><h3>Bachelor of Science in Information Technology</h3><span>STI College Fairview · 2021–2025</span><p className="education-gwa">GWA: <strong>1.85</strong></p></article>
                <article><Trophy /><p className="kicker">Recognition</p><h3>Programmer of the Year</h3><span>STI · 2024</span><h3>Best in Thesis</h3><span>Neko Food House POS & Inventory System · 2024</span></article>
            </section>
            <section className="academic-section section-pad">
                <div className="section-heading">
                    <p className="kicker">Academic & Technical Training</p>
                    <h2>Foundations in software, systems, and enterprise tools.</h2>
                    <p className="section-note">Curriculum certifications completed during tertiary degree at STI College Fairview.</p>
                </div>
                <div className="academic-grid">
                    {academicCertifications.map((cert) => (
                        <article className="academic-card" key={cert.title}>
                            <div className="academic-card__top">
                                <span className="academic-card__badge">{cert.badge}</span>
                                <span className="academic-card__year">{cert.year}</span>
                            </div>
                            <p className="academic-card__issuer">{cert.issuer}</p>
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                        </article>
                    ))}
                </div>
            </section>
            <section className="certificates-section section-pad section-surface">
                <div className="section-heading">
                    <p className="kicker">QA credentials</p>
                    <h2>Formal training in usability testing.</h2>
                    <p className="section-note">Course certificates covering usability testing foundations, practical techniques, and user-centered quality evaluation.</p>
                </div>
                <div className="certificate-grid">
                    {certificates.map((certificate, index) => (
                        <article className="certificate-card" key={certificate.credentialId}>
                            <div className="certificate-card__top">
                                <span className="certificate-card__number">{String(index + 1).padStart(2, '0')}</span>
                                <span className="certificate-card__icon"><Award size={21} /></span>
                            </div>
                            <p className="certificate-card__issuer">{certificate.issuer}</p>
                            <h3>{certificate.title}</h3>
                            <p className="certificate-card__date">Completed {certificate.issued}</p>
                            <div className="certificate-card__credential">
                                <span>Credential ID</span>
                                <code>{certificate.credentialId}</code>
                            </div>
                            <div className="certificate-card__actions">
                                <a className="text-link" href={certificate.verifyUrl} target="_blank" rel="noreferrer">Verify credential <ExternalLink size={15} /></a>
                                <a className="text-link" href={certificate.fileUrl} download>Download PDF <Download size={15} /></a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="skills-section section-pad"><div className="section-heading"><p className="kicker">Skills and tools</p><h2>A practical toolkit for building quality.</h2></div><div className="skills-list">{skillGroups.map(([group, list]) => <article key={group}><h3>{group}</h3><p>{list}</p></article>)}</div></section>
        </SiteLayout>
    );
}
