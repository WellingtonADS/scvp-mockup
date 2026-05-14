import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const stories = [
  { title: "Social Hub", text: "Recortes, provas, editais e provas comentadas." },
  { title: "Alertas", text: "Central de editais com leitura rápida por banca." },
  { title: "Hub", text: "Materiais, trilhas e recomendações em um só fluxo." },
]

export function Stories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            Social Hub
          </Badge>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Blocos já prontos para o conteúdo editorial.
          </h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stories.map((story) => (
          <Card key={story.title} className="glass-card border-white/10">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-lg font-medium text-foreground">
                {story.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {story.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}