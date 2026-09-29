"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, X } from "lucide-react";
import { publicAssetPath } from "@/lib/public-path";

const telegramUrl = "https://t.me/a_trshncv";
const emailUrl = "mailto:alexander.trishencov@gmail.com";

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {isOpen && (
        <section
          aria-label="Связаться с Александром"
          className="w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        >
          <header className="flex items-center justify-between border-b border-border/60 bg-card p-4">
            <div className="flex items-center gap-3">
              <img
                src={publicAssetPath("/bot-avatar.png")}
                alt="Куруш"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">Куруш</div>
                <div className="text-xs text-muted-foreground">Помощник по связи</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть панель связи"
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </header>

          <div className="space-y-4 p-4">
            <div className="rounded-2xl bg-muted p-4">
              <p className="text-sm leading-relaxed">
                Расскажите о задаче — Александр ответит лично. Выберите удобный способ связи.
              </p>
            </div>
            <Button asChild className="w-full justify-start">
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                <Send className="mr-3 h-4 w-4" />
                Написать в Telegram
                <Badge variant="secondary" className="ml-auto text-xs">Быстрее</Badge>
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <a href={emailUrl}>
                <Mail className="mr-3 h-4 w-4" />
                Написать на email
              </a>
            </Button>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Закрыть панель связи" : "Открыть панель связи"}
        aria-expanded={isOpen}
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-card shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <>
            <img
              src={publicAssetPath("/bot-avatar.png")}
              alt=""
              className="h-full w-full rounded-full object-cover p-1"
            />
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageSquare className="h-3 w-3" />
            </span>
          </>
        )}
      </button>
    </div>
  );
}
