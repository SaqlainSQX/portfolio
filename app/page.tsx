import Link from "next/link";
import PrototypeDetails from "./components/PrototypeDetails";

const work = [
  { name: "DistriStore", slug: "distristore", color: "mint", type: "Distributed systems", points: ["Built a trackerless, peer-to-peer storage framework in Python and FastAPI, with concurrent encryption and parallel file transfers.", "Implemented Reed–Solomon erasure coding for fault tolerance, alongside X25519-backed routing and threshold-based access using Shamir Secret Sharing."], stack: "Python · FastAPI · Concurrency · Cryptography" },
  { name: "TradeIQ", slug: "tradeiq", color: "blue", type: "AI engineering", points: ["Built a multi-agent platform combining price forecasting, sentiment analysis, and a dynamic knowledge graph.", "Connected Mamba, BERT, and an RL personalization agent through an orchestration pipeline for contextual financial analysis."], stack: "Python · Mamba · BERT · Agent orchestration" },
  { name: "Matsya AI", slug: "matsya-ai", color: "sand", type: "Applied AI", href: "https://github.com/sahsudhanshu/ai-for-bharat", points: ["Connected a computer vision pipeline with an assistant that reasons about catch history, marine weather, and market information.", "Built tool-using workflows with LangGraph and Gemini, bringing perception and contextual information into one application."], stack: "LangGraph · Gemini · YOLO · Computer vision" },
  { name: "Eudexa", slug: "eudexa", color: "lavender", type: "Backend & retrieval", href: "https://github.com/ArjunDeshwal/eudia", points: ["Built a legal AI assistant connecting document retrieval with workflow automation.", "Used FastAPI and retrieval-augmented generation to turn unstructured legal documents into a searchable, contextual workflow."], stack: "FastAPI · RAG · LangChain · Pinecone" },
];
const stack = [["Py", "Python"], ["C++", "C++"], ["F", "FastAPI"], ["SQL", "PostgreSQL"], ["◒", "PyTorch"], ["⌘", "LangGraph"], ["TF", "TensorFlow"], ["◈", "Docker"], ["git", "Git"], [">_", "Linux"], ["JS", "JavaScript"], ["HF", "Hugging Face"]];

export default function Home() {
  return <div className="personal-page">
    <section className="personal-intro" aria-label="Introduction">
      <PrototypeDetails mode="avatar" />
      <div className="identity-line"><h1>Saqlain</h1><span>/</span><a href="https://linkedin.com/in/mohammad-saqlain-13a722310/" target="_blank" rel="noopener noreferrer">linkedin</a><span>/</span><a href="https://github.com/SaqlainSQX" target="_blank" rel="noopener noreferrer">github</a><PrototypeDetails mode="clock" /></div>
      <p className="role-line">ai & backend engineer<span className="caret" aria-hidden="true">|</span></p>
      <div className="bio">
        <p>I build backend systems and AI applications. I like understanding how things work—from the infrastructure underneath a product to the models making its decisions.</p>
        <p>My work spans distributed storage, tool-using agents, and computer vision. I enjoy taking a difficult problem, figuring out the moving parts, and building something useful.</p>
        <p>I also work on machine learning research, with a focus on efficient visual models and temporal understanding. That means getting into the architecture, training, and evaluation—not just calling an API.</p>
        <p>Currently studying Information Technology at <a href="https://www.iiita.ac.in/" target="_blank" rel="noopener noreferrer">IIIT Allahabad</a>.</p>
        <p>You can reach me at <a href="mailto:mohammadsaqlain1626@gmail.com">mohammadsaqlain1626@gmail.com</a>, or take a look at <a href="#projects">what I’ve been building</a>.</p>
      </div>
    </section>

    <section className="personal-section" id="stack"><h2>Stack</h2><div className="stack-grid">{stack.map(([icon, label]) => <div className="stack-item" key={label}><span aria-hidden="true">{icon}</span><span>{label}</span></div>)}</div></section>

    <section className="personal-section" id="projects"><div className="section-label"><h2>Selected work</h2><span>a few things I’ve built</span></div><div className="work-list">{work.map(project => <article className="work-card" key={project.slug}><div className="work-heading"><span className={`project-swatch ${project.color}`} aria-hidden="true"/><h3><Link href={`/projects/${project.slug}`}>{project.name} <span aria-hidden="true">↗</span></Link></h3>{project.href && <a className="source-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source code`}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-1.7-1-2 3-.3 6-1.5 6-6a5 5 0 0 0-1-3.5 4.5 4.5 0 0 0-.1-3.5s-1-.3-3.5 1.3a12 12 0 0 0-6.8 0C6 2.7 5 3 5 3a4.5 4.5 0 0 0-.1 3.5A5 5 0 0 0 4 10c0 4.5 3 5.7 6 6-.7.3-1 1-1 2v4"/></svg></a>}</div><p className="work-type">{project.type}</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul><p className="work-stack">{project.stack}</p></article>)}</div></section>

    <section className="personal-section" id="research"><div className="section-label"><h2>Research</h2><span>understanding the models, too</span></div><article className="research-row"><div><h3>SpiralFovea <span>↗</span></h3><p className="research-venue">ICML 2026 · AdaptFM Workshop</p></div><p>Input-adaptive visual tokenization. Exploring how foundation models can spend less computation on redundant image regions while retaining useful information.</p></article><article className="research-row"><div><h3><a href="https://openreview.net/forum?id=GDVJCGDgN1" target="_blank" rel="noopener noreferrer">QueST <span>↗</span></a></h3><p className="research-venue">ICLR 2026 · CAO Workshop · Tiny Papers</p></div><p>Persistent semantic queries for long-horizon tracking. Studying how a model can preserve identity and reduce drift through occlusion and motion.</p></article><p className="quiet-link"><Link href="/research">More about my research ↗</Link></p></section>

    <section className="personal-section" id="experience"><h2>Along the way</h2><div className="experience-row"><div><h3>Computer Vision & Biometrics Lab</h3><p>IIIT Allahabad</p></div><p>Efficient visual models and resource-adaptive inference.</p></div><div className="experience-row"><div><h3>Centre for Intelligent Robotics</h3><p>IIIT Allahabad</p></div><p>Embodied AI, spatio-temporal tracking, and simulation data pipelines.</p></div><div className="experience-row"><div><h3>Geekhaven · AI/ML</h3><p>Community & mentorship</p></div><p>Open-source mentoring, OpenCode, and hands-on machine learning workshops.</p></div></section>

    <section className="personal-section elsewhere"><h2>Elsewhere</h2><p>Code, experiments, and works in progress live on <a href="https://github.com/SaqlainSQX" target="_blank" rel="noopener noreferrer">GitHub ↗</a>.</p><div className="elsewhere-links"><a href="https://www.kaggle.com/saqlainsqx" target="_blank" rel="noopener noreferrer">Kaggle ↗</a><a href="https://x.com/sqx_saqlain" target="_blank" rel="noopener noreferrer">X ↗</a><a href="mailto:mohammadsaqlain1626@gmail.com">Say hello ↗</a></div></section>
    <footer className="particle-footer"><PrototypeDetails mode="particles"/><span className="footer-name">SAQLAIN</span><p>Built with curiosity. Always a work in progress.</p></footer>
    <PrototypeDetails mode="theme"/>
  </div>;
}
