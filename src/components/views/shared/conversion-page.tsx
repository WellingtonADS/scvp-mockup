import { PageShell, StickyMobileCta } from "@/components/layout/page-shell";
import { FeatureHero } from "@/components/views/shared/feature-hero";
import { SecondaryCtaLink } from "@/components/views/shared/secondary-cta-link";
import { ServiceRequestDialog } from "@/components/views/shared/service-request-dialog";

type LeadCaptureCopy = {
  triggerText: string;
  title: string;
  description: string;
};

type ConversionPageConfig = {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryLead: LeadCaptureCopy;
    secondaryHref: string;
    secondaryLabel: string;
    titleClassName?: string;
  };
  stickyCta: {
    title: string;
    subtitle: string;
    lead: LeadCaptureCopy;
  };
};

type ConversionPageProps = ConversionPageConfig & {
  children: React.ReactNode;
};

export function ConversionPage({
  hero,
  stickyCta,
  children,
}: ConversionPageProps) {
  return (
    <PageShell
      stickyCta={
        <StickyMobileCta title={stickyCta.title} subtitle={stickyCta.subtitle}>
          <ServiceRequestDialog {...stickyCta.lead} />
        </StickyMobileCta>
      }
    >
      <FeatureHero
        badge={hero.badge}
        title={hero.title}
        titleClassName={hero.titleClassName}
        description={hero.description}
        primaryAction={<ServiceRequestDialog {...hero.primaryLead} />}
        secondaryAction={
          <SecondaryCtaLink href={hero.secondaryHref}>
            {hero.secondaryLabel}
          </SecondaryCtaLink>
        }
      />

      {children}
    </PageShell>
  );
}

export type { ConversionPageConfig, LeadCaptureCopy };
