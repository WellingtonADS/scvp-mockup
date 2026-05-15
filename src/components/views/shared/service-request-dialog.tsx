"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/core/utils";

type ServiceRequestDialogProps = {
  triggerText: string;
  title?: string;
  description?: string;
  triggerClassName?: string;
  triggerSize?: "default" | "sm" | "lg";
};

export function ServiceRequestDialog({
  triggerText,
  title = "Receba seu planner estratégico gratuito",
  description = "Preencha os dados para liberar materiais exclusivos, alertas e trilhas recomendadas.",
  triggerClassName,
  triggerSize = "lg",
}: ServiceRequestDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={triggerSize}
          className={cn(
            "cta-cyan font-black uppercase tracking-wide",
            triggerClassName,
          )}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="mesh-surface border-white/10 bg-[#06222B] text-slate-100 sm:max-w-2xl">
        <DialogHeader>
          <p className="section-kicker">Acesso imediato</p>
          <DialogTitle className="text-2xl font-black uppercase tracking-tight text-slate-50">
            {title}
          </DialogTitle>
          <DialogDescription className="max-w-xl text-slate-300">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="grid gap-3">
            <input
              className="h-12 rounded-xl border border-white/15 bg-[#001E26] px-4 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-400 focus:border-[#00F0FF]"
              placeholder="Nome completo"
              type="text"
            />
            <input
              className="h-12 rounded-xl border border-white/15 bg-[#001E26] px-4 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-400 focus:border-[#00F0FF]"
              placeholder="E-mail"
              type="email"
            />
            <input
              className="h-12 rounded-xl border border-white/15 bg-[#001E26] px-4 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-400 focus:border-[#00F0FF]"
              placeholder="WhatsApp"
              type="tel"
            />
          </form>
          <div className="rounded-2xl border border-white/10 bg-[#001821]/70 p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-400">
              O que você recebe
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Planner inicial com priorização 80/20.</li>
              <li>Alertas de edital e materiais por carreira.</li>
              <li>Recomendação de trilha com foco no seu objetivo.</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button className="cta-cyan w-full font-black uppercase tracking-wide">
            Liberar acesso agora
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
