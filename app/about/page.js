import { Heading, CTA, ProcessList } from "@/components/UI";
import { process } from "@/lib/constants";
export const metadata = {
  title: "About Us",
  description: "Nexora Lab is a technology-driven software development company building scalable, user-friendly websites and business software.",
};
const values = ["Innovation","Quality","Transparency","Customer success","Integrity","Continuous learning"];
export default function About() {
  return (<>
    <section className="sec"><div className="wrap"><h1 className="h1 max-w-4xl">Technology built to move your business forward.</h1><p className="mut mt-6 max-w-2xl text-lg">Nexora Lab is a technology-driven software development company focused on building innovative, scalable, and user-friendly digital solutions. We help businesses transform their ideas into modern digital products through thoughtful design, powerful engineering, and reliable technology.</p></div></section>
    <section className="sec bg-[var(--bg2)]"><div className="wrap grid gap-6 md:grid-cols-2"><div className="card"><h2 className="text-2xl font-semibold">Our mission</h2><p className="mut mt-3">To empower businesses with innovative, reliable, and scalable technology solutions that simplify operations, improve customer experiences, and accelerate digital growth.</p></div><div className="card"><h2 className="text-2xl font-semibold">Our vision</h2><p className="mut mt-3">To become a trusted technology partner for businesses worldwide by delivering meaningful digital innovation and exceptional software experiences.</p></div></div></section>
    <section className="sec"><div className="wrap"><Heading title="Our core values" /><div className="grid-a">{values.map(v=><div key={v} className="card text-lg font-semibold">{v}</div>)}</div></div></section>
    <section className="sec"><div className="wrap"><Heading title="Our approach" text="We keep scope clear, build in small reviewable steps, and choose proven technology over trends." /><ProcessList steps={process} /></div></section>
    <CTA />
  </>);
}
