import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Cpu, Database, Globe, Palette, Sparkles } from "lucide-react"

export default function AbilitiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Minhas habilidades</h1>
      </div>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="technical">Hard Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          <TabsTrigger value="languages">Idiomas</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <SkillCard
              title="Desenvolvimento Frontend"
              icon={<Palette className="h-6 w-6" />}
              skills={[
                { name: "React", level: 50 },
                { name: "Next.js", level: 65 },
                { name: "Html", level: 90 },
                { name: "Tailwind CSS", level: 55 },
              ]}
            />

            <SkillCard
              title="Desenvolvimento Backend"
              icon={<Database className="h-6 w-6" />}
              skills={[
                { name: "Node.js", level: 85 },
                { name: "C++", level: 80 },
                { name: "SQL", level: 75 },
                { name: "Django", level: 65 },
              ]}
            />

            <SkillCard
              title="Desenvolvimento Web"
              icon={<Globe className="h-6 w-6" />}
              skills={[
                { name: "HTML", level: 90 },
                { name: "CSS", level: 60 },
                { name: "JavaScript", level: 45 },
                { name: "REST APIs", level: 20 },
              ]}
            />

            <SkillCard
              title="Outras Tecnologias"
              icon={<Cpu className="h-6 w-6" />}
              skills={[
                { name: "Flutterflow", level: 85 },
                { name: "Docker", level: 30 },
                { name: "Firebase", level: 65 },
                { name: "Supabase", level: 80 },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="soft" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SoftSkillCard
              title="Problem Solving"
              description="Pensamento crítico e creativo, voltado para resolver problemas complexos."
              tags={["Critical Thinking", "Analytical", "Innovation"]}
            />
            <SoftSkillCard
              title="Comunicação"
              description="Comunicação clara e efetiva com membros e clientes."
              tags={["Escrita", "Oral", "Interpessoal"]}
            />
            <SoftSkillCard
              title="Trabalho em equipe"
              description="Liderança e colaboração em ambientes de equipe."
              tags={["Colaboração", "Liderança", "Empatia"]}
            />
            <SoftSkillCard
              title="Adaptabilidade"
              description="Capacidade de se adaptar a novas situações e desafios."
              tags={["Flexibilidade", "Aprendizado", "Resiliência"]}
            />
            <SoftSkillCard
              title="Perfeccionismo"
              description="Atenção aos detalhes e busca pela qualidade em cada tarefa."
              tags={["Qualidade", "Atenção aos Detalhes"]}
            />
          </div>
        </TabsContent>

        <TabsContent value="languages" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <LanguageCard
              title="Linguagens de Programação"
              icon={<Code2 className="h-6 w-6" />}
              languages={[
                { name: "Python", level: "Intermediário" },
                { name: "HTML", level: "Intermediário" },
                { name: "C", level: "Intermediário" },
                { name: "JavaScript", level: "Básico" },
                { name: "Java", level: "Básico" },
                { name: "Django", level: "Básico" },
                { name: "CSS", level: "Básico" },
                { name: "SQL", level: "Básico" },
              ]}
            />

            <LanguageCard
              title="Idiomas"
              icon={<Sparkles className="h-6 w-6" />}
              languages={[
                { name: "Português", level: "Nativo" },
                { name: "Inglês", level: "Fluente" },
                { name: "Espanhol", level: "Intermediário" },
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SkillCard({ title, icon, skills }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SoftSkillCard({ title, description, tags }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function LanguageCard({ title, icon, languages }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {languages.map((language) => (
          <div key={language.name} className="flex justify-between items-center py-2 border-b last:border-0">
            <span className="font-medium">{language.name}</span>
            <Badge
              variant={
                language.level === "Advanced" || language.level === "Native"
                  ? "default"
                  : language.level === "Intermediate" || language.level === "Fluent"
                    ? "secondary"
                    : "outline"
              }
            >
              {language.level}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

