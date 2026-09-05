"use client";

import { PointerEvent, ReactNode, useRef } from "react";

type HeroSpotlightProps = {
  children: ReactNode;
};

export function HeroSpotlight({ children }: HeroSpotlightProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);

  function updateSpotlight(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !sectionRef.current) {
      return;
    }

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      section.style.setProperty("--spotlight-x", `${x}%`);
      section.style.setProperty("--spotlight-y", `${y}%`);
      section.style.setProperty("--spotlight-opacity", "1");
      frameRef.current = null;
    });
  }

  function hideSpotlight() {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--spotlight-opacity", "0");
    }
  }

  return (
    <section
      ref={sectionRef}
      className="hero industrial-hero hero-with-spotlight"
      onPointerEnter={updateSpotlight}
      onPointerMove={updateSpotlight}
      onPointerLeave={hideSpotlight}
    >
      <div className="hero-spotlight-layer" aria-hidden="true" />
      {children}
    </section>
  );
}
