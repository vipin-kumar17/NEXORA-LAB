import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ p }) {
  return (
    <article className="card mx-auto flex w-full max-w-[340px] flex-col overflow-hidden !p-0 sm:max-w-none">
      <div className="relative aspect-[16/9] w-full">
        <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(max-width:640px) 340px, 380px" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="mt-1 text-sm text-[var(--hl)]">{p.type}</p>
        <p className="mut mt-2 text-sm">{p.desc}</p>
        <div className="mt-auto pt-4">
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-p w-full justify-center !py-2 text-sm">
            Live Preview <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}