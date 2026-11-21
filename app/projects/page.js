import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import { CTA } from "@/components/UI";

export const metadata = {
  title: "Our Work",
  description: "See websites and software projects built by Nexora Lab, with live previews you can open and explore.",
};
export default function Projects() {
  return (
    <>
      <section className="sec">
        <div className="wrap">
          <h1 className="h1 max-w-3xl">Our work.</h1>
          <p className="mut mt-6 max-w-2xl">A selection of projects we have built. Open any live preview to see it in action.</p>
          <div className="grid-a mt-10">{projects.map((p) => <ProjectCard key={p.name} p={p} />)}</div>
        </div>
      </section>
      <CTA />
    </>
  );
}