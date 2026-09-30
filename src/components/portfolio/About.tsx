"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, GitBranch, ShieldCheck, Workflow } from "lucide-react";

const deliveryPoints = [
  {
    icon: GitBranch,
    title: "Понятная схема процесса",
    description: "Какие шаги выполняет система, какие данные нужны и где подключается команда.",
  },
  {
    icon: Workflow,
    title: "Решение, встроенное в работу",
    description: "AI-сценарий соединён с нужными каналами и сервисами, а не живёт отдельным демо.",
  },
  {
    icon: ShieldCheck,
    title: "Подготовка к production",
    description: "Границы автоматизации, обработка ошибок и передача нестандартных обращений обсуждаются до запуска.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">Подход</Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Сначала процесс. <span className="gradient-text">Затем AI.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Я проектирую и внедряю автоматизацию вокруг конкретной бизнес-задачи —
            от того, как приходит обращение, до следующего действия команды.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="space-y-5 pt-6">
              <h3 className="text-lg font-semibold">Что разбираем до выбора инструментов</h3>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Откуда приходит заявка? Какие сведения нужны, чтобы её квалифицировать?
                  На какие вопросы можно ответить сразу, а когда разговор должен продолжить
                  сотрудник? Как устроен follow-up?
                </p>
                <p>
                  После этого определяем, где нужны языковая модель, правила и интеграции,
                  какие данные можно обрабатывать и как система поведёт себя при ошибке.
                  Архитектура следует процессу, а не наоборот.
                </p>
              </div>
              <Button asChild variant="outline" className="mt-2">
                <a href="#lead-processing-case">
                  Посмотреть пример внедрения <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="px-1 text-lg font-semibold">Что получает команда</h3>
            {deliveryPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">{point.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                    </div>
                    <CheckCircle2 aria-hidden="true" className="ml-auto mt-1 h-4 w-4 shrink-0 text-primary/70" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
