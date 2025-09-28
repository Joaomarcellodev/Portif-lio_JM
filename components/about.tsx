export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border border-border">
                <img
                  src="./images/photo2.jpeg"
                  alt="João Marcello trabalhando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
              <p className="text-lg text-primary font-medium">Foco no progresso que o resto é sucesso!</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-justify">
                Fala galera, JM na área! Apaixonado por tecnologia e sempre em busca de soluções criativas para
                problemas do dia a dia. Atualmente, estou cursando{" "}
                <strong className="text-foreground">Ciência da Computação na UESPI</strong>, em Piripiri, e me
                aprofundando no desenvolvimento tanto front-end quanto back-end através do curso{" "}
                <strong className="text-foreground">Programe.io</strong>.
              </p>

              <p className="text-justify">
                Além disso, também compartilho meu conhecimento criando conteúdo relacionado a programação, ajudando
                outros a aprender e se desenvolver na área. Acredito que a tecnologia tem o poder de transformar ideias
                em soluções reais, e é isso que me motiva a aprender constantemente.
              </p>

              <p className="text-justify">
                Me dedico a criar experiências digitais que fazem a diferença, sempre focando no progresso contínuo e na
                excelência técnica.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Educação</h3>
                <p className="text-sm text-muted-foreground">
                  Ciência da Computação
                  <br />
                  UESPI - Piripiri
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Especialização</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento FullStack
                  <br />
                  Programe.io
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
