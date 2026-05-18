"use client";

import { useEffect, useState } from "react";

type StickyMobileCtaProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  showAfterScrollY?: number;
};

export function StickyMobileCta({
  title,
  subtitle,
  children,
  showAfterScrollY = 520,
}: StickyMobileCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > showAfterScrollY);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterScrollY]);

  return (
    <div
      data-sticky-cta="true"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#04131A]/95 px-4 pb-[calc(0.9rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="scvp-meta-strong truncate">{title}</p>
          <p className="scvp-body-sm truncate text-slate-300">{subtitle}</p>
        </div>
        <div className="shrink-0">{children}</div>
      </div>
    </div>
  );
}
