"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SEL = "main section h2, main section .wrap > p, main .grid-a > *, main ol > li, main details, main .card";

export default function ScrollReveal() {
  const path = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const all = [...document.querySelectorAll(SEL)].filter((el) => !el.closest("main > section:first-of-type"));
    const els = all.filter((el) => !all.some((o) => o !== el && o.contains(el)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          const i = [...el.parentElement.children].indexOf(el);
          el.style.animationDelay = Math.min(i, 5) * 70 + "ms";
          el.classList.add("rv-in");
          el.addEventListener(
            "animationend",
            () => { el.classList.remove("rv", "rv-in"); el.style.animationDelay = ""; },
            { once: true }
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => { el.classList.add("rv"); io.observe(el); });

    return () => {
      io.disconnect();
      els.forEach((el) => el.classList.remove("rv", "rv-in"));
    };
  }, [path]);

  return null;
}