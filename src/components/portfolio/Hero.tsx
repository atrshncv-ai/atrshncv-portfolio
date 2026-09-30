"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { publicAssetPath } from "@/lib/public-path";

const engagementSteps = [
  "Разбор процесса",
  "Проектирование и интеграция",
  "Запуск в production",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Для собственников бизнеса
            </Badge>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Внедряю AI в обработку заявок и{" "}
              <span className="gradient-text">клиентскую поддержку</span>
            </h1>

            <p className="mb-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Разбираю процесс, проектирую решение, интегрирую его в работу компании
              и довожу до production.
            </p>

            <p className="mb-8 max-w-2xl text-base text-muted-foreground/80">
              Квалификация входящих обращений, первые ответы и follow-up —
              в сценарии, который подходит вашей команде и текущим системам.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {engagementSteps.map((step) => (
                <Badge key={step} variant="secondary" className="bg-secondary/50 px-3 py-1">
                  <Check className="mr-1.5 h-3.5 w-3.5 text-primary" />
                  {step}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
              >
                <a href="#contact">
                  Обсудить задачу
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#lead-processing-case">Смотреть кейс обработки лидов</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 border-t border-border/50 pt-6 text-left sm:grid-cols-3">
              {[
                "Разобраться, где теряются обращения",
                "Встроить AI в существующий процесс",
                "Запустить решение и передать команде",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 scale-105 rounded-full bg-gradient-to-tr from-primary via-primary/50 to-accent opacity-20 blur-sm" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl">
                <img
                  src={publicAssetPath("/photo.jpg")}
                  alt="Александр Трищенков — специалист по AI-автоматизации"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -right-3 top-4">
                <Badge className="border border-border bg-card px-3 py-1.5 text-sm text-card-foreground shadow-lg">
                  AI-сценарии
                </Badge>
              </div>
              <div className="absolute -bottom-2 -left-4">
                <Badge className="bg-primary px-3 py-1.5 text-sm text-primary-foreground shadow-lg">
                  Интеграции
                </Badge>
              </div>
              <div className="absolute right-0 top-2/3">
                <Badge className="border border-border bg-card px-3 py-1.5 text-sm text-card-foreground shadow-lg">
                  Production
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#projects" aria-label="Перейти к кейсам" className="text-muted-foreground transition-colors hover:text-primary">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
