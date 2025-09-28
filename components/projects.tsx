import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Phone Store - Loja de Celulares",
    description:
      "Phone Store é a landing page do meu primeiro projeto no desenvolvimento front-end! Neste projeto, utilizei HTML para estruturar a página e CSS para criar um design estiloso e funcional.",
    image: "./images/phoneStore.png",
    technologies: ["HTML5", "CSS3"],
    liveUrl: "https://phone-store-umber.vercel.app/",
    githubUrl: "https://github.com/Joaomarcellodev/Phone-Store",
  },
  {
    title: "Agregador de Links - Linketree",
    description:
      'O Site Agregador de Links é um projeto básico inspirado no famoso "Linktree"! Com ele, você pode armazenar e exibir de forma prática os links dos seus projetos ou redes sociais.',
    image: "./images/agregadorLinks.png",
    technologies: ["HTML5", "CSS3"],
    liveUrl: "https://joaomarcellodev.github.io/Agregador-de-links/",
    githubUrl: "https://github.com/Joaomarcellodev/Agregador-de-links",
  },
  {
    title: "Planet Pizza - PWA",
    description:
      "O Planet Pizza é um Progressive Web App (PWA) desenvolvido para servir como um cardápio digital para uma pizzaria, auxiliando em pedidos e melhorando atendimentos.",
    image: "./images/planetPizza.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://joaomarcellodev.github.io/Planet_Pizza/",
    githubUrl: "https://github.com/Joaomarcellodev/Planet_Pizza",
  },
  {
    title: "Relógio Digital",
    description:
      "O Relógio Digital é um projeto simples, porém muito útil, criado com as linguagens fundamentais da web: HTML, CSS e JavaScript. Ele tem como principal objetivo exibir a hora atual em tempo real.",
    image: "./images/relogioDigital.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://joaomarcellodev.github.io/relogio_digital/",
    githubUrl: "https://github.com/Joaomarcellodev/relogio_digital/tree/main",
  },
  {
    title: "Gerador de Senha",
    description:
      "O Gerador de Senhas é um projeto básico desenvolvido com HTML, CSS, e JavaScript, onde exploramos as funcionalidades dessas tecnologias para criar um gerador de senhas interativo.",
    image: "./images/geradorSenha.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://joaomarcellodev.github.io/Gerador-de-senha/",
    githubUrl: "https://github.com/Joaomarcellodev/Gerador-de-senha",
  },
  {
    title: "Checkpoint Blog",
    description:
      "O Blog de Games é um projeto desenvolvido com Tailwind CSS, proporcionando uma interface moderna, responsiva e estilizada para conteúdos sobre o mundo dos jogos!",
    image: "./images/checkpoint.png",
    technologies: ["HTML5", "Tailwind CSS"],
    liveUrl: "https://checkpoint-blogs.vercel.app/",
    githubUrl: "https://github.com/Joaomarcellodev/Checkpoint-Blog",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns projetos notáveis que construí ao longo da minha jornada como desenvolvedor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.liveUrl && (
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Deploy
                    </a>
                  </Button>
                )}
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
