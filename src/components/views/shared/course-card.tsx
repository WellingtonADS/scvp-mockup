import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Course } from "@/core/types";
import { Building2, FileText, Video } from "lucide-react";
import Link from "next/link";
import { ServiceRequestDialog } from "./service-request-dialog";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const [priceValue, priceSuffix] = course.price.split("/");

  return (
    <Card className="group relative gap-0 overflow-hidden rounded-[10px] border border-white/14 bg-[#123B4A]/64 p-3 shadow-[0_10px_26px_rgba(1,8,14,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF] hover:shadow-[0_0_26px_rgba(0,240,255,0.18)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-[#00F0FF]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-2">
        <Badge className="border border-[#00F0FF]/35 bg-[#00F0FF]/10 text-[10px] font-bold uppercase tracking-widest text-[#00F0FF]">
          {course.tag}
        </Badge>
        <p className="text-[11px] font-semibold text-slate-300">
          {course.mode}
        </p>
      </div>

      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
        {course.career} • {course.organ}
      </p>
      <h3 className="mt-1.5 line-clamp-2 min-h-10 font-heading text-base font-extrabold uppercase leading-tight text-white">
        {course.title}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-slate-300">
        <span className="flex items-center gap-1">
          <Video className="size-3 text-[#00F0FF]" /> Vídeo
        </span>
        <span className="flex items-center gap-1">
          <FileText className="size-3 text-[#00F0FF]" /> PDFs
        </span>
        <span className="flex items-center gap-1">
          <Building2 className="size-3 text-[#00F0FF]" /> {course.mode}
        </span>
      </div>
      <p className="mt-2 line-clamp-1 text-xs font-semibold text-slate-200">
        {course.highlight}
      </p>
      <p className="mt-1 line-clamp-1 text-[10px] text-slate-400">
        {course.schedule}
      </p>

      <div className="mt-3 border-t border-white/5 pt-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Investimento
        </p>
        <p className="mt-1 text-xl font-black text-white">
          {priceValue.trim()}
          {priceSuffix ? (
            <small className="ml-1 text-xs font-normal text-slate-300">
              /{priceSuffix.trim()}
            </small>
          ) : null}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="h-8 border-white/25 bg-transparent text-[10px] font-black uppercase tracking-[0.08em] text-slate-100 hover:bg-white/10"
        >
          <Link href="/cursos#catalogo">Ver detalhes</Link>
        </Button>
        <ServiceRequestDialog
          triggerText="Matricular agora"
          title="Solicite sua matrícula"
          description={`Informe seus dados para a equipe SCVP orientar a matrícula em ${course.title}.`}
          triggerClassName="h-8 text-[10px] tracking-[0.08em]"
          triggerSize="sm"
        />
      </div>
    </Card>
  );
}
