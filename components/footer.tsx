import { Github, Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/joaomarcellodev", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/joaomarcellodev", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/joaomarcello.dev", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@joaomarcellodev", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/86988109565?text=Meu%20WhatsApp%20", label: "WhatsApp" },

  ]

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#experience", label: "Experiência" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">JM</span>
              </div>
              <span className="font-semibold text-lg">
                JM<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Desenvolvedor FullStack apaixonado por criar soluções digitais inovadoras.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Redes Sociais</h3>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 bg-transparent"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon size={16} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© {currentYear} João Marcello. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
