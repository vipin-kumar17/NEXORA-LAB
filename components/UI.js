import Link from "next/link";
import * as Icons from "lucide-react";
import { services } from "@/lib/constants";
export const Icon = ({ name, ...p }) => { const C = Icons[name] || Icons.Circle; return <C aria-hidden="true" {...p} />; };
export const Heading = ({ title, text }) => (<div className="mb-10 max-w-2xl"><h2 className="h2">{title}</h2>{text && <p className="mut mt-4">{text}</p>}</div>);
export const ServiceCard = ({ s }) => (
  <div className="card">
    <div
      className="grid h-16 w-16 place-items-center rounded-2xl"
      style={{ background: "linear-gradient(135deg, rgba(139,92,246,.35), rgba(99,102,241,.12))", border: "1px solid rgba(167,139,250,.35)" }}
    >
      <Icon name={s.icon} size={34} className="text-[var(--hl)]" />
    </div>
    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
    <p className="mut mt-2 text-sm">{s.short}</p>
  </div>
);
export const CTA = ({ title = "Have an idea? Let's build something extraordinary.", text = "Whether you're launching a startup, scaling your business, or transforming your digital presence, Nexora Lab is ready to help." }) => (
  <section className="sec"><div className="wrap"><div className="card !p-10 text-center md:!p-16" style={{ background: "radial-gradient(60% 120% at 50% 0%,rgba(139,92,246,.25),var(--bg2))" }}><h2 className="h2 mx-auto max-w-3xl">{title}</h2><p className="mut mx-auto mt-4 max-w-xl">{text}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/contact" className="btn btn-p">Discuss your project</Link><Link href="/services" className="btn btn-g">Explore services</Link></div></div></div></section>);
export const ProcessList = ({ steps }) => (<ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{steps.map(([t, d], i) => <li key={t} className="card"><span className="text-sm text-[var(--hl)]">Step {i + 1}</span><h3 className="mt-2 text-lg font-semibold">{t}</h3><p className="mut mt-1 text-sm">{d}</p></li>)}</ol>);
export const Related = ({ slug }) => { const i = services.findIndex((s) => s.slug === slug); const rel = [1, 2, 3].map((k) => services[(i + k) % services.length]); return <div className="grid-a">{rel.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>; };
