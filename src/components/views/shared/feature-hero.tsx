import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/core/utils";

type FeatureHeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryAction: React.ReactNode;
  secondaryAction: React.ReactNode;
  titleClassName?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  imageContainerClassName?: string;
};

export function FeatureHero({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  titleClassName,
  imageSrc,
  imageAlt = "Imagem de destaque",
  imagePriority = false,
  imageContainerClassName,
}: FeatureHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#041D29]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.75)_48%,rgba(0,34,47,0.42)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:repeating-linear-gradient(90deg,rgba(92,112,126,0.2)_0px,rgba(92,112,126,0.2)_1px,transparent_1px,transparent_150px)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(0,240,255,0.22),transparent_38%)]" />

      <div className="relative">
        <article className="relative overflow-hidden">
          <div
            className={cn(
              "relative z-10 grid items-center gap-6 px-4 pt-5 sm:px-6 sm:pt-7 lg:items-stretch",
              imageSrc ? "lg:grid-cols-[1.1fr_0.9fr]" : undefined,
            )}
            data-testid="feature-hero-grid"
          >
            <div
              className="self-start pb-5 lg:self-stretch lg:flex lg:h-full lg:flex-col lg:pb-6"
              data-testid="feature-hero-content"
            >
              <Badge
                className="w-fit min-h-7 border border-amber-300/35 bg-amber-500/18 px-3 py-1 text-[11px] leading-[1.2] font-bold uppercase tracking-widest text-amber-300"
                data-testid="feature-hero-badge"
              >
                {badge}
              </Badge>
              <div
                className="lg:flex lg:flex-1 lg:flex-col lg:justify-center"
                data-testid="feature-hero-text-block"
              >
                <h1
                  className={cn(
                    "scvp-hero-title mt-4 max-w-[22ch] leading-[1.08] tracking-[-0.01em] text-balance sm:max-w-[24ch] md:max-w-[26ch] lg:max-w-[17ch] xl:max-w-[18ch] 2xl:max-w-[19ch]",
                    titleClassName,
                  )}
                  data-testid="feature-hero-title"
                >
                  {title}
                </h1>
                <p
                  className="scvp-body-lg mt-4 max-w-xl"
                  data-testid="feature-hero-description"
                >
                  {description}
                </p>
              </div>

              <div
                className="mt-6 flex flex-wrap items-end gap-3 lg:mt-auto"
                data-testid="feature-hero-actions"
              >
                {primaryAction}
                {secondaryAction}
              </div>
            </div>

            {imageSrc ? (
              <figure className="relative mx-auto hidden w-full items-end justify-center lg:flex lg:justify-end">
                <div
                  className={cn(
                    "relative h-80 w-80 shrink-0 sm:h-96 sm:w-96 lg:h-108 lg:w-104",
                    imageContainerClassName,
                  )}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority={imagePriority}
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                    className="object-contain object-bottom"
                  />
                </div>
              </figure>
            ) : null}
          </div>
        </article>
      </div>

      <div className="relative z-10 h-px w-full bg-[linear-gradient(90deg,transparent_0%,transparent_40%,rgba(0,240,255,0.16)_72%,rgba(0,240,255,0.45)_100%)]" />
    </section>
  );
}
