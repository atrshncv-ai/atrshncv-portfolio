"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, CheckCircle2, Code2, Workflow } from "lucide-react";

const capabilityGroups = [
  {
    title: "AI и диалоги",
    icon: Brain,
    tone: "text-primary",
    background: "bg-primary/10",
    summary: "Сценарии, которые понимают запрос и действуют в рамках процесса.",
    capabilities: [
      "LLM-интеграции",
      "Классификация и квалификация обращений",
      "RAG и работа с базой знаний",
      "Проектирование диалоговых сценариев",
    ],
    tools: ["OpenAI", "Claude", "Llama", "LangChain"],
  },
  {
    title: "Автоматизация и интеграции",
    icon: Workflow,
    tone: "text-blue-500",
    background: "bg-blue-500/10",
    summary: "Связь AI-сценария с каналами и сервисами компании.",
    capabilities: [
      "Оркестрация workflow",
      "REST API и webhooks",
      "Боты и клиентские каналы",
      "Обработка повторных действий и ошибок",
    ],
    tools: ["n8n", "Make", "Telegram Bot API", "Webhooks"],
  },
  {
    title: "Разработка и production",
    icon: Code2,
    tone: "text-purple-500",
    background: "bg-purple-500/10",
    summary: "Рабочая система с понятными границами, эксплуатацией и передачей.",
    capabilities: [
      "Сервисная и интеграционная логика",
      "Проверка ответа и ограничение сценариев",
      "Логирование и уведомления о сбоях",
      "Передача нестандартного запроса сотруднику",
    ],
    tools: ["TypeScript", "Python", "PostgreSQL", "React"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">Инженерная практика</Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Инструменты — <span className="gradient-text">под задачу</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Подбираю модели и интеграции под процесс, данные и требования к эксплуатации.
            Вот компетенции, которые нужны для такого внедрения.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${group.background}`}>
                      <Icon className={`h-5 w-5 ${group.tone}`} />
                    </span>
                    {group.title}
                  </CardTitle>
                  <p className="text-sm leading-relaxed text-muted-foreground">{group.summary}</p>
                </CardHeader>
                <CardContent>
                  <ul className="mb-5 space-y-3">
                    {group.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border/50 pt-4">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Примеры инструментов</div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.tools.map((tool) => <Badge key={tool} variant="secondary" className="text-xs">{tool}</Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
