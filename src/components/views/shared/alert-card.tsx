"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { AlertItem } from "@/core/types";
import { CalendarDays, Landmark, MapPin, UsersRound } from "lucide-react";
import Image from "next/image";
import { ServiceRequestDialog } from "./service-request-dialog";

type AlertCardProps = {
  alert: AlertItem;
};

const alertThumbImages = [
  "/assets/producao/posts/post-01.png",
  "/assets/producao/posts/post-02.png",
  "/assets/producao/posts/post-03.png",
];

function pickImageByEntityId(id: string, images: string[]) {
  const numericPart = Number.parseInt(id.replace(/\D/g, ""), 10);
  const safeIndex = Number.isNaN(numericPart)
    ? 0
    : (numericPart - 1) % images.length;
  return images[safeIndex];
}

function statusClass(status: AlertItem["status"]) {
  if (status === "Aberto") return "bg-emerald-500/20 text-emerald-400";
  if (status === "Próximo") return "bg-[#00F0FF]/20 text-[#00F0FF]";
  return "bg-slate-500/20 text-slate-300";
}

export function AlertCard({ alert }: AlertCardProps) {
  const thumbImage = pickImageByEntityId(alert.id, alertThumbImages);

  return (
    <Card className="surface-elevated group relative gap-0 overflow-hidden rounded-[10px] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF] hover:shadow-[0_0_26px_rgba(0,240,255,0.18)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-[#00F0FF]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-2">
        <Badge
          className={`${statusClass(alert.status)} text-[10px] font-bold uppercase tracking-widest`}
        >
          {alert.status}
        </Badge>
        <p className="text-[11px] font-semibold text-slate-300">
          {alert.state}
        </p>
      </div>
      <div className="relative mt-2 aspect-video overflow-hidden rounded-[8px] border border-white/12 bg-[#00212A]">
        <Image
          src={thumbImage}
          alt={`Imagem de apoio do edital ${alert.orgao}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 360px"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#00151D]/75 via-transparent to-transparent" />
      </div>
      <p className="scvp-meta mt-2">
        {alert.career} • {alert.banca}
      </p>
      <h3 className="scvp-title-card mt-1.5 line-clamp-2 min-h-10">
        {alert.orgao}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-slate-300">
        <span className="flex items-center gap-1">
          <UsersRound className="size-3 text-[#00F0FF]" /> {alert.vagas}
        </span>
        <span className="flex items-center gap-1">
          <Landmark className="size-3 text-[#00F0FF]" /> {alert.banca}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="size-3 text-[#00F0FF]" /> {alert.state}
        </span>
        <span className="flex items-center gap-1">
          <CalendarDays className="size-3 text-[#00F0FF]" /> {alert.prova}
        </span>
      </div>
      <p className="mt-2 line-clamp-1 text-xs font-semibold text-slate-200">
        {alert.summary}
      </p>
      <p className="mt-1 line-clamp-1 text-[10px] text-slate-400">
        Inscrição: {alert.inscricao}
      </p>

      <div className="mt-3 border-t border-white/5 pt-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Remuneração inicial
        </p>
        <p className="mt-1 text-xl font-black text-white">{alert.salario}</p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="h-8 border-white/25 bg-transparent text-[10px] font-black uppercase tracking-[0.08em] text-slate-100 hover:bg-white/10 hover:text-slate-100"
            >
              Ver edital
            </Button>
          </DrawerTrigger>
          <DrawerContent className="border-white/10 bg-[#001E26] text-slate-100 shadow-[0_0_42px_rgba(0,240,255,0.16)]">
            <DrawerHeader>
              <DrawerTitle className="text-xl font-black uppercase tracking-tight">
                {alert.orgao}
              </DrawerTitle>
              <DrawerDescription className="text-slate-300">
                Visão executiva do edital para decisão rápida sem
                redirecionamento.
              </DrawerDescription>
            </DrawerHeader>
            <div className="space-y-3 px-4 text-sm">
              <p>
                <span className="text-slate-400">Carreira:</span> {alert.career}
              </p>
              <p>
                <span className="text-slate-400">Status:</span> {alert.status}
              </p>
              <p>
                <span className="text-slate-400">Estado:</span> {alert.state}
              </p>
              <p>
                <span className="text-slate-400">Salário:</span> {alert.salario}
              </p>
              <p>
                <span className="text-slate-400">Vagas:</span> {alert.vagas}
              </p>
              <p>
                <span className="text-slate-400">Inscrição:</span>{" "}
                {alert.inscricao}
              </p>
              <p>
                <span className="text-slate-400">Prova:</span> {alert.prova}
              </p>
              <p>
                <span className="text-slate-400">Banca:</span> {alert.banca}
              </p>
              <p className="rounded-[10px] border border-white/12 bg-white/5 p-3 leading-6 text-slate-300">
                {alert.summary}
              </p>
            </div>
            <DrawerFooter>
              <ServiceRequestDialog
                triggerText="Salvar alerta"
                title="Salve este edital no radar"
                description={`Informe seus dados para receber avisos e materiais relacionados a ${alert.orgao}.`}
                triggerClassName="tracking-[0.12em]"
              />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <ServiceRequestDialog
          triggerText="Salvar alerta"
          title="Salve este edital no radar"
          description={`Informe seus dados para receber avisos e materiais relacionados a ${alert.orgao}.`}
          triggerClassName="h-8 text-[10px] tracking-[0.08em]"
          triggerSize="sm"
        />
      </div>
    </Card>
  );
}
