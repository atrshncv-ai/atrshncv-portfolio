# Что уже построено

## Границы, решённые в спецификации

- Статическое приложение Next.js владеет портфолио и контактными действиями; `npm run build` выдаёт готовый статический сайт в `out/` с путями под `/atrshncv-portfolio/`.
- Публикация GitHub Pages владеет workflow и передаёт содержимое `out/` в Pages при push в `main` или ручном запуске.
- Швы приёмки: production-сборка и её выходные файлы; workflow-передача каталога `out/` в Pages.

## Общие правила проекта

- Next.js 16.1.1, React 19, TypeScript 5, npm; lock-файл — `package-lock.json`.
- Локальная разработка: `npm run dev`; production-сборка: `npm run build`.
- Автоматизированные тесты не добавлять и не запускать. Не менять разделы и дизайн портфолио, кроме статического поведения контактов и путей ресурсов.
- Task 01 владеет `src/`, `public/`, `next.config.ts` и `package.json`; Task 02 владеет `.github/workflows/` и `README.md`.
- Не добавлять зависимости. Если для требуемой сборки не хватает зависимости или доступа, вернуть `BLOCKED` и назвать недостающее.

## Из таска 02 — автопубликация

- Workflow `Deploy to GitHub Pages` публикует содержимое `out/`; нужен выбранный в Settings → Pages источник `GitHub Actions`.

## Из таска 01 — статическое приложение

- `npm run build` → статический сайт в `out/`.
- `BASE_PATH = "/atrshncv-portfolio"`.
- `publicAssetPath(path: string) -> string`.
- Форма открывает `mailto:`-черновик; панель связи ведёт на Telegram и email.
