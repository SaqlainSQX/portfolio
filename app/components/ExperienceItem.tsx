interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string;
}

export default function ExperienceItem({ title, company, date, description }: ExperienceItemProps) {
  return (
    <div className="p-6 rounded-xl border border-zinc-100 hover:border-zinc-200 transition-all duration-300 bg-white hover:shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
        <div>
          <h3 className="font-serif text-lg text-zinc-900 font-medium">{title}</h3>
          <p className="text-sm text-zinc-600">{company}</p>
        </div>
        <span className="text-xs text-zinc-400 font-mono tracking-wider uppercase shrink-0">{date}</span>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}