import { AlertsBrowser } from "@/components/views/shared/alerts-browser";
import {
  BrowsePage,
  type BrowsePageConfig,
} from "@/components/views/shared/browse-shared";
import { getAlertsBrowseData } from "@/core/services";

type AlertsBrowseData = Awaited<ReturnType<typeof getAlertsBrowseData>>;

const alertsPageConfig = {
  getData: getAlertsBrowseData,
  hero: {
    badge: "Editais, salários e bancas em foco",
    title: "Central de editais e alertas",
    description:
      "Monitore oportunidades abertas e próximas por carreira, órgão e estado sem perder o timing da inscrição.",
    primaryLead: {
      triggerText: "Ativar aviso",
      title: "Ative alertas prioritarios",
      description:
        "Receba avisos de editais por carreira para agir antes da concorrencia.",
    },
    secondaryHref: "#editais",
    secondaryLabel: "Ver editais",
  },
  stickyCta: {
    title: "Alerta prioritário",
    subtitle: "Receba aviso de edital sem perder o timing",
    lead: {
      triggerText: "Ativar aviso",
      title: "Ative alertas prioritarios",
      description:
        "Informe sua carreira-alvo e receba os proximos editais no radar.",
    },
  },
  browseSection: {
    id: "editais",
    render: (data) => (
      <AlertsBrowser items={data.items} filters={data.filters} />
    ),
  },
} satisfies BrowsePageConfig<AlertsBrowseData>;

export function AlertsView() {
  return <BrowsePage config={alertsPageConfig} />;
}
