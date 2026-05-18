import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Course } from "@/core/types";
import { cn } from "@/core/utils";
import { FileText, Video } from "lucide-react";
import Image from "next/image";
import { CourseDetailsDialog } from "./course-details-dialog";
import { ServiceRequestDialog } from "./service-request-dialog";

type CourseCardProps = {
  course: Course;
  className?: string;
};

const courseCoverImages = [
  "/assets/producao/capas/capa-01.png",
  "/assets/producao/capas/capa-02.png",
  "/assets/producao/capas/capa-03.png",
];

function pickImageByEntityId(id: string, images: string[]) {
  const numericPart = Number.parseInt(id.replace(/\D/g, ""), 10);
  const safeIndex = Number.isNaN(numericPart)
    ? 0
    : (numericPart - 1) % images.length;
  return images[safeIndex];
}

export function CourseCard({ course, className }: CourseCardProps) {
  const [priceValue, priceSuffix] = course.price.split("/");
  const showModeLabel =
    course.tag.trim().toLowerCase() !== course.mode.trim().toLowerCase();
  const coverImage = pickImageByEntityId(course.id, courseCoverImages);

  return (
    <Card
      className={cn(
        "surface-elevated group relative mx-auto w-full max-w-88 gap-0 overflow-hidden rounded-[10px] p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF] hover:shadow-[0_0_26px_rgba(0,240,255,0.18)] sm:p-3",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-[#00F0FF]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-2">
        <Badge className="section-kicker border-amber-300/35 bg-amber-500/18 text-amber-300">
          {course.tag}
        </Badge>
        {showModeLabel ? (
          <p className="scvp-body-sm text-slate-300">{course.mode}</p>
        ) : null}
      </div>

      <div className="relative mt-2 aspect-video overflow-hidden rounded-[8px] border border-white/12 bg-[#00212A]">
        <Image
          src={coverImage}
          alt={`Capa do curso ${course.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 320px"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#00151D]/70 via-transparent to-transparent" />
      </div>

      <p className="scvp-meta mt-2">
        {course.career} • {course.organ}
      </p>
      <div className="mt-1 min-h-[4.6rem]">
        <h3 className="scvp-h3 line-clamp-2 text-white normal-case">
          {course.title}
        </h3>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-slate-300">
        <span className="flex items-center gap-1">
          <Video className="size-3 text-[#00F0FF]" /> Vídeo
        </span>
        <span className="flex items-center gap-1">
          <FileText className="size-3 text-[#00F0FF]" /> PDFs
        </span>
      </div>

      <div className="mt-2 border-t border-white/8 pt-2">
        <p className="text-lg font-black text-white sm:text-xl">
          {priceValue.trim()}
          {priceSuffix ? (
            <small className="ml-1 text-xs font-normal text-slate-300">
              /{priceSuffix.trim()}
            </small>
          ) : null}
        </p>
        <p className="scvp-body-sm mt-0.5 line-clamp-1 text-slate-400">
          {course.schedule}
        </p>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <CourseDetailsDialog
          course={course}
          triggerClassName="h-8 border-white/25 bg-transparent text-[10px] font-black uppercase tracking-[0.08em] text-slate-100 hover:bg-white/10 hover:text-slate-100"
        />
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
