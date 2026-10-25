import Link from 'next/link';
import {projects} from '@/lib/portfolio';
export const metadata={title:'Projects'};
export default function Projects(){return <><div className="intro"><p className="eyebrow">01 / PROJECT DIRECTORY</p><h1>Things I build<span>.</span></h1><p>Systems that recover. Agents that collaborate. AI that connects to real problems.</p></div><div className="grid">{projects.map((p,i)=><Link className="panel project-entry" href={'/projects/'+p.slug} key={p.slug}><p className="eyebrow">0{i+1} / {p.category}</p><h2>{p.title} ↗</h2><p>{p.summary}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></Link>)}</div></>}
