"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/cursos", label: "Cursos" },
  { href: "/alertas", label: "Alertas" },
  { href: "/hub", label: "Materiais" },
  { href: "/institucional", label: "Institucional" },
];

const studentAreaHref =
  "https://presencial.souconcurseiroevoupassar.com/portal/login";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071A23]/85 shadow-[0_8px_30px_rgba(1,8,14,0.35)] backdrop-blur-xl">
      <div className="section-shell flex h-28 items-center justify-between gap-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/producao/logos/LOGO-SCVP_HORIZONTAL-BRANCO.png"
            alt="Logo SCVP"
            width={406}
            height={106}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]"
            aria-label="Buscar"
          >
            <Search className="size-4" />
          </button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="h-9 rounded-full border-white/15 bg-white/5 px-4 text-[11px] font-black uppercase tracking-[0.16em] text-slate-100 hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 hover:text-white"
          >
            <a
              href={studentAreaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Área do Aluno
            </a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
            aria-label="Buscar"
          >
            <Search className="size-4" />
          </button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="h-10 rounded-full border-white/15 bg-white/5 px-4 font-bold uppercase tracking-wide text-slate-100 hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 hover:text-white"
          >
            <a
              href={studentAreaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Área do Aluno
            </a>
          </Button>

          <Drawer direction="bottom">
            <DrawerTrigger asChild>
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 shadow-[0_0_18px_rgba(0,240,255,0.12)]"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="rounded-t-[28px] border-white/10 bg-[#04131A] text-slate-100">
              <DrawerHeader className="border-b border-white/10 pb-4">
                <DrawerTitle className="text-left text-xl font-bold uppercase tracking-[0.08em] text-white">
                  Navegação rápida
                </DrawerTitle>
                <DrawerDescription className="text-left text-slate-100">
                  Acesse cursos e alertas com CTA sempre ao alcance.
                </DrawerDescription>
              </DrawerHeader>
              <div className="space-y-6 px-4 pb-8 pt-4">
                <nav className="grid gap-2">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex min-h-12 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-100 transition-colors hover:border-[#00F0FF]/40 hover:bg-[#00F0FF]/8"
                    >
                      <span>{link.label}</span>
                      <span className="text-[#00F0FF]">+</span>
                    </Link>
                  ))}
                </nav>

                <div className="grid gap-3">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 border-white/15 bg-transparent text-slate-100 hover:bg-white/10 hover:text-slate-100"
                  >
                    <a
                      href={studentAreaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Área do Aluno
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="cta-cyan h-12 font-bold uppercase tracking-wide"
                  >
                    <Link href="/cursos">Quero começar agora</Link>
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
