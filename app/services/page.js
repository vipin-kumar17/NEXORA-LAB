import { services, process } from "@/lib/constants";
import { Heading, ServiceCard, CTA, ProcessList } from "@/components/UI";
export const metadata = {
  title: "Our Services",
  description: "Website development, custom software, mobile apps, CRM, ERP, UI/UX design, e-commerce, APIs, AI automation and cloud support from Nexora Lab.",
};
export default function Services() {
  return (<>
    <section className="sec"><div className="wrap"><h1 className="h1 max-w-4xl">Everything you need to build and run digital products.</h1><p className="mut mt-6 max-w-2xl text-lg">From a single landing page to a full business platform, pick one service or combine several.</p></div></section>
    <section className="pb-16"><div className="wrap grid-a">{services.map(s=><ServiceCard key={s.slug} s={s}/>)}</div></section>
    <section className="sec bg-[var(--bg2)]"><div className="wrap"><Heading title="Industries we work with" /><div className="flex flex-wrap gap-2">{["Startups","Retail & e-commerce","Education","Healthcare","Logistics","Professional services","Real estate","Manufacturing"].map(i=><span key={i} className="chip !text-base">{i}</span>)}</div></div></section>
    <section className="sec"><div className="wrap"><Heading title="Our process" /><ProcessList steps={process} /></div></section>
    <CTA />
  </>);
}
