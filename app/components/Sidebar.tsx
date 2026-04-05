export default function Sidebar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Papers", href: "#papers" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
  ];
  
  return (
    /* We pin it to the top-left and give it a fixed width */
    <aside className="w-64 fixed top-0 left-0 h-screen border-r border-zinc-100 p-10 flex flex-col bg-white z-50">
      <div className="mb-12">
        <div className="w-12 h-12 bg-zinc-900 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-xl shadow-md">
          S
        </div>
        <h1 className="font-serif text-2xl text-zinc-900 leading-tight">Mohammad Saqlain</h1>
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-2 font-bold">
          IIIT Allahabad
        </p>
      </div>
      
      <nav className="flex flex-col gap-6">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="text-zinc-500 hover:text-zinc-900 transition-all duration-300 text-sm font-semibold tracking-wide"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-zinc-50">
         <div className="flex flex-col gap-3">
            <a href="https://github.com/SaqlainSQX" target="_blank" className="text-xs text-zinc-400 hover:text-zinc-800 font-medium transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/mohammad-saqlain-13a722310/" target="_blank" className="text-xs text-zinc-400 hover:text-zinc-800 font-medium transition-colors">LinkedIn</a>
            <a href="https://x.com/sqx_saqlain" target="_blank" className="text-xs text-zinc-400 hover:text-zinc-800 font-medium transition-colors">X (Twitter)</a>
            <a href="https://www.kaggle.com/saqlainsqx" target="_blank" className="text-xs text-zinc-400 hover:text-zinc-800 font-medium transition-colors">Kaggle</a>
            <a href="mailto:mohammadsaqlain1626@gmail.com" className="text-xs text-zinc-400 hover:text-zinc-800 font-medium transition-colors">Email</a>
         </div>
      </div>
    </aside>
  );
}