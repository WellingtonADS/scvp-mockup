import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Material } from "@/core/types";
import { Download, FileText, LockKeyhole, Sparkles } from "lucide-react";
import Link from "next/link";
import { ServiceRequestDialog } from "./service-request-dialog";

type MaterialCardProps = {
  material: Material;
};

export function MaterialCard({ material }: MaterialCardProps) {
  return (
    <Card className="group relative gap-0 overflow-hidden rounded-[10px] border border-white/14 bg-[#123B4A]/64 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00F0FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.22)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-[#00F0FF]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-2">
        <Badge className="border border-[#00F0FF]/35 bg-[#00F0FF]/10 text-[10px] font-bold uppercase tracking-widest text-[#00F0FF]">
          {material.tipo}
        </Badge>
        <p className="text-xs font-semibold text-slate-300">
          {material.career}
        </p>
      </div>
      <h3 className="mt-2 line-clamp-2 font-heading text-lg font-extrabold uppercase leading-tight text-white">
        {material.title}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
        <span className="flex items-center gap-1">
          <FileText className="size-3.5 text-[#00F0FF]" /> {material.format}
        </span>
        <span className="flex items-center gap-1">
          <Download className="size-3.5 text-[#00F0FF]" /> {material.delivery}
        </span>
        <span className="flex items-center gap-1">
          <LockKeyhole className="size-3.5 text-[#00F0FF]" /> Captura modal
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">
        {material.subtitle}
      </p>
      <p className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
        <Sparkles className="size-3 text-amber-400" /> {material.highlight}
      </p>

      <div className="mt-4 border-t border-white/5 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Investimento
        </p>
        <p className="mt-1 text-2xl font-black text-white">
          Gratuito
          <small className="ml-1 text-xs font-normal text-slate-300">
            /lead
          </small>
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-white/25 bg-transparent text-[11px] font-black uppercase tracking-[0.12em] text-slate-100 hover:bg-white/10 hover:text-slate-100"
        >
          <Link href="/hub#materiais">Ver detalhes</Link>
        </Button>
        <ServiceRequestDialog
          triggerText="Baixar agora"
          triggerSize="sm"
          triggerClassName="text-[11px] tracking-[0.12em]"
        />
      </div>
    </Card>
  );
}
