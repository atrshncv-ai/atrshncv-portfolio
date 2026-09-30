# atrshncv-portfolio

Personal portfolio of Alexander Trishencov, an AI Automation Specialist. This Russian-language, dark, single-page site presents case studies, skills, experience and contact links.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000)

## Overview

The portfolio includes three featured case studies, six smaller projects, a skills matrix, the client engagement process, work experience and direct contact options. The site is exported as static files and does not need a server at runtime. The contact panel and form direct visitors to Telegram or email.

## Key capabilities

- Selected projects include BTC Sarria, AI Music Generator and Content Factory.
- **Skills matrix** covering LLM and AI, workflow automation, integrations, development and GIS.
- **Engagement process** from diagnostics and architecture through implementation and support.
- **Contact options** that open Telegram or an email draft; there is no server-side contact form.

## Architecture

Next.js 16 App Router with React 19, TypeScript and Tailwind CSS 4. Site content is authored in the application; the production build exports static HTML, CSS, JavaScript and assets to `out/`.

GitHub Actions installs dependencies with `npm ci` from `package-lock.json`, runs the static build and publishes `out/` to GitHub Pages. The workflow runs on pushes to `main` and can also be started manually from the Actions tab.

## Tech stack

- **Framework:** Next.js 16, React 19, TypeScript 5
- **UI:** Tailwind CSS 4, Radix UI, Framer Motion, Lucide React, Recharts
- **Build and hosting:** npm, Next.js static export, GitHub Actions and GitHub Pages

## Quick start

```bash
npm install
npm run dev        # Start the local development server at http://localhost:3000
npm run build      # Export the static site to out/
```

## Free GitHub Pages deployment

This public repository can use GitHub Pages on GitHub Free. The site URL is <https://atrshncv-ai.github.io/atrshncv-portfolio/>; a custom domain is optional.

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`; the workflow builds and publishes the site. To deploy manually, open **Actions → Deploy to GitHub Pages → Run workflow**.

No server, API keys or paid hosting service are required for this static deployment.

## Project status

The portfolio is actively maintained and extended with new case studies.

## My contribution

Designed and built the portfolio, its information architecture, Russian copy and case-study format. Implemented the static contact experience and GitHub Pages publishing workflow.

## Limitations

- Site content and interface are currently in Russian.
- The contact form opens an email draft in the visitor's email application; the visitor sends it from there. Telegram and the email address are also available as direct links.

## License

No license file is included; all rights reserved.

---

# atrshncv-portfolio

Персональное портфолио Александра Трищенкова, специалиста по AI-автоматизации. Это русскоязычный одностраничный сайт в тёмной теме с кейсами, навыками, опытом и контактами.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000)

## Обзор

В портфолио собраны три главных кейса, шесть дополнительных проектов, матрица навыков, процесс работы с клиентами, опыт и способы связи. Сайт экспортируется в статические файлы и не требует сервера для показа. Панель связи и форма направляют посетителя в Telegram или email.

## Возможности

- Среди проектов — BTC Sarria, AI Music Generator и Content Factory.
- **Матрица навыков** по LLM и AI, автоматизации процессов, интеграциям, разработке и GIS.
- **Процесс работы**: от диагностики и архитектуры до внедрения и поддержки.
- **Способы связи**: ссылки на Telegram и email; форма открывает черновик письма и не отправляет его через сервер.

## Архитектура

Next.js 16 App Router, React 19, TypeScript и Tailwind CSS 4. Контент хранится в приложении; production-сборка создаёт статические HTML, CSS, JavaScript и ресурсы в `out/`.

GitHub Actions устанавливает зависимости командой `npm ci` по `package-lock.json`, запускает статическую сборку и публикует `out/` в GitHub Pages. Workflow запускается при push в `main`; его также можно запустить вручную во вкладке Actions.

## Технологии

- **Фреймворк:** Next.js 16, React 19, TypeScript 5
- **Интерфейс:** Tailwind CSS 4, Radix UI, Framer Motion, Lucide React, Recharts
- **Сборка и публикация:** npm, статический экспорт Next.js, GitHub Actions и GitHub Pages

## Быстрый старт

```bash
npm install
npm run dev        # Запуск локального сайта: http://localhost:3000
npm run build      # Статическая сборка сайта в out/
```

## Бесплатная публикация на GitHub Pages

Для этого публичного репозитория GitHub Pages доступен на бесплатном тарифе GitHub Free. Адрес сайта: <https://atrshncv-ai.github.io/atrshncv-portfolio/>; собственный домен подключать необязательно.

1. Откройте в репозитории **Settings → Pages**.
2. В разделе **Build and deployment** выберите для **Source** вариант **GitHub Actions**.
3. Отправьте изменения в `main` — workflow соберёт и опубликует сайт. Для ручного запуска откройте **Actions → Deploy to GitHub Pages → Run workflow**.

Для статической публикации не нужны сервер, API-ключи или платный хостинг.

## Статус проекта

Портфолио развивается и регулярно пополняется новыми кейсами.

## Мой вклад

Спроектировал и разработал портфолио, его информационную архитектуру, русскоязычные тексты и формат кейсов. Реализовал статический сценарий связи и публикацию сайта через GitHub Pages.

## Ограничения

- Контент и интерфейс пока только на русском языке.
- Форма открывает черновик письма в почтовом приложении посетителя; отправить его нужно самостоятельно. Также доступны прямые ссылки на Telegram и email.

## Лицензия

Лицензионного файла в репозитории нет; все права защищены.
