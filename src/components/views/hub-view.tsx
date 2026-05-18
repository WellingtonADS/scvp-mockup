import {
  BrowsePage,
  type BrowsePageConfig,
} from "@/components/views/shared/browse-shared";
import { MaterialsBrowser } from "@/components/views/shared/materials-browser";
import { getMaterialsBrowseData } from "@/core/services";

type MaterialsBrowseData = Awaited<ReturnType<typeof getMaterialsBrowseData>>;

const hubPageConfig = {
  getData: getMaterialsBrowseData,
  hero: {
    badge: "Materiais, planners e simulados",
    title: "Hub de materiais estratégicos",
    description:
      "Acesse recursos gratuitos por carreira e tipo de material para organizar sua revisão com prioridade real.",
    imageSrc: "/04-hub.png",
    imageAlt: "Destaque visual da página de hub",
    primaryLead: {
      triggerText: "Liberar materiais",
      title: "Receba materiais estratégicos",
      description:
        "Informe seus dados para liberar planners, editais verticalizados e recomendações por carreira.",
    },
    secondaryHref: "#materiais",
    secondaryLabel: "Ver materiais",
  },
  stickyCta: {
    title: "Materiais liberados",
    subtitle: "Receba o recurso certo para sua carreira",
    lead: {
      triggerText: "Liberar agora",
      title: "Receba materiais estratégicos",
      description:
        "Informe sua carreira-alvo e receba materiais úteis para seu próximo ciclo de estudos.",
    },
  },
  browseSection: {
    id: "materiais",
    render: (data) => (
      <MaterialsBrowser items={data.items} filters={data.filters} />
    ),
  },
} satisfies BrowsePageConfig<MaterialsBrowseData>;

export function HubView() {
  return <BrowsePage config={hubPageConfig} />;
}
