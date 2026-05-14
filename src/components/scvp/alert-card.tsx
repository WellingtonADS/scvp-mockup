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
import type { AlertItem } from "@/lib/scvp-types";
import { CalendarDays, Landmark, MapPin, UsersRound } from "lucide-react";

type AlertCardProps = {
  alert: AlertItem;
};

function statusClass(status: AlertItem["status"]) {
  if (status === "Aberto") return "bg-emerald-500/20 text-emerald-400";
  if (status === "Próximo") return "bg-[#00F0FF]/20 text-[#00F0FF]";
  return "bg-slate-500/20 text-slate-300";
}

export function AlertCard({ alert }: AlertCardProps) {
  return (
    <Card className="group relative gap-0 overflow-hidden rounded-[10px] border border-white/14 bg-[#123B4A]/64 p-3 shadow-[0_10px_26px_rgba(1,8,14,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF] hover:shadow-[0_0_26px_rgba(0,240,255,0.18)]">
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
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
        {alert.career} • {alert.banca}
      </p>
      <h3 className="mt-1.5 line-clamp-2 min-h-10 font-heading text-base font-extrabold uppercase leading-tight text-white">
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
              className="h-8 border-white/25 bg-transparent text-[10px] font-black uppercase tracking-[0.08em] text-slate-100 hover:bg-white/10"
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
              <Button className="cta-cyan font-black uppercase tracking-[0.12em]">
                Salvar alerta
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Button
          size="sm"
          className="cta-cyan h-8 text-[10px] font-black uppercase tracking-[0.08em]"
        >
          Salvar alerta
        </Button>
      </div>
    </Card>
  );
}
