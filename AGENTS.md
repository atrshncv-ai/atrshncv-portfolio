<!-- autopilot:start -->
# atrshncv-portfolio

Русскоязычное портфолио Александра Трищенкова для собственников бизнеса, которым нужно внедрить AI. Основной фокус — разбор входящих обращений и клиентская поддержка: квалификация заявок, первые ответы и follow-up. Предложение — внедрение под ключ от разбора процесса и проектирования до интеграции и production.

## Технологии и структура

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4; зависимости фиксируются в `package-lock.json`.
- Страница и metadata: `src/app/page.tsx`, `src/app/layout.tsx`. Порядок секций главной страницы: `Navigation` → `Hero` → `Projects` → `About` → `Process` → `Skills` → `Experience` → `Contact` → `Footer` → `AIChat`.
- Секции живут в `src/components/portfolio/`. Их границы и якоря записаны в материалах прохода `.autopilot/2026-09-30-portfolio-positioning/interfaces.md`.
- Главный пример — завершённый Lead Processing Pipeline для ART RECORD: квалификация лида, запись на консультацию и follow-up. Описание показывает процесс и личную роль автора без неподтверждённых метрик.
- Публичные файлы — в `public/`; для ссылок на них используй `publicAssetPath` из `src/lib/public-path.ts`.
- GitHub Actions workflow публикации: `.github/workflows/deploy-pages.yml`.

## Сборка и публикация

- `npm ci` — зависимости установлены успешно.
- `npm run build` — статическая сборка прошла после текущих изменений; экспорт находится в `out/`.
- `npx tsc --noEmit` — проверка TypeScript прошла после текущих изменений.
- Локальная разработка: `npm run dev` (порт 3000; вывод пишется в `dev.log`).
- GitHub Pages обслуживает проект по базовому пути `/atrshncv-portfolio/`; конфигурация в `next.config.ts`. Сохраняй этот префикс у ресурсов и ссылок.
- Сайт экспортируется статически. Серверные API и runtime на Pages не работают. Шрифты Geist и Geist Mono подключены через `next/font/google` и требуют сетевого доступа к Google Fonts при сборке.
- Контакты в `src/components/portfolio/Contact.tsx` статические: форма открывает заполненный черновик через `mailto:`, также доступны Telegram и email.
- Сайт: https://atrshncv-ai.github.io/atrshncv-portfolio/. Workflow собирает `out/` при push в `main` или ручном запуске; источник Pages — GitHub Actions.
- Автотестов в проекте нет; не добавлять и не запускать их.

## Autopilot

- Работа ведётся навыком `/autopilot`. Состояние и прогресс: `.autopilot/state.js`, `.autopilot/dashboard.html`; требования хранятся в `.autopilot/`.
- T0 — проход по одной странице без разбиения на тикеты, выполняется целиком в одном контексте. OpenCode применяется только к задачам с тикетами.
- В текущем проходе компоненты разделены по ответственности согласно `interfaces.md`: Hero задаёт аудиторию и предложение; Projects — кейсы; About — специализацию; Process — этапы внедрения; Skills — компетенции; Experience — хронологию; Contact — статический запрос и каналы связи.
- Для продолжения скажи «продолжи автопилот»: состояние поднимется из `.autopilot/state.js`, переспрашивать ничего не нужно.
<!-- autopilot:end -->
