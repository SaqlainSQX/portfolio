"use client";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  link?: string;
  comingSoon?: boolean;
}

export default function ProjectCard({ title, tags, description, link, comingSoon }: ProjectCardProps) {
  const [showMessage, setShowMessage] = useState(false);

  if (comingSoon) {
    return (
      <div 
        onClick={() => setShowMessage(true)}
        className="block p-6 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group cursor-pointer relative"
      >
        <h3 className="font-semibold text-[15px] text-zinc-800 group-hover:text-zinc-900 transition-colors">
          {title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag: string) => (
            <span key={tag} className="text-[9px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-md font-medium lowercase">
              {tag}
            </span>
          ))}
        </div>
        {showMessage && (
          <p className="text-xs text-amber-600 mt-3 font-medium">Link will be available soon!</p>
        )}
      </div>
    );
  }

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-6 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group"
    >
      <h3 className="font-semibold text-[15px] text-zinc-800 group-hover:text-zinc-900 transition-colors">
        {title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[9px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-md font-medium lowercase">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}