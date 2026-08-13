import { Head, Link } from '@inertiajs/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';
import { clientSites, projects } from '../data/portfolio';

export default function Projects() {
    return (
        <SiteLayout>
            <Head title="Selected Work" />

            <section className="page-hero section-pad">
                <div>
                    <p className="eyebrow"><span />Selected work</p>
                    <h1>Built, tested, and improved with purpose.</h1>
                    <p>Personal projects, a team capstone, and agency client contributions—each described with a clear account of my role.</p>
                </div>
            </section>

            <section className="projects-page section-pad">
                <div className="project-stack">
                    {projects.map((project, index) => (
                        <Link className={`project-card project-card--${project.accent}`} href={`/projects/${project.slug}`} key={project.slug}>
                            <div className="project-index">0{index + 1}</div>
                            <div className="project-copy">
                                <p>{project.type}</p>
                                <h2>{project.title}</h2>
                                <span>{project.summary}</span>
                                <strong>My contribution</strong>
                                <span>{project.contribution}</span>
                                <div className="tag-row">
                                    {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
                                </div>
                            </div>
                            <div className="project-status">View case study <ArrowUpRight size={18} /></div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="client-work section-pad">
                <div className="client-work__intro">
                    <div className="section-heading">
                        <p className="kicker">Live client websites</p>
                        <h2>Agency work with a clear contribution.</h2>
                    </div>
                    <p>These websites were delivered through GodesQ. My role included development, QA, technical support, or SEO depending on the engagement.</p>
                </div>

                <div className="client-grid">
                    {clientSites.map((site, index) => (
                        <a className="client-card" href={site.url} target="_blank" rel="noreferrer" key={site.url}>
                            <div className="client-card__top">
                                <span className="client-card__number">0{index + 1}</span>
                                <span className="client-card__icon"><ArrowUpRight size={18} /></span>
                            </div>
                            <div className="client-card__body">
                                <p>{site.domain}</p>
                                <h3>{site.name}</h3>
                                <div className="client-card__services">
                                    {site.services.map((service) => <span key={service}>{service}</span>)}
                                </div>
                            </div>
                            <div className="client-card__footer">Visit live website <ArrowRight size={16} /></div>
                        </a>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
