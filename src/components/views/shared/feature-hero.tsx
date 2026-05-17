import { Badge } from "@/components/ui/badge";

type FeatureHeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryAction: React.ReactNode;
  secondaryAction: React.ReactNode;
  titleClassName?: string;
};

export function FeatureHero({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  titleClassName = "max-w-[18ch]",
}: FeatureHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-4 sm:py-5">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(0,240,255,0.16),transparent_38%)]" />
      <div className="section-shell relative">
        <article className="relative overflow-hidden rounded-[20px] border border-[#5f7280]/45 bg-[#062634]/88 px-4 py-5 shadow-[0_18px_44px_rgba(1,8,14,0.42)] backdrop-blur-[1.5px] sm:px-7 sm:py-7">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.86)_0%,rgba(2,6,23,0.62)_52%,rgba(2,6,23,0.28)_100%)]" />
          <div className="absolute inset-0 opacity-30 [background:repeating-linear-gradient(90deg,rgba(148,163,184,0.16)_0px,rgba(148,163,184,0.16)_1px,transparent_1px,transparent_120px)]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full border border-[#00F0FF]/20" />
          <div className="pointer-events-none absolute -right-8 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-[#00F0FF]/30" />
          <div className="pointer-events-none absolute -bottom-12 left-12 h-24 w-44 rounded-full bg-[#00F0FF]/12 blur-2xl" />

          <div className="relative z-10 flex flex-col justify-end gap-3 sm:min-h-52 lg:min-h-56">
            <Badge className="w-fit border border-amber-300/35 bg-amber-500/18 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300">
              {badge}
            </Badge>
            <h1 className={`${titleClassName} scvp-title-page`}>
              {title}
            </h1>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-16 bg-[linear-gradient(90deg,rgba(0,240,255,0.9),rgba(0,240,255,0.16))] sm:w-24" />
              <span className="h-2 w-2 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.68)]" />
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {primaryAction}
              {secondaryAction}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
