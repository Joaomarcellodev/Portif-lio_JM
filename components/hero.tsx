"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [imageToggled, setImageToggled] = useState(false);

  const handleImageClick = () => {
    setImageToggled(!imageToggled);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Joaomarcellodev",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/joaomarcellodev/",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/86988109565?text=Meu%20WhatsApp%20",
      label: "WhatsApp",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/joaomarcello.dev",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@joaomarcellodev",
      label: "YouTube",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Olá, eu sou o{" "}
                <span className="text-primary">João Marcello</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Desenvolvedor FullStack
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
                Apaixonado por tecnologia e sempre em busca de soluções
                criativas para problemas do dia a dia. Foco no progresso, que o
                resto é sucesso!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 bg-transparent"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative cursor-pointer group perspective"
              onClick={handleImageClick}
            >
              <div
                className={`relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-700 transform-style-preserve-3d ${
                  imageToggled ? "rotate-y-180" : ""
                }`}
              >
                {/* Frente */}
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src="/images/photo_jm.jpeg?height=320&width=320&query=professional developer portrait"
                    alt="João Marcello"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Verso */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <img
                    src="/images/logo_jm(320).png?height=320&width=320&query=professional developer logo"
                    alt="Logo JM"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Glow no hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
