import {
  BrowsePage,
  type BrowsePageConfig,
} from "@/components/views/shared/browse-shared";
import { CoursesBrowser } from "@/components/views/shared/courses-browser";
import { getCoursesBrowseData } from "@/core/services";

type CoursesBrowseData = Awaited<ReturnType<typeof getCoursesBrowseData>>;

const coursesPageConfig = {
  getData: getCoursesBrowseData,
  hero: {
    badge: "Cursos, mentorias e trilhas 80/20",
    title: "Catálogo completo de cursos e mentorias",
    description:
      "Encontre a preparação ideal por carreira, órgão e formato com a curadoria objetiva do método SCVP.",
    primaryLead: {
      triggerText: "Quero uma indicação",
      title: "Receba uma indicação de trilha",
      description:
        "Informe seus dados para a equipe orientar o curso mais aderente ao seu edital e momento de preparação.",
    },
    secondaryHref: "#catalogo",
    secondaryLabel: "Ver catálogo",
  },
  stickyCta: {
    title: "Catálogo liberado",
    subtitle: "Fale com a equipe e escolha sua trilha",
    lead: {
      triggerText: "Quero uma indicação",
      title: "Receba uma indicação de trilha",
      description:
        "A equipe SCVP indica o caminho mais eficiente para seu edital.",
    },
  },
  browseSection: {
    id: "catalogo",
    render: (data) => (
      <CoursesBrowser items={data.items} filters={data.filters} />
    ),
  },
} satisfies BrowsePageConfig<CoursesBrowseData>;

export function CoursesView() {
  return <BrowsePage config={coursesPageConfig} />;
}
