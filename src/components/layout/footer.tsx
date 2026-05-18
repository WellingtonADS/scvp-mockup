import { GraduationCap, Mail, MapPin, PhoneCall } from "lucide-react";
import { Manrope, Sora } from "next/font/google";
import Link from "next/link";

import { institutionalInfo } from "@/core/constants";

const footerDisplay = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const footerBody = Manrope({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/cursos", label: "Cursos e mentorias" },
  { href: "/alertas", label: "Alertas de editais" },
  { href: "/hub", label: "Materiais estratégicos" },
];

const institutionalLinks = [
  { href: institutionalInfo.contactHref, label: "Atendimento" },
  { href: institutionalInfo.faqHref, label: "Perguntas frequentes" },
  { href: institutionalInfo.studentAreaHref, label: "Área do aluno" },
];

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03161D]/95 px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(0,240,255,0.14),transparent_36%),radial-gradient(circle_at_92%_100%,rgba(245,158,11,0.08),transparent_24%)]" />
      <div className="section-shell relative max-w-6xl py-10 sm:py-11">
        <div className="grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[1.1fr_0.75fr_0.75fr]">
          <div className="space-y-4">
            <p
              className={`${footerDisplay.className} text-2xl font-semibold tracking-[0.04em] text-slate-50`}
            >
              SCVP
            </p>
            <p
              className={`${footerDisplay.className} scvp-meta text-amber-300 tracking-[0.2em]`}
            >
              {institutionalInfo.yearsOfAuthority}
            </p>
            <p
              className={`${footerBody.className} scvp-body max-w-xl text-slate-300`}
            >
              Preparação estratégica para concursos com método 80/20, mentoria
              especializada e execução orientada por resultado.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={institutionalInfo.whatsappUrl}
                {...externalLinkProps}
                className="scvp-btn-footer border border-[#00F0FF]/35 bg-[#00F0FF]/10 text-[#7EF9FF] hover:border-[#00F0FF]/70 hover:text-[#B2FCFF]"
              >
                <PhoneCall className="size-3.5" />
                Atendimento WhatsApp
              </a>
              <Link
                href={institutionalInfo.studentAreaHref}
                className="scvp-btn-footer border border-white/15 bg-white/5 text-slate-100 hover:border-white/35 hover:text-white"
              >
                <GraduationCap className="size-3.5" />
                Área do Aluno
              </Link>
            </div>
          </div>

          <nav>
            <p
              className={`${footerDisplay.className} scvp-meta text-slate-200 tracking-[0.2em]`}
            >
              Navegação
            </p>
            <ul
              className={`${footerBody.className} scvp-body mt-4 space-y-2.5 text-slate-300`}
            >
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <p
              className={`${footerDisplay.className} scvp-meta text-slate-200 tracking-[0.2em]`}
            >
              Institucional
            </p>
            <ul
              className={`${footerBody.className} scvp-body mt-4 space-y-2.5 text-slate-300`}
            >
              {institutionalLinks.map((item) => {
                const isExternal = item.href.startsWith("http");

                return (
                  <li key={item.href}>
                    {isExternal ? (
                      <a
                        href={item.href}
                        {...externalLinkProps}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="pt-5">
          <div
            className={`${footerBody.className} scvp-body-sm flex flex-col items-center gap-2 text-center text-slate-300 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-5 lg:gap-y-2`}
          >
            <p className="font-semibold text-slate-100">
              CNPJ {institutionalInfo.cnpj}
            </p>
            <p className="flex max-w-full items-center justify-center gap-2 text-center">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#00F0FF]/80" />
              <span className="text-center">
                {institutionalInfo.address}, {institutionalInfo.cityState}
              </span>
            </p>
            <p className="flex max-w-full items-center justify-center gap-2 text-center">
              <PhoneCall className="size-4 shrink-0 text-[#00F0FF]/80" />
              <span className="text-center">{institutionalInfo.phones}</span>
            </p>
            <p className="flex max-w-full items-center justify-center gap-2 text-center">
              <Mail className="size-4 shrink-0 text-[#00F0FF]/80" />
              <a
                href={`mailto:${institutionalInfo.email}`}
                className="text-center transition-colors hover:text-white"
              >
                {institutionalInfo.email}
              </a>
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center border-t border-white/10 pt-4">
            <p
              className={`${footerBody.className} scvp-body-sm text-slate-400`}
            >
              © {currentYear} SCVP. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
