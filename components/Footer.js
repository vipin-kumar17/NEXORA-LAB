import Link from "next/link";
import { services, contactInfo } from "@/lib/constants";
import SocialLinks from "@/components/SocialLinks";
import EmailLink from "@/components/EmailLink";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--bg2)] py-14">
      <div className="wrap grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-bold">Nexora Lab</p>
          <p className="mut mt-3 text-sm">A software development company building websites, web and mobile apps, business software and automation.</p>
        </div>

        <div>
          <p className="font-semibold">Company</p>
          <ul className="mut mt-3 space-y-2 text-sm">
            {[["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Contact", "/contact"]].map(([n, h]) => (
              <li key={h}><Link href={h}>{n}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold">Services</p>
          <ul className="mut mt-3 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => <li key={s.slug}>{s.title}</li>)}
            <li><Link href="/services">All services</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mut mt-3 space-y-2 text-sm">
            <li><EmailLink email={contactInfo.email} /></li>
            <li><a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>{contactInfo.phone}</a></li>
          </ul>
          <div style={{ marginTop: "1.25rem" }}>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: "2.5rem" }}>
        <div
          className="mut flex flex-wrap justify-between gap-3 border-t border-white/10 text-sm"
          style={{ paddingTop: "1.5rem" }}
        >
          <p>© {new Date().getFullYear()} Nexora Lab. All rights reserved.</p>
          <p><Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms &amp; Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
}