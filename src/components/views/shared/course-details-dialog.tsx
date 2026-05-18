"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Course } from "@/core/types";

type CourseDetailsDialogProps = {
  course: Course;
  triggerClassName?: string;
};

export function CourseDetailsDialog({
  course,
  triggerClassName,
}: CourseDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className={
            triggerClassName ??
            "h-8 border-white/25 bg-transparent text-[10px] font-black uppercase tracking-[0.08em] text-slate-100 hover:bg-white/10 hover:text-slate-100"
          }
        >
          Ver detalhes
        </Button>
      </DialogTrigger>

      <DialogContent className="mesh-surface border-white/10 bg-[#06222B] text-slate-100 sm:max-w-2xl">
        <DialogHeader>
          <p className="section-kicker border-amber-300/35 bg-amber-500/18 text-amber-300">
            Detalhes do curso
          </p>
          <DialogTitle className="text-2xl font-black uppercase tracking-tight text-slate-50">
            {course.title}
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            {course.career} • {course.organ} • {course.mode}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3 rounded-xl border border-white/10 bg-[#001821]/70 p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#00F0FF]">
              Visão geral
            </p>
            <p className="text-sm leading-6 text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-sm leading-6 text-slate-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border border-white/10 bg-[#001821]/70 p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#00F0FF]">
              Informações
            </p>
            <div className="space-y-2 text-sm text-slate-200">
              <p>
                <strong className="text-slate-100">Preço:</strong>{" "}
                {course.price}
              </p>
              <p>
                <strong className="text-slate-100">Carga:</strong> 80h (lorem)
              </p>
              <p>
                <strong className="text-slate-100">Formato:</strong>{" "}
                {course.mode}
              </p>
              <p>
                <strong className="text-slate-100">Agenda:</strong>{" "}
                {course.schedule}
              </p>
            </div>

            <Button className="cta-cyan mt-2 w-full font-black uppercase tracking-wide">
              Quero entrar nessa trilha
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
