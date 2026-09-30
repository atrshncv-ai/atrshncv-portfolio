"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Lightbulb, Rocket, Search, Settings } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Разбираю процесс",
    description:
      "Прохожу путь обращения вместе с командой: каналы, типовые вопросы, правила квалификации и места, где нужен человек.",
    output: "Карта процесса и границы автоматизации",
    icon: Search,
    color: "text-blue-500",
    background: "bg-blue-500/10",
  },
  {
    step: "02",
    title: "Проектирую решение",
    description:
      "Определяю, где нужны AI, бизнес-правила и интеграции; продумываю данные, исключения и передачу нестандартного запроса сотруднику.",
    output: "Сценарий работы и план интеграций",
    icon: Lightbulb,
    color: "text-purple-500",
    background: "bg-purple-500/10",
  },
  {
    step: "03",
    title: "Собираю и подключаю",
    description:
      "Реализую основной пользовательский путь и связываю его с текущими каналами и сервисами компании.",
    output: "Рабочий сценарий, проверенный на согласованных примерах",
    icon: Rocket,
    color: "text-primary",
    background: "bg-primary/10",
  },
  {
    step: "04",
    title: "Запускаю в production",
    description:
      "Проверяю обработку ошибок, фиксирую правила эксплуатации и передаю команде документацию по решению.",
    output: "Запущенная система и понятная передача команде",
    icon: Settings,
    color: "text-green-500",
    background: "bg-green-500/10",
  },
];

const startConditions = [
  "Какой участок процесса входит в первый этап",
  "С какими каналами и системами нужно интегрироваться",
  "Где AI действует сам, а где требуется сотрудник",
  "По каким условиям принимаем работу",
];

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">Внедрение под ключ</Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            От разбора процесса <span className="gradient-text">до production</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Объём, сроки и критерии запуска зависят от процесса, данных и интеграций.
            Сначала проясняем границы, затем фиксируем план работ.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/40 via-primary/40 to-green-500/40 md:block" />
          <div className="space-y-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="grid gap-5 p-5 md:grid-cols-[3rem_1fr_18rem] md:items-center md:gap-6 md:p-6">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-primary">
                      {step.step}
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${step.background}`}>
                          <Icon className={`h-4 w-4 ${step.color}`} />
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="border-l border-border/50 pl-4 md:border-l md:pl-5">
                      <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">На выходе</div>
                      <div className="text-sm font-medium">{step.output}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/50 bg-muted/30 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <h3 className="mb-2 text-xl font-semibold">До начала работ фиксируем рамки</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Так решение можно оценить по работе процесса, а не по числу подключённых AI-инструментов.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {startConditions.map((condition) => (
                <div key={condition} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{condition}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 border-t border-border/50 pt-5 text-center">
            <Button asChild>
              <a href="#contact">Обсудить ваш процесс <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
