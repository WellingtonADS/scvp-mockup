import { Button } from "@/components/ui/button";
import Link from "next/link";

type SecondaryCtaLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function SecondaryCtaLink({ href, children }: SecondaryCtaLinkProps) {
  return (
    <Button
      asChild
      variant="outline"
      className="h-10 border-white/30 bg-transparent px-5 text-[11px] font-black uppercase tracking-[0.16em] text-slate-100 hover:bg-white/10 hover:text-slate-100"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
