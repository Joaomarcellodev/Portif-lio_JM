import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "IzziOrder",
    description:"O IzziOrder é um sistema de gerenciamento de pedidos com dashboard interativo e cardápio digital integrado, que facilita o atendimento, organiza os pedidos em tempo real e oferece relatórios para otimizar a gestão do negócio.",
    image: "./images/IzziOrder.jpeg",
    technologies: ["Next", "Tailwind css","Vercel","SupaBase","SQL","Postgres"],
    liveUrl: "https://izzi-order.vercel.app/",
    githubUrl: "https://github.com/Joaomarcellodev/IzziOrder",
  },
  {
    title: "Checkpoint Blog",
    description:
      "O Blog de Games é um projeto desenvolvido com Tailwind CSS, proporcionando uma interface moderna, responsiva e estilizada para conteúdos sobre o mundo dos jogos!",
    image: "./images/Checkpoint-Blog.png",
    technologies: ["HTML5", "Tailwind CSS","Firabase"],
    liveUrl: "https://checkpoint-blogs.vercel.app/",
    githubUrl: "https://github.com/Joaomarcellodev/Checkpoint-Blog",
  },
  {
    title: "Planet Pizza",
    description:
      "O Planet Pizza é um Progressive Web App (PWA) desenvolvido para servir como um cardápio digital para uma pizzaria, auxiliando em pedidos e melhorando atendimentos.",
    image: "./images/planet_pizza.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://joaomarcellodev.github.io/Planet_Pizza/",
    githubUrl: "https://github.com/Joaomarcellodev/Planet_Pizza",
  },
  {
    title: "Vetalis",
    description:
      "O Gerador de Senhas é um projeto básico desenvolvido com HTML, CSS, e JavaScript, onde exploramos as funcionalidades dessas tecnologias para criar um gerador de senhas interativo.",
    image: "./images/Vetalis.jpeg",
    technologies: ["Next", "Tailwind CSS", "Supabase", "SQL","Posgtres"],
    liveUrl: "https://vetalis.vercel.app/",
    githubUrl: "https://github.com/Joaomarcellodev/Vetalis",
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
                <CardDescription className="text-sm text-justify leading-relaxed">{project.description}</CardDescription>
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
