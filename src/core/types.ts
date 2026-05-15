export type CourseMode = "Online" | "Presencial" | "Mentoria";

export type Course = {
  id: string;
  title: string;
  slug: string;
  mode: CourseMode;
  price: string;
  tag: string;
  career: string;
  organ: string;
  description: string;
  highlight: string;
  schedule: string;
};

export type AlertStatus = "Aberto" | "Próximo" | "Encerrado";

export type AlertItem = {
  id: string;
  orgao: string;
  career: string;
  state: string;
  banca: string;
  status: AlertStatus;
  salario: string;
  vagas: string;
  inscricao: string;
  prova: string;
  summary: string;
};

export type MaterialType =
  | "E-book"
  | "Edital Verticalizado"
  | "Simulado"
  | "Planner";

export type Material = {
  id: string;
  tipo: MaterialType;
  title: string;
  subtitle: string;
  career: string;
  format: string;
  delivery: string;
  highlight: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
};

export type CourseFilters = {
  career?: string;
  organ?: string;
  mode?: CourseMode;
};

export type AlertFilters = {
  career?: string;
  organ?: string;
  state?: string;
  status?: AlertStatus;
};

export type MaterialFilters = {
  career?: string;
  tipo?: MaterialType;
};

export type FilterOption = {
  label: string;
  value: string;
};

export type HomePageData = {
  quickTips: string[];
  featuredCourses: Course[];
  testimonials: Testimonial[];
};

export type CoursesBrowseData = {
  items: Course[];
  filters: {
    careers: FilterOption[];
    organs: FilterOption[];
  };
};

export type AlertsBrowseData = {
  items: AlertItem[];
  filters: {
    careers: FilterOption[];
    organs: FilterOption[];
    states: FilterOption[];
  };
};

export type MaterialsBrowseData = {
  items: Material[];
  filters: {
    careers: FilterOption[];
    types: FilterOption[];
  };
};
