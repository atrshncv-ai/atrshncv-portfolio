"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Automation Consultant",
    company: "Проектная практика",
    location: "Удалённо",
    period: "Март 2025 — настоящее время",
    description:
      "Разбираю бизнес-процессы, проектирую AI-автоматизацию и довожу интеграционные решения до production. Сейчас фокусируюсь на обработке заявок и клиентской поддержке.",
    focus: ["Анализ процессов", "LLM и workflow", "Интеграции", "Production-запуск"],
  },
  {
    title: "AI Developer & Solutions Architect",
    company: "TNC CLUB",
    location: "Ижевск",
    period: "Ноябрь 2022 — Декабрь 2024",
    description:
      "Разрабатывал веб-сайты и приложения для малого бизнеса, подключал AI-инструменты для автоматизации контента, поддержки и пользовательских сценариев.",
    focus: ["Веб-разработка", "AI-интеграции", "Telegram-боты", "Автоматизация контента"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">Опыт</Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Профессиональный <span className="gradient-text">путь</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Практика в разработке и AI-автоматизации. Здесь — контекст ролей; детали решений — в кейсах выше.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-5" />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div key={experience.title} className="relative pl-12 sm:pl-14">
                <div className="absolute left-2.5 top-7 h-3 w-3 rounded-full border-2 border-background bg-primary sm:left-3.5" />
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{experience.title}</CardTitle>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 text-primary">
                        <Briefcase className="h-4 w-4" /> {experience.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> {experience.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" /> {experience.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.focus.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
