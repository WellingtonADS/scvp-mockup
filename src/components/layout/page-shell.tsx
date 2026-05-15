import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type PageShellProps = {
  children: React.ReactNode;
  stickyCta?: React.ReactNode;
};

export function PageShell({ children, stickyCta }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-size-[38px_38px] opacity-[0.04]" />
      <Navbar />

      <main className="relative z-10 pb-28 md:pb-10">{children}</main>

      {stickyCta}
      <Footer />
    </div>
  );
}

export { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
