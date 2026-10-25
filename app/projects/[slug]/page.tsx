import Link from 'next/link';
import {notFound} from 'next/navigation';
import {projects} from '@/lib/portfolio';
import {projectLinks} from '@/lib/links';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:projects.find(p=>p.slug===slug)?.title??'Project'};}
export default async function Project({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();const resources=projectLinks[slug]??{};
 return <><Link href="/projects" className="button">← All projects</Link><div className="intro"><p className="eyebrow">CASE STUDY / {p.category}</p><h1>{p.title}</h1><p>{p.summary}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><section className="panel"><p className="eyebrow">THE APPROACH</p><h2>Connecting the pieces</h2><p>{p.approach}</p><ol className="architecture">{p.architecture.map((s,i)=><li key={s}><small>0{i+1}</small> {s}</li>)}</ol></section><section className="panel"><p className="eyebrow">ENGINEERING LENS</p><h2>The tradeoff</h2><p>{p.tradeoff}</p></section><div className="research-links">{(resources.source||p.href)&&<a className="button" href={resources.source||p.href} target="_blank" rel="noopener noreferrer">Source code ↗</a>}{resources.demo&&<a className="button" href={resources.demo} target="_blank" rel="noopener noreferrer">Live application ↗</a>}{resources.paper&&<a className="button" href={resources.paper} target="_blank" rel="noopener noreferrer">Read manuscript ↗</a>}</div></>;
}
