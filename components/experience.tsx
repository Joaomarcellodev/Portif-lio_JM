import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Monitor Programe.io",
    company: "Programe.io",
    period: "2024 - 2025",
    description:
      "Minha experiência como monitor na Programe.io foi extremamente gratificante. Pude compartilhar minha paixão por programação, oferecendo orientação individualizada e em grupo, incentivando a troca de conhecimentos e contribuindo para o sucesso dos estudantes em sua jornada de aprendizado.",
    responsibilities:
      "Tira dúvidas de alunos, criação e resolução de projetos, grupos de estudos, resolução de exercícios.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Java", "PostgreSQL", "Git"],
    image: "./images/programe.jpeg",
  },
  {
    title: "DevJourney",
    company: "Programe.io",
    period: "2025",
    description:
      "O devJourney é uma plataforma de ensino voltada à capacitação de novos desenvolvedores, com funcionalidades voltadas ao aprendizado interativo e ao uso de inteligência artificial para potencializar a experiência dos usuários.",
    responsibilities:
      "Atuei como desenvolvedor front-end freelancer no projeto devJourney, uma plataforma educacional com integração de IA. Fui responsável pela criação de interfaces intuitivas e responsivas, utilizando React, JSF e JavaScript, com integração ao backend via REST APIs.",
    technologies: ["JavaScript", "Java", "Spring Boot", "GlassFish"],
    image: "./images/DevJourney.jpeg",
  },
  {
    title: "Projeto Freelancer - Dominio Tec",
    company: "Dominio Tec",
    period: "2025",
    description:
      "Este projeto consiste em um agregador de links desenvolvido para a Domínio Tec, com o objetivo de concentrar e facilitar o acesso aos principais canais e serviços da empresa em um único lugar.",
    responsibilities:
      "Fui responsável por todo o desenvolvimento do projeto, desde a criação da interface do usuário até a estruturação dos componentes. Utilizei React e TypeScript para organizar a arquitetura da aplicação de forma escalável e segura.",
    technologies: ["React", "TypeScript", "CSS3", "Git", "Vercel"],
    image: "./images/DT_Logo_D.png",
  },
  {
    title: "Estagiário Desenvolvedor FullStack",
    company: "G-Dev Society",
    period: "2025",
    description:
      "A G-dev é uma empresa de tecnologia que atua conectando desenvolvedores a empresas por meio da terceirização estratégica. Com foco em agilidade e qualidade, a G-dev fornece times ou profissionais especializados para atuar diretamente em projetos diversos.",
    responsibilities:
      "Atuo na G-dev como estagiário de desenvolvimento fullstack, contribuindo em projetos variados alocados por meio da terceirização da empresa. Participo desde a construção de interfaces com React até o desenvolvimento de APIs e integrações com bancos de dados.",
    technologies: ["React", "Node.js", "TypeScript", "Git", "Spring Boot"],
    image: "./images/gdev_society_logo.jpeg",
  },
  {
    title: "Projeto Open Source - Devs Piauí",
    company: "Comunidade Devs Piauí",
    period: "2025",
    description:
      "O Devs Piauí é uma plataforma open source criada para conectar desenvolvedores de todo o Piauí, facilitando a troca de experiências, a colaboração em projetos e o networking.",
    responsibilities:
      "Minhas responsabilidades no projeto Devs Piauí são focadas no desenvolvimento front-end, onde atuo na criação e melhoria das interfaces da plataforma. Utilizo tecnologias como React e Tailwind CSS para garantir que a experiência do usuário seja intuitiva, responsiva e acessível.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Git", "Vercel"],
    image: "./images/devspiaui.jpeg",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma jornada através das minhas experiências profissionais e projetos
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 md:transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                          <img
                            src={experience.image || "/placeholder.svg"}
                            alt={experience.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{experience.title}</CardTitle>
                          <CardDescription className="text-primary font-medium mb-2">
                            {experience.company}
                          </CardDescription>
                          <p className="text-sm text-muted-foreground">{experience.period}</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-justify text-muted-foreground leading-relaxed">{experience.description}</p>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Responsabilidades:</h4>
                        <p className="text-sm  text-muted-foreground leading-relaxed text-justify">{experience.responsibilities}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-3">Tecnologias:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
