"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase, HelpCircle, Mail, MapPin, MessageSquare, Phone, Rocket, Send, Workflow } from "lucide-react";

const contactInfo = [
  {
    icon: Send,
    label: "Telegram",
    value: "@a_trshncv",
    href: "https://t.me/a_trshncv",
    preferred: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "alexander.trishencov@gmail.com",
    href: "mailto:alexander.trishencov@gmail.com",
    preferred: false,
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (912) 468-76-70",
    href: "tel:+79124687670",
    preferred: false,
  },
  {
    icon: MapPin,
    label: "Локация",
    value: "Ижевск, Россия",
    href: null,
    preferred: false,
  },
];

const requestTypes = [
  { icon: Rocket, label: "Внедрить AI", value: "implementation", description: "Задача под ключ" },
  { icon: Workflow, label: "Разобрать процесс", value: "process", description: "Найти подходящий сценарий" },
  { icon: Briefcase, label: "Проект", value: "project", description: "Обсудить конкретный проект" },
  { icon: HelpCircle, label: "Другой вопрос", value: "other", description: "Задать вопрос" },
];

export function Contact() {
  const [selectedType, setSelectedType] = useState("implementation");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const requestType = requestTypes.find((type) => type.value === selectedType);
    const subject = `Обсудить AI-внедрение: ${requestType?.label ?? "Вопрос"}`;
    const body = [
      `Имя: ${formData.get("name") || ""}`,
      `Email для ответа: ${formData.get("email") || ""}`,
      `Компания / сайт: ${formData.get("company") || "не указаны"}`,
      `Тема: ${requestType?.label ?? "Вопрос"}`,
      "",
      "Как сейчас устроен процесс и что хотелось бы изменить:",
      String(formData.get("message") || ""),
    ].join("\n");

    window.location.href = `mailto:alexander.trishencov@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">Контакты</Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Обсудим, <span className="gradient-text">где поможет AI</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Опишите, как сегодня обрабатываются заявки и где команда тратит время на повторяющиеся действия.
            Разберём задачу и следующий практический шаг.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageSquare className="h-5 w-5 text-primary" />
                Расскажите о процессе
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" name="name" autoComplete="name" placeholder="Как к вам обращаться?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email для ответа</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Компания или сайт</Label>
                  <Input id="company" name="company" placeholder="Название или URL (необязательно)" />
                </div>
                <fieldset className="space-y-2">
                  <legend className="text-sm font-medium">С чем хотите разобраться?</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {requestTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.value;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setSelectedType(type.value)}
                          className={`rounded-lg border p-3 text-left transition-colors ${
                            isSelected
                              ? "border-primary bg-primary/10"
                              : "border-border/50 bg-card/50 hover:border-border"
                          }`}
                        >
                          <span className="mb-1 flex items-center gap-2">
                            <Icon className={`h-4 w-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                            <span className="text-sm font-medium">{type.label}</span>
                          </span>
                          <span className="block text-xs text-muted-foreground">{type.description}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
                <div className="space-y-2">
                  <Label htmlFor="message">Опишите текущий процесс</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Откуда приходят обращения? Что команда делает вручную? Где теряются время или следующий контакт?"
                    className="min-h-[130px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Mail className="mr-2 h-4 w-4" /> Подготовить письмо
                </Button>
                <p className="text-xs leading-relaxed text-muted-foreground" role="note">
                  Откроется почтовое приложение с заполненным черновиком. Чтобы отправить запрос,
                  нажмите «Отправить» в своём приложении. Данные не передаются этому сайту.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="mb-4 font-semibold">Написать напрямую</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full justify-start">
                    <a href="https://t.me/a_trshncv" target="_blank" rel="noopener noreferrer">
                      <Send className="mr-3 h-4 w-4" /> Написать в Telegram
                      <Badge variant="secondary" className="ml-auto text-xs">Удобный способ</Badge>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="mailto:alexander.trishencov@gmail.com">
                      <Mail className="mr-3 h-4 w-4" /> Написать на email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="mb-3 font-semibold">Контактная информация</h3>
                <div className="space-y-1">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const details = (
                      <div className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/50">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            {item.label}
                            {item.preferred && <Badge variant="secondary" className="py-0 text-xs">Быстро</Badge>}
                          </span>
                          <span className="block truncate font-medium">{item.value}</span>
                        </span>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {details}
                      </a>
                    ) : <div key={item.label}>{details}</div>;
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Для первого разговора достаточно описать текущий путь заявки и один этап,
                который хотелось бы снять с команды.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
