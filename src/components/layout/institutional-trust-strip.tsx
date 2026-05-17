import { BadgeCheck, Building2, CircleHelp, GraduationCap, PhoneCall } from "lucide-react";
import Link from "next/link";

import { institutionalInfo } from "@/core/constants";

const trustSignals = [
  {
    title: "Base institucional",
    description: institutionalInfo.cnpj,
    icon: Building2,
  },
  {
    title: "Atendimento ativo",
    description: institutionalInfo.phones,
    icon: PhoneCall,
  },
  {
    title: "Historico de aprovacoes",
    description: institutionalInfo.yearsOfAuthority,
    icon: BadgeCheck,
  },
];

export function InstitutionalTrustStrip() {
  return (
    <section className="border-t border-white/10 bg-[#02131C]/92 px-4 py-6 sm:px-6 sm:py-8">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="section-kicker">Confianca institucional</p>
            <h2 className="mt-1 font-heading text-2xl font-black uppercase tracking-tight text-slate-50 sm:text-3xl">
              Estrutura oficial antes da sua matricula
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={institutionalInfo.studentAreaHref}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-[11px] font-black uppercase tracking-[0.16em] text-slate-100 transition-colors hover:border-[#00F0FF]/60 hover:text-[#00F0FF]"
            >
              <GraduationCap className="size-3.5" />
              Area do Aluno
            </Link>
            <Link
              href={institutionalInfo.faqHref}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-[11px] font-black uppercase tracking-[0.16em] text-slate-100 transition-colors hover:border-[#00F0FF]/60 hover:text-[#00F0FF]"
            >
              <CircleHelp className="size-3.5" />
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="rounded-[12px] border border-white/12 bg-[#0A2B38]/68 p-4 shadow-[0_10px_24px_rgba(1,8,14,0.35)]"
              >
                <div className="flex items-center gap-2 text-[#00F0FF]">
                  <Icon className="size-4" />
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-200">
                    {signal.title}
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-100">{signal.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-4 rounded-[12px] border border-white/12 bg-white/4 px-4 py-3 text-xs text-slate-300 sm:text-sm">
          <p>
            {institutionalInfo.address} • {institutionalInfo.cityState}
          </p>
          <p>
            {institutionalInfo.email} • {institutionalInfo.phones}
          </p>
        </div>
      </div>
    </section>
  );
}
