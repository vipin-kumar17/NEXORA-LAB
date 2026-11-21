import { FaWhatsapp } from "react-icons/fa6";
import { whatsapp } from "@/lib/constants";

export default function WhatsAppButton() {
  const href = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nexora Lab on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <FaWhatsapp size={30} aria-hidden="true" />
    </a>
  );
}