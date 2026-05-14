export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03161D]/90 px-4 py-10 text-sm text-slate-300 sm:px-6">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-lg font-black tracking-wide text-slate-50">SCVP</p>
          <p className="text-xs uppercase tracking-widest text-amber-400">
            16 anos transformando concurseiros em aprovados
          </p>
          <p className="max-w-xl text-sm text-slate-400">
            Preparação estratégica para concursos com método 80/20, sede física
            em Manaus e operação desenhada para alta clareza de decisão.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-200">
              Navegação
            </p>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <p>Home</p>
              <p>Cursos</p>
              <p>Alertas de editais</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-200">
              Base institucional
            </p>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <p>Manaus/AM</p>
              <p>Sede própria</p>
              <p>Metodologia 80/20</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-slate-400">
            <div className="space-y-1">
              <p>CNPJ 57.515.556/0001-12</p>
              <p>Rua Timbó, 136, Rosa Aurora, Manaus/AM</p>
              <p>
                © {new Date().getFullYear()} SCVP. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="X"
                className="rounded-full border border-white/15 p-2 hover:border-[#00F0FF]/70 hover:text-[#00F0FF]"
              >
                X
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-white/15 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide hover:border-[#00F0FF]/70 hover:text-[#00F0FF]"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-white/15 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide hover:border-[#00F0FF]/70 hover:text-[#00F0FF]"
              >
                FB
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-full border border-white/15 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide hover:border-[#00F0FF]/70 hover:text-[#00F0FF]"
              >
                YT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
