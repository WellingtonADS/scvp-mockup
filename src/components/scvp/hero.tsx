import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            Azul Petróleo + Ciano
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Estrutura pronta para a experiência SCVP.
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Base visual refinada, componentes do shadcn e layout em src para
            evoluir o catálogo, os alertas e o hub sem atrito.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg">Começar agora</Button>
            <Button variant="outline" size="lg">
              Ver catálogo
            </Button>
          </div>
        </div>
        <div className="glass-card neon-shadow rounded-2xl p-6 text-sm text-muted-foreground">
          <div className="space-y-3">
            <div className="h-3 w-24 rounded-full bg-primary/30" />
            <div className="h-3 w-3/4 rounded-full bg-white/10" />
            <div className="h-3 w-2/3 rounded-full bg-white/10" />
            <div className="h-3 w-5/6 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}