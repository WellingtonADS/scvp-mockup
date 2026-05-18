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
      className="h-12 rounded-[10px] border-white/20 bg-white/5 px-7 text-[12px] font-black uppercase tracking-[0.12em] text-slate-100 hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 hover:text-slate-100"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
