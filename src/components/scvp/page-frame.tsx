import { Footer } from "./footer";
import { Navbar } from "./navbar";

type HeroStat = {
  label: string;
  value: string;
  description: string;
  tone?: "cyan" | "gold" | "slate";
};

type PageFrameProps = {
  title: string;
  subtitle: string;
  kicker?: string;
  badge?: string;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  heroTitle?: string;
  heroLabel?: string;
  heroItems?: string[];
  stats?: HeroStat[];
  children: React.ReactNode;
};

const defaultStats: HeroStat[] = [
  {
    label: "Autoridade",
    value: "16 anos",
    description: "metodo 80/20 e mentoria pratica",
    tone: "gold",
  },
  {
    label: "Conversao",
    value: "Zero desvio",
    description: "decisao sem sair da pagina",
    tone: "cyan",
  },
  {
    label: "Foco",
    value: "Alta clareza",
    description: "conteudo objetivo para acao imediata",
    tone: "slate",
  },
];

const toneClass = {
  cyan: "text-[#00F0FF]",
  gold: "text-amber-400",
  slate: "text-slate-300",
};

export function PageFrame({
  title,
  subtitle,
  kicker = "Jornada orientada por autoridade",
  badge = "Metodologia 80/20",
  primaryAction,
  secondaryAction,
  heroTitle = "Professor Fabio Silva",
  heroLabel = "Mentoria estrategica",
  heroItems = [
    "Diagnostico por objetivo",
    "Plano 80/20",
    "Acompanhamento de execucao",
  ],
  stats = defaultStats,
  children,
}: PageFrameProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 py-6 sm:py-8">
          <div className="absolute inset-0 hero-gradient" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-size-[38px_38px] opacity-[0.04]" />
          <div className="section-shell relative">
            <div className="relative overflow-hidden rounded-[18px] border border-[#4d5f6d]/45 bg-[#0A2A36] p-3 shadow-[0_18px_45px_rgba(1,8,14,0.45)] sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_14%,rgba(0,240,255,0.2),transparent_34%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.42)_48%,rgba(2,6,23,0.08)_100%)]" />
              <div className="pointer-events-none absolute inset-x-3 top-3 h-9 rounded-md border border-[#5b717f]/45 bg-[#0c3a47]/55" />
              <span className="absolute left-3 top-3 h-2.5 w-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.7)]" />
              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />

              <div className="relative z-10 grid min-h-107.5 gap-6 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pt-16">
                <div className="space-y-4">
                  <p className="section-kicker">{kicker}</p>
                  <div className="inline-flex rounded-full border border-amber-300/35 bg-amber-500/18 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300">
                    {badge}
                  </div>
                  <h1 className="max-w-[15ch] font-heading text-4xl font-extrabold uppercase leading-[0.98] text-white sm:text-6xl">
                    {title}
                  </h1>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                    {subtitle}
                  </p>
                  {primaryAction || secondaryAction ? (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {primaryAction}
                      {secondaryAction}
                    </div>
                  ) : null}
                </div>

                <div className="grid gap-4">
                  <div className="glass-card mesh-surface relative overflow-hidden rounded-[14px] border-white/12 p-4 shadow-[0_16px_42px_rgba(1,8,14,0.42)] sm:p-5">
                    <div className="absolute right-4 top-4 flex size-16 items-center justify-center rounded-full border border-[#00F0FF]/45 bg-[#001A22] text-xl font-black text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.28)]">
                      FS
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#00F0FF]">
                      {heroLabel}
                    </p>
                    <h2 className="mt-3 max-w-48 font-heading text-2xl font-extrabold uppercase leading-tight text-white">
                      {heroTitle}
                    </h2>
                    <div className="mt-5 grid gap-2">
                      {heroItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-[10px] border border-white/12 bg-[#123B4A]/62 px-3 py-2 text-sm font-semibold text-slate-100"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.32)]"
                      >
                        <p
                          className={`text-[10px] font-black uppercase tracking-[0.18em] ${toneClass[stat.tone ?? "slate"]}`}
                        >
                          {stat.label}
                        </p>
                        <p className="mt-2 text-xl font-black text-slate-50">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
