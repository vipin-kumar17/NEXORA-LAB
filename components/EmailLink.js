"use client";
import { useEffect, useState } from "react";

export default function EmailLink({ email, className }) {
  const [href, setHref] = useState(`mailto:${email}`);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) setHref(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`);
  }, [email]);

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      {email}
    </a>
  );
}