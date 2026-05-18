import { Button } from "@/components/ui/button";
import { cn } from "@/core/utils";
import Link from "next/link";

type SecondaryCtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function SecondaryCtaLink({
  href,
  children,
  className,
}: SecondaryCtaLinkProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "scvp-btn-cta border-white/20 bg-white/5 text-slate-100 hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 hover:text-slate-100",
        className,
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
