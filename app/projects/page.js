"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Monitora SP",
      description: "Aplicativo integrado com banco de dados para monitoramento de crimes e ocorrências.",
      image: "/assets/monitora2.png",
      category: "mobile",
      tags: ["Flutterflow", "Firebase", "Vercel"],
      github: "https://github.com/Benites031407",
    },
    {
      id: 2,
      title: "NX-25",
      description: "Aplicativo integrado com banco de dados para uma feira de recrutamento.",
      image: "/assets/nx.png",
      category: "mobile",
      tags: ["Flutterflow", "Supabase", "Vercel"],
      github: "https://github.com/Benites031407",
    },
    {
      id: 3,
      title: "Hermes",
      description: "Carro de controle remoto controlado por aplicativo.",
      image: "/assets/hermes.jpeg",
      category: "iot",
      tags: ["C++", "Arduino"],
      github: "https://github.com/Benites031407",
    },
    {
      id: 4,
      title: "Powerlini Coqueiros",
      description: "Visualize informações gerais sobre a empresa a partir de métricas e dashboards.",
      image: "/assets/quiosque.png",
      category: "web",
      tags: ["Django", "SQLite"],
      github: "https://github.com/Benites031407/Sistema-de-cadastro-em-DJANGO",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const categories = [
    { id: "all", name: "Todos os projetos" },
    { id: "web", name: "Desenvolvimento Web" },
    { id: "mobile", name: "Desenvolvimento Mobile" },
    { id: "iot", name: "IoT" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meus projetos</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2 justify-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            onClick={() => setActiveFilter(category.id)}
            className={`mb-2 ${
              activeFilter === category.id ? "border-primary bg-primary/10 text-primary font-medium" : ""
            }`}
          >
            {category.name}
          </Button>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
            className="bg-card rounded-xl overflow-hidden border shadow-sm group"
          >
            <div className="relative overflow-hidden h-48">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="rounded-full bg-white/20 backdrop-blur-sm">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">Repositório GitHub</span>
                    </Button>
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="rounded-full bg-white/20 backdrop-blur-sm">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only"></span>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

