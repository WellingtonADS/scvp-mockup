"use client";

import {
  Building2,
  Check,
  CirclePlay,
  FileText,
  Play,
  Search,
  UserRound,
  Video,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Footer } from "@/components/scvp/footer";
import { StickyMobileCta } from "@/components/scvp/sticky-mobile-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Course } from "@/lib/scvp-types";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#cursos", label: "Cursos" },
  { href: "#dicas", label: "Alertas" },
  { href: "#cursos", label: "Mentorias" },
  { href: "#planner", label: "Materiais" },
  { href: "/institucional", label: "Institucional" },
];

type Story = {
  id: string;
  label: string;
  caption: string;
  videoUrl: string;
};

type HomePremiumProps = {
  featuredCourses: Course[];
  quickTips: string[];
};

export function HomePremium({ featuredCourses, quickTips }: HomePremiumProps) {
  const [activeTab, setActiveTab] = useState("TODOS");
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCoursesLoading(false), 850);
    return () => clearTimeout(timer);
  }, []);

  const stories: Story[] = useMemo(
    () =>
      quickTips.slice(0, 4).map((tip, index) => ({
        id: `story-${index}`,
        label: tip,
        caption:
          index === 0
            ? "Dica de Penal • Art. 121"
            : index === 1
              ? "Saiba mais sobre o Edital"
              : index === 2
                ? "Ciclos de revisão"
                : "História de sucesso",
        videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
      })),
    [quickTips],
  );

  const filteredCourses = useMemo(() => {
    if (activeTab === "TODOS") return featuredCourses;
    if (activeTab === "MENTORIAS") {
      return featuredCourses.filter((course) => course.mode === "Mentoria");
    }
    if (activeTab === "PRESENCIAL") {
      return featuredCourses.filter((course) => course.mode === "Presencial");
    }
    if (activeTab === "ONLINE") {
      return featuredCourses.filter((course) => course.mode === "Online");
    }
    return featuredCourses;
  }, [activeTab, featuredCourses]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-size-[38px_38px] opacity-[0.04]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071A23]/85 shadow-[0_8px_30px_rgba(1,8,14,0.35)] backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-3">
          <Link
            href="#home"
            className="flex items-center gap-3 text-lg font-black tracking-wide text-slate-50"
          >
            <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white shadow-[0_0_18px_rgba(0,240,255,0.16)]">
              SC
            </span>
            <span>SCVP</span>
          </Link>

          <nav className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              aria-label="Buscar"
              className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]"
            >
              <Search className="size-4" />
            </button>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-white/25 bg-transparent text-slate-100 hover:bg-white/10"
            >
              <Link href="/institucional">Entrar</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="cta-cyan font-bold uppercase tracking-wide"
            >
              <Link href="#planner">Cadastrar</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Buscar"
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
            >
              <Search className="size-4" />
            </button>
            <Button
              asChild
              size="sm"
              className="cta-cyan h-10 rounded-full px-4 font-bold uppercase tracking-wide"
            >
              <Link href="#planner">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pb-28 md:pb-10">
        <section
          id="home"
          className="relative overflow-hidden border-b border-white/10 py-6 sm:py-8"
        >
          <div className="absolute inset-0 hero-gradient" />
          <div className="section-shell relative">
            <article className="relative overflow-hidden rounded-[18px] border border-[#4d5f6d]/45 bg-[#0A2A36] p-3 shadow-[0_18px_45px_rgba(1,8,14,0.45)] sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,240,255,0.22),transparent_36%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(2,6,23,0.3)_45%,rgba(2,6,23,0.1)_100%)]" />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1.5 p-1.5 opacity-45">
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0b5160,#123844)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#123844,#0f2f3b)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0a4452,#072d37)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0a4452,#0e3a46)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#09313c,#0a4452)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0d5867,#123844)]" />
              </div>
              <div className="pointer-events-none absolute inset-x-3 top-3 h-9 rounded-md border border-[#5b717f]/45 bg-[#0c3a47]/55" />
              <span className="absolute left-3 top-3 h-2.5 w-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.7)]" />
              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />

              <div className="relative z-10 flex min-h-72 flex-col justify-end gap-3 sm:min-h-85 lg:min-h-92">
                <Badge className="w-fit border border-amber-300/35 bg-amber-500/18 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300">
                  Metodologia 80/20
                </Badge>
                <h1 className="max-w-[16ch] font-heading text-4xl font-extrabold uppercase leading-[0.98] text-white sm:text-6xl">
                  Comece sua jornada para a aprovação
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                  Aceleradora de aprovação com tecnologia IA e mentorias de
                  elite para acelerar decisões e execução.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="cta-cyan h-10 px-5 text-[11px] font-black uppercase tracking-[0.16em] hover:scale-105">
                    Quero ser aprovado
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 border-white/30 bg-transparent px-5 text-[11px] font-black uppercase tracking-[0.16em] text-slate-100 hover:bg-white/10"
                  >
                    <Link href="#cursos">Ver catálogo</Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="cursos" className="section-shell py-7 sm:py-9">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="gap-4"
          >
            <TabsList
              variant="line"
              className="mx-auto flex w-full flex-wrap justify-center gap-2 rounded-none p-0"
            >
              {[
                ["TODOS", "TODOS"],
                ["PRESENCIAL", "PRESENCIAL"],
                ["ONLINE", "ONLINE"],
                ["MENTORIAS", "MENTORIAS"],
              ].map(([value, label]) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] transition-all data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF]"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coursesLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <article
                    key={`skeleton-${index}`}
                    className="animate-pulse rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)]"
                    aria-hidden="true"
                  >
                    <div className="h-5 w-24 rounded-md bg-white/20" />
                    <div className="mt-3 h-3 w-40 rounded bg-white/20" />
                    <div className="mt-3 h-6 w-52 rounded bg-white/20" />
                    <div className="mt-3 h-3 w-full rounded bg-white/20" />
                    <div className="mt-2 h-3 w-4/5 rounded bg-white/20" />
                    <div className="mt-4 h-7 w-28 rounded bg-white/20" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="h-9 rounded bg-white/20" />
                      <div className="h-9 rounded bg-white/20" />
                    </div>
                  </article>
                ))
              : filteredCourses.slice(0, 6).map((course) => (
                  <article
                    key={course.id}
                    className="group relative overflow-hidden rounded-[10px] border border-white/14 bg-[#123B4A]/64 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF]/35"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-center justify-between gap-2">
                      <Badge className="border border-[#00F0FF]/35 bg-[#00F0FF]/20 text-[#00F0FF]">
                        {course.tag}
                      </Badge>
                      <p className="text-xs font-semibold text-slate-300">
                        {course.mode}
                      </p>
                    </div>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                      {course.career} • {course.organ}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-extrabold uppercase leading-tight text-white">
                      {course.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
                      <span className="flex items-center gap-1">
                        <Video className="size-3.5" /> Vídeo aulas
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="size-3.5" /> PDFs
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="size-3.5" /> Sede
                      </span>
                      <span className="flex items-center gap-1">
                        <UserRound className="size-3.5" /> Mentor
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                      {course.description}
                    </p>
                    <p className="mt-3 text-2xl font-extrabold text-slate-100">
                      {course.price}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {course.schedule}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/25 bg-transparent text-[11px] font-black uppercase tracking-[0.12em] text-slate-100 hover:bg-white/10"
                      >
                        Ver detalhes
                      </Button>
                      <Button
                        size="sm"
                        className="cta-cyan text-[11px] font-black uppercase tracking-[0.12em]"
                      >
                        Matricular agora
                      </Button>
                    </div>
                  </article>
                ))}
          </div>
        </section>

        <section id="dicas" className="section-shell py-7 sm:py-8">
          <div className="rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5">
            <h2 className="font-heading text-xl font-extrabold uppercase tracking-tight text-slate-50">
              Dicas rápidas de quem passou
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stories.map((story) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setSelectedStory(story)}
                  className="group space-y-2 text-center"
                >
                  <span className="mx-auto flex size-[64px] items-center justify-center rounded-full border border-[#00F0FF] p-[2px] transition-transform duration-300 group-hover:scale-105">
                    <span className="relative flex size-full items-center justify-center rounded-full border border-[#00F0FF]/65 bg-[#001A22] text-[#00F0FF] shadow-[0_0_16px_rgba(0,240,255,0.32)]">
                      <span className="absolute inset-1 rounded-full border border-[#00F0FF]/30" />
                      <Play className="size-5" />
                    </span>
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-200">
                    {story.label}
                  </p>
                  <p className="text-[10px] text-slate-400">{story.caption}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="planner" className="section-shell py-2 sm:py-3">
          <section className="rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5">
            <h3 className="font-heading text-lg font-extrabold uppercase text-slate-50">
              Pronto para passar?
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Baixe seu planner de estudos gratuito e receba no seu e-mail.
            </p>

            {leadSubmitted ? (
              <div className="mt-4 rounded-xl border border-[#00F0FF]/30 bg-[#00F0FF]/10 p-4 text-sm text-slate-100">
                Sucesso! Verifique seu e-mail para acessar o planner.
              </div>
            ) : (
              <form
                className="mt-3 grid gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setLeadSubmitted(true);
                }}
              >
                <input
                  required
                  type="text"
                  placeholder="Nome"
                  className="h-10 rounded-md border border-white/20 bg-[#00212A] px-3 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-[#00F0FF]"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  className="h-10 rounded-md border border-white/20 bg-[#00212A] px-3 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-[#00F0FF]"
                />
                <Button type="submit" className="cta-cyan font-bold uppercase">
                  Baixar gratuitamente
                </Button>
              </form>
            )}
          </section>
        </section>

        <section id="matriz" className="section-shell py-5 sm:py-6">
          <section className="rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5">
            <h3 className="mb-2 font-heading text-lg font-extrabold uppercase text-slate-50">
              Matriz de decisão
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[10px]">Formato</TableHead>
                  <TableHead className="text-[10px]">Online</TableHead>
                  <TableHead className="bg-[#00F0FF]/8 text-[10px] text-[#00F0FF]">
                    Curso Presencial
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Curso Online", true, false],
                  ["Curso Presencial", false, true],
                  ["Curso de Bolso", true, false],
                  ["Alertas Mentor", true, true],
                  ["Acelerador 80/20", true, true],
                  ["Mentoria Elite", true, true],
                ].map(([label, online, presencial]) => (
                  <TableRow key={String(label)}>
                    <TableCell className="text-xs">{String(label)}</TableCell>
                    <TableCell className="text-xs">
                      {online ? (
                        <Check className="size-4 text-[#00F0FF]" />
                      ) : (
                        <X className="size-4 text-slate-400" />
                      )}
                    </TableCell>
                    <TableCell className="bg-[#00F0FF]/6 text-xs">
                      {presencial ? (
                        <Check className="size-4 text-[#00F0FF]" />
                      ) : (
                        <X className="size-4 text-slate-400" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </section>
      </main>

      <StickyMobileCta
        title="Planner estratégico"
        subtitle="Receba a rota inicial de estudos no celular"
      >
        <Button className="cta-cyan">Quero começar</Button>
      </StickyMobileCta>

      <Footer />

      <Dialog
        open={Boolean(selectedStory)}
        onOpenChange={(open) => !open && setSelectedStory(null)}
      >
        <DialogContent className="max-w-3xl border-white/15 bg-[#031824] p-0 text-slate-100">
          <DialogHeader className="p-4 pb-2">
            <DialogTitle className="font-heading text-left text-lg font-extrabold uppercase text-white">
              {selectedStory?.label}
            </DialogTitle>
            <DialogDescription className="text-left text-slate-400">
              {selectedStory?.caption}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full overflow-hidden rounded-b-[12px] border-t border-white/10 bg-black">
            {selectedStory ? (
              <iframe
                title={`Vídeo ${selectedStory.label}`}
                src={selectedStory.videoUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center text-slate-400">
                <CirclePlay className="size-10" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
