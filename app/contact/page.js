import EmailLink from "@/components/EmailLink";
import { contactInfo } from "@/lib/constants";
import ContactForm from "./ContactForm";
export const metadata = {
  title: "Contact Us",
  description: "Tell Nexora Lab about your project. Share your goals, budget and timeline and we will get back to you.",
};
export default function Contact() {
  return (<section className="sec"><div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr]"><div><h1 className="h1">Let's turn your idea into reality.</h1><>
  <p className="mut mt-6">Share a few details and we will reply with next steps.</p>
  <ul className="mt-8 space-y-3">
    <li><EmailLink email={contactInfo.email} className="text-[var(--hl)]" /></li>
    <li><a className="text-[var(--hl)]" href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>{contactInfo.phone}</a></li>
  </ul>
</></div><ContactForm /></div></section>);
}
