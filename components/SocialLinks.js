import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { socials } from "@/lib/constants";

const icons = { LinkedIn: FaLinkedinIn, X: FaXTwitter, Instagram: FaInstagram, Facebook: FaFacebookF };

export default function SocialLinks() {
  return (
    <ul className="flex gap-3">
      {socials.map(({ name, url }) => {
        const Icon = icons[name];
        const live = url && url !== "#";
        return (
          <li key={name}>
            <a
              href={url || "#"}
              {...(live ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={`Nexora Lab on ${name}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[var(--mu)] transition hover:border-[var(--hl)] hover:text-white"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}