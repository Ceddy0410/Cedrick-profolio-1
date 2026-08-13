import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';

export default function ProjectShow({ project }) {
    return <SiteLayout><Head title={project.title} /><section className={`case-hero section-pad case-hero--${project.accent}`}><Link className="back-link" href="/projects"><ArrowLeft size={16} /> All projects</Link><p className="eyebrow"><span />{project.type}</p><h1>{project.title}</h1><p>{project.summary}</p><div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></section><section className="case-body section-pad"><aside><span>Project status</span><strong>{project.status}</strong><span>Contribution</span><p>{project.contribution}</p></aside><div><p className="kicker">The work</p><h2>{project.heading}</h2>{project.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h3>What I contributed</h3><ul>{project.highlights.map((highlight) => <li key={highlight}><Check size={17} />{highlight}</li>)}</ul>{project.liveUrl && <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live website <ArrowUpRight size={18} /></a>}</div></section></SiteLayout>;
}
