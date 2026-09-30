"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Database,
  ExternalLink,
  MessageSquare,
  Search,
  Target,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { publicAssetPath } from "@/lib/public-path";

type WorkflowStep = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

type FeaturedProject = {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  isPrimary?: boolean;
  completedProject?: boolean;
  problem: string;
  solution: string;
  role: string;
  result: string;
  workflow: WorkflowStep[];
  architecture?: string[];
  tags: string[];
  links: { demo?: string; telegram?: string };
};

const featuredProjects: FeaturedProject[] = [
  {
    id: "lead-processing-case",
    title: "Lead Processing Pipeline — ART RECORD",
    subtitle: "AI-квалификация входящих лидов, запись на консультацию и follow-up",
    isPrimary: true,
    completedProject: true,
    problem:
      "Входящую заявку важно не просто принять: нужно понять запрос, квалифицировать лида и довести его до следующего шага. Без общего сценария часть этого пути остаётся на ручной работе менеджера.",
    solution:
      "AI-чат проводит первичный диалог и квалифицирует обращение; pipeline помогает записать лида на консультацию и продолжает follow-up после первого контакта.",
    role:
      "Самостоятельно спроектировал и внедрил pipeline: от разбора процесса до запуска в production.",
    result:
      "Квалификация, запись и follow-up идут в одной логике — менеджеру не нужно вручную запускать каждый следующий шаг.",
    workflow: [
      { icon: MessageSquare, label: "Обращение", detail: "Первый контакт" },
      { icon: Bot, label: "AI-чат", detail: "Уточнение запроса" },
      { icon: Target, label: "Квалификация", detail: "Подготовка лида" },
      { icon: Workflow, label: "Запись", detail: "Следующий шаг" },
      { icon: ArrowRight, label: "Follow-up", detail: "Продолжение диалога" },
    ],
    tags: ["AI-квалификация", "Обработка лидов", "Автоматизация продаж"],
    links: {
      demo: "https://ai-record.ru/",
    },
  },
  {
    id: "btc-sarria-case",
    title: "BTC Sarria — локальная AI-система для криптообменника",
    subtitle: "Обработка обращений и данных в закрытом AI-контуре",
    image: "/projects/btc-sarria.png",
    problem:
      "Операторам нужно было работать с обращениями, биржевыми данными и таблицами. Для конфиденциальных данных облачные LLM не подходили.",
    solution:
      "Локальная агентная система на базе Llama/Mistral объединяет поиск по базе знаний, разбор Excel/CSV, браузерный поиск и диалоги с клиентами.",
    role:
      "Спроектировал и разработал агентную систему с локальной моделью, RAG и браузерным агентом.",
    result:
      "Обращения, документы и поиск сведений сведены в единый рабочий контур; обработка чувствительных данных остаётся локальной.",
    workflow: [
      { icon: Database, label: "Источники", detail: "Данные и таблицы" },
      { icon: Brain, label: "Local LLM", detail: "Локальная обработка" },
      { icon: Search, label: "RAG и поиск", detail: "Ответы по контексту" },
      { icon: Bot, label: "Диалог", detail: "Ответ клиенту" },
    ],
    architecture: ["Llama / Mistral", "LangChain", "RAG", "Python", "PostgreSQL"],
    tags: ["Локальные LLM", "RAG", "AI-агенты"],
    links: {
      demo: "https://gbtcfinance.com/ru/bitcoin-atm-store/gbtc-sarria/",
    },
  },
  {
    id: "content-factory-case",
    title: "Content Factory — AI video pipeline",
    subtitle: "Автоматизация подготовки видео от брифа до готового файла",
    image: "/projects/content-factory.png",
    completedProject: true,
    problem:
      "Для выпуска видео нужно последовательно собрать бриф, подготовить сценарий, создать ролик, выполнить постобработку и передать файл.",
    solution:
      "Собрал производственный маршрут: Google Sheets с брифами → Claude со сценарием → HeyGen с AI-аватаром → обработка и загрузка в облако.",
    role:
      "Автоматизировал связку сервисов и добавил обработку сбоев внешнего API и уведомления.",
    result:
      "Этапы от брифа до готового видео собраны в единый маршрут; ошибки внешнего API обрабатываются отдельно.",
    workflow: [
      { icon: MessageSquare, label: "Бриф", detail: "Google Sheets" },
      { icon: Brain, label: "Сценарий", detail: "Claude" },
      { icon: Video, label: "Видео", detail: "HeyGen" },
      { icon: Workflow, label: "Постобработка", detail: "Автоматический маршрут" },
    ],
    architecture: ["n8n", "Claude API", "HeyGen API", "Webhooks"],
    tags: ["AI-видео", "Автоматизация контента", "Production"],
    links: {
      demo: "https://ai-record.ru/",
    },
  },
  {
    id: "ai-music-case",
    title: "AI Music Generator — ART RECORD",
    subtitle: "Автоматизированный маршрут заказа персональной песни",
    image: "/projects/ai-record.png",
    completedProject: true,
    problem:
      "Каждый персональный заказ проходит несколько разных операций: собрать пожелания клиента, подготовить текст, создать и обработать трек, затем доставить его заказчику.",
    solution:
      "Telegram-бот принимает заказ, GPT готовит текст, SUNO создаёт трек, после чего система выполняет постобработку и отправляет результат клиенту.",
    role:
      "Спроектировал и собрал pipeline, который связывает приём заказа, генерацию и доставку результата.",
    result:
      "Заказ проходит единый маршрут от сообщения клиента до готового трека; основные производственные шаги не нужно запускать вручную по отдельности.",
    workflow: [
      { icon: MessageSquare, label: "Заказ", detail: "Telegram-бот" },
      { icon: Workflow, label: "Оркестрация", detail: "n8n" },
      { icon: Target, label: "Текст", detail: "GPT" },
      { icon: Video, label: "Трек", detail: "SUNO и обработка" },
    ],
    architecture: ["n8n", "OpenAI", "SUNO API", "Telegram Bot API", "FFmpeg"],
    tags: ["AI-аудио", "Telegram-бот", "Автоматизация заказа"],
    links: {
      demo: "https://ai-record.ru/",
      telegram: "https://t.me/art_record_24_songs_bot",
    },
  },
];

const otherProjects = [
  {
    title: "VK Video — арт-объект «Смотрим в одной стороне»",
    description:
      "Настроил и итеративно дорабатывал промпт для генерации изображений в проекте с единым визуальным замыслом.",
    image: "/projects/vk-video-case.png",
    tags: ["Генерация изображений", "Prompt design", "Итерации"],
    link: "https://smotrim-v-odny-storony.ru/",
  },
  {
    title: "Naidoo AI — развитие AI-ассистента",
    description:
      "Обновил базу знаний и пользовательские сценарии ассистента, доработал интерфейс и поведение ответов.",
    image: "/projects/naidoo-ai-case.png",
    tags: ["AI-ассистент", "База знаний", "UX/UI"],
    link: "https://naidoo.ai",
  },
  {
    title: "Трекер привычек",
    description:
      "PWA для ежедневного учёта привычек с прогрессом и статистикой, доступное с мобильного устройства.",
    image: "/projects/habits.png",
    tags: ["PWA", "React", "TypeScript"],
    link: "https://trakerprivichek1.space.z.ai",
  },
  {
    title: "Карта ПФО — промышленность",
    description:
      "Интерактивная карта и аналитический интерфейс для изучения лёгкой промышленности регионов Приволжского округа.",
    image: "/projects/legprom.png",
    tags: ["Аналитика", "Карты", "Визуализация данных"],
    link: "https://legprompfov3.space.z.ai/",
  },
  {
    title: "Редактор гидроизогипс",
    description:
      "GIS-инструмент для редактирования карт подземных вод и экспорта материалов в DXF и PDF.",
    image: "/projects/hydroeditor.png",
    tags: ["GIS", "Canvas", "Геоданные"],
    link: "https://g13m52swxxh1-d1.space.z.ai/",
  },
  {
    title: "Карты и анализ стран",
    description:
      "Серия интерактивных карт и аналитических панелей для исследования данных по разным странам.",
    image: "/projects/maps.png",
    tags: ["Карты", "Дашборды", "Аналитика"],
    link: "https://trishencovusa.space.z.ai/",
  },
];

function WorkflowPanel({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/30 bg-muted/50 p-4">
      <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
        Как проходит процесс
      </div>
      <div className="flex min-w-max items-start gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-3">
              <div className="w-28 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-xs font-medium">{step.label}</div>
                <div className="mt-0.5 text-[10px] text-muted-foreground">{step.detail}</div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground/50" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">Кейсы</Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            AI-системы, <span className="gradient-text">встроенные в процесс</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Сначала — задача и путь пользователя. Затем — решение, интеграции и то,
            что было доведено до рабочего сценария.
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <Card
              id={project.id}
              key={project.id}
              className="case-card overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                {project.image ? (
                  <div className="aspect-video bg-muted">
                    <img
                      src={publicAssetPath(project.image)}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary/15 via-card to-accent/10 p-6 sm:p-10">
                    <div className="mb-2 text-sm font-medium text-primary">Завершённый проект · ART RECORD</div>
                    <div className="mb-7 max-w-2xl text-2xl font-semibold sm:text-3xl">
                      От первого обращения — к следующему действию
                    </div>
                    <WorkflowPanel steps={project.workflow} />
                  </div>
                )}
                {project.isPrimary && (
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-primary text-primary-foreground">Ключевой кейс</Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle className="mb-1 text-xl">{project.title}</CardTitle>
                    <p className="text-sm font-medium text-primary">{project.subtitle}</p>
                  </div>
                  {project.completedProject && (
                    <Badge variant="outline" className="border-border/60">Завершённый проект</Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                {!project.isPrimary && <WorkflowPanel steps={project.workflow} />}

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Контекст</span>
                    </div>
                    <p className="pl-6 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Что внедрено</span>
                    </div>
                    <p className="pl-6 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <Workflow className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Моя роль</span>
                    </div>
                    <p className="pl-6 text-sm leading-relaxed text-muted-foreground">{project.role}</p>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Результат</span>
                    </div>
                    <p className="pl-6 text-sm leading-relaxed text-muted-foreground">{project.result}</p>
                  </div>
                </div>

                {project.architecture && (
                  <div className="mt-5 border-t border-border/50 pt-4">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Инструменты в проекте</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.map((technology) => (
                        <Badge key={technology} variant="outline" className="border-border/50 text-xs">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>)}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.links.demo && (
                      <Button size="sm" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" /> Открыть проект
                        </a>
                      </Button>
                    )}
                    {project.links.telegram && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.telegram} target="_blank" rel="noopener noreferrer">
                          <Bot className="mr-1 h-4 w-4" /> Открыть Telegram-бота
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">Другие проекты</h3>
            <p className="text-muted-foreground">Продукты и инструменты в других предметных областях</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <Card key={project.title} className="group overflow-hidden border-border/50 bg-card/50 transition-shadow hover:shadow-lg">
                <div className={`aspect-video overflow-hidden ${project.image === "/projects/vk-video-case.png" ? "bg-black" : "bg-muted"}`}>
                  <img
                    src={publicAssetPath(project.image)}
                    alt={project.title}
                    className={`h-full w-full ${project.image === "/projects/vk-video-case.png" ? "object-contain" : "object-cover transition-transform duration-300 group-hover:scale-105"}`}
                  />
                </div>
                <CardContent className="pt-4">
                  <h4 className="mb-1 font-semibold">{project.title}</h4>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>)}
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Открыть проект <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/atrshncv-ai" target="_blank" rel="noopener noreferrer">
              Все проекты на GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
