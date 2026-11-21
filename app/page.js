import TechItem from "@/components/TechItem";
import Link from "next/link";
import { services, why, projects, process, tech } from "@/lib/constants";
import { Heading, ServiceCard, CTA, ProcessList } from "@/components/UI";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (<>
    <section className="sec relative overflow-hidden"><div className="wrap grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
      <div><h1 className="h1">Building digital products that shape tomorrow.</h1>
        <p className="mut mt-6 max-w-xl text-lg">Nexora Lab transforms ambitious ideas into powerful websites, intelligent software, mobile applications, and scalable digital solutions.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="btn btn-p">Start your project</Link><Link href="/services" className="btn btn-g">Explore our services</Link></div></div>
      <div className="orb" aria-hidden="true"><i /><i /><i /><b /></div>
    </div></section>

    <section className="border-y border-white/10 py-8">
  <div className="wrap flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-4">
    {["React","Next.js","Node.js","JavaScript","MongoDB","PostgreSQL","Tailwind CSS","Python","REST APIs","AWS"].map((t) => (
      <TechItem key={t} name={t} className="" />
    ))}
  </div>
</section>

    <section className="sec"><div className="wrap"><Heading title="What we build" text="Eleven services, one team, from first sketch to long-term support." /><div className="grid-a">{services.map(s=><ServiceCard key={s.slug} s={s}/>)}</div></div></section>

    <section className="sec bg-[var(--bg2)]"><div className="wrap"><Heading title="Why Nexora Lab" /><div className="grid-a">{why.map(([t,d])=><div key={t} className="rounded-xl border-l-2 border-[var(--p)] bg-white/[.02] p-5"><h3 className="font-semibold">{t}</h3><p className="mut mt-1 text-sm">{d}</p></div>)}</div></div></section>

    <section className="sec"><div className="wrap">
      <Heading title="Featured projects" text="A few things we have built recently." />
      <div className="grid-a">{projects.slice(0, 3).map((p) => <ProjectCard key={p.name} p={p} />)}</div>
      <Link href="/projects" className="btn btn-g mt-8">View all projects</Link>
    </div></section>

    <section className="sec bg-[var(--bg2)]"><div className="wrap"><Heading title="How we work" /><ProcessList steps={process} /></div></section>

    <section className="sec"><div className="wrap"><Heading title="Our technology stack" /><div className="grid-a">{Object.entries(tech).map(([k,v])=><div key={k} className="card"><h3 className="font-semibold">{k}</h3><div className="mt-3 flex flex-wrap gap-2">{v.map(t=><TechItem key={t} name={t} />)}</div></div>)}</div></div></section>

    <CTA />
  </>);
}