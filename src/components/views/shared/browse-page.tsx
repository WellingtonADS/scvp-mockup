import {
  ConversionPage,
  type ConversionPageConfig,
} from "@/components/views/shared/conversion-page";

type BrowsePageConfig<TData> = {
  getData: () => Promise<TData>;
  hero: ConversionPageConfig["hero"];
  stickyCta: ConversionPageConfig["stickyCta"];
  browseSection: {
    id: string;
    render: (data: TData) => React.ReactNode;
  };
};

type BrowsePageProps<TData> = {
  config: BrowsePageConfig<TData>;
};

export async function BrowsePage<TData>({ config }: BrowsePageProps<TData>) {
  const data = await config.getData();

  return (
    <ConversionPage hero={config.hero} stickyCta={config.stickyCta}>
      <section
        id={config.browseSection.id}
        className="section-shell py-5 sm:py-6"
      >
        {config.browseSection.render(data)}
      </section>
    </ConversionPage>
  );
}

export type { BrowsePageConfig };
