import Sidebar from "./components/Sidebar";
import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    /* The outer container uses 'flex' to put Sidebar and Main side-by-side */
    <div className="flex min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-100">
      
      {/* 1. Sidebar Component */}
      <Sidebar />
      
      {/* 2. Main Content Area */}
      {/* 'ml-64' is the secret—it matches the sidebar width so they don't overlap */}
      <main className="flex-1 ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto p-12 md:p-20">
          
          {/* About Section */}
          <section id="about" className="mb-24 pt-10">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] mb-8">01 / About</h2>
            <div className="max-w-2xl">
              <p className="text-lg text-zinc-700 leading-relaxed mb-6 font-serif">
                I am a second-year B.Tech IT student at the <span className="text-zinc-900 font-semibold">Indian Institute of Information Technology, Allahabad</span>.
              </p>
              <p className="text-base text-zinc-600 leading-relaxed mb-8">
                My core technical interests are in <span className="font-semibold text-zinc-900">Machine Learning</span>, <span className="font-semibold text-zinc-900">Computer Vision</span>, and <span className="font-semibold text-zinc-900">NLP</span>. I am pursuing a career in ML/Data Science, focused on building efficient infrastructure and agentic systems.
              </p>
              <p className="text-xs text-zinc-400 mb-6 italic">Open to research roles at labs and applied ML positions at companies.</p>
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                {["Data Science", "Computer Vision", "NLP", "Agentic Systems"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-50 text-zinc-600 rounded-md border border-zinc-100 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] mb-12">02 / Experience</h2>
            <div className="space-y-2">
              <ExperienceItem 
                title="Research Intern"
                company="Centre for Intelligent Robotics (CIR), IIIT Allahabad"
                date="Nov 2025 – Mar 2026"
                description="Leading research on query-conditioned Spatio-Temporal Transformers and Active Inference for world-model consistency."
              />
              <ExperienceItem 
                title="Member"
                company="Geekhaven AI/ML Wing, IIIT Allahabad"
                date="Sep 2025 – Present"
                description="Collaborating on department-wide AI/ML workshops and open-source mentoring."
              />
            </div>
          </section>

          {/* Papers Section */}
          <section id="papers" className="mb-24">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] mb-12">03 / Papers</h2>
            <a href="https://openreview.net/forum?id=GDVJCGDgN1#discussion" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-xl border border-zinc-100 bg-zinc-50/30 hover:border-zinc-300 transition-colors">
              <h3 className="font-serif text-xl text-zinc-900 mb-2 italic">QueST: Persistent Queries as Semantic Monitors for Drift Suppression in Long-Horizon Tracking</h3>
              <p className="text-xs text-zinc-500 mb-4 font-mono tracking-widest uppercase font-bold">Accepted at ICLR Workshop</p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Architected a novel transformer model to maintain tracking consistency in high-occlusion articulated motion scenarios.
              </p>
            </a>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] mb-12">04 / Projects</h2>
            <div className="flex flex-col gap-4">
              <ProjectCard
                title="FinGraph: Multi-Agent Financial Intelligence System (March 2026)"
                tags={["LangGraph", "Llama 3.1 70B", "Tavily API", "yfinance", "NetworkX", "Streamlit"]}
                description="Developed a multi-agent orchestration pipeline for investment analysis and risk assessment (Top 10 at III 5.0 Hackathon). Engineered a 4-node acyclic graph (Market Data Fetcher → Technical Analyst → Sentiment Miner → Risk Auditor) powered by Tavily API and yfinance. Built a Stock Network Analyzer with NetworkX and Streamlit to visualize Pearson and lagged correlations."
                link="https://github.com/SaqlainSQX/III5.0"
              />
              <ProjectCard 
                title="Matsya AI: Intelligent Catch Analysis" 
                tags={["YOLO", "ResNet", "Agentic AI", "Computer Vision", "Python"]} 
                description="Engineered a Perception-to-Action pipeline using YOLO (detection) and ResNet (classification) to extract biological insights from fish imagery. Implemented a three-path weight estimation pipeline combining regression models, biological formulas, and contextual reasoning. Built an Agentic AI 'Brain' that analyzes catch history, weather, and market prices to recommend optimal selling strategies."
                link="https://github.com/sahsudhanshu/ai-for-bharat"
              />
              <ProjectCard 
                title="Narrative Consistency Engine" 
                tags={["Qwen 2.5", "Pathway (BDH)", "XGBoost", "Deep Learning", "Python"]} 
                description="Engineered a sophisticated local inference pipeline leveraging Qwen 2.5 7B with custom-trained Baby Dragon Hatchling (BDH) embeddings for semantic coherence analysis. Integrated deep learning architectures with XGBoost ensemble classifiers to detect cross-temporal narrative inconsistencies across parallel story arcs with high precision."
                comingSoon={true}
              />
              <ProjectCard 
                title="Eudexa: All-in-One Law Firm Companion" 
                tags={["RAG", "LangChain", "Pinecone", "Automation", "Python"]} 
                description="Architected a comprehensive legal AI platform featuring Retrieval-Augmented Generation across 1,000+ unstructured documents with sub-500ms latency. Integrated intelligent meeting scheduling, automated risk-assessment calls to clients, and proactive case monitoring—transforming traditional law firm operations into a unified AI-driven workflow."
                link="https://github.com/ArjunDeshwal/eudia"
              />
              <ProjectCard 
                title="SmartKisaan: AI-Powered Agricultural Intelligence System" 
                tags={["FastAPI", "TensorFlow", "Jetpack Compose", "Gemini API", "PostgreSQL"]} 
                description="Developed a full-stack mobile platform combining a custom-trained deep learning model for real-time crop disease detection with Google Gemini-enhanced remediation insights. Features include JWT-secured authentication, real-time weather integration via OpenWeatherMap, an agricultural marketplace, community forum, and an AI-powered farming assistant chatbot—all orchestrated through a scalable FastAPI backend with PostgreSQL."
                link="https://github.com/SaqlainSQX/SmartKisan_Project"
              />
            </div>
            <p className="text-sm text-zinc-400 italic mt-6 text-center">More projects will be added soon</p>
          </section>

          {/* Blogs Section */}
          <section id="blogs" className="pb-24">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] mb-12">05 / Blogs</h2>
            <div className="flex flex-col gap-4">
              <div className="p-8 rounded-xl border border-dashed border-zinc-200 bg-white">
                <h3 className="font-serif text-lg text-zinc-800 mb-1">BIOMASS prediction from Image</h3>
                <p className="text-sm text-zinc-400 italic font-medium">Coming soon</p>
              </div>
              <div className="p-8 rounded-xl border border-dashed border-zinc-200 bg-white">
                <h3 className="font-serif text-lg text-zinc-800 mb-1">How to start with ML as a fresher</h3>
                <p className="text-sm text-zinc-400 italic font-medium">Coming soon</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
