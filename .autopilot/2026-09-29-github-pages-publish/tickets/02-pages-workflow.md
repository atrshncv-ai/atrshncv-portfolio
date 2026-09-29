# 02 — Автопубликация на GitHub Pages

**Требования:** R01, R03, R04  
**Blocked by:** нет  
**Зона:** `.github/workflows/`, `README.md`  
**Волна:** 1  
**Status:** done

## Что должно заработать

GitHub Actions собирает сайт из этого репозитория и публикует готовую статическую папку в GitHub Pages. В README остаются понятные шаги для адреса Pages и выбора GitHub Actions в настройках репозитория.

## Из брифа, дословно

> «свой репозиторий на гитхабе [https://github.com/atrshncv-design/atrshncv-portfolio](https://github.com/atrshncv-design/atrshncv-portfolio)»
> «разместить его на гитхабе»
> «Это возможно бесплатно?»

## Разделы спецификации

Истории 1, 3, 4; решения §4; критерии §7; сбои §10.

## Критерии приёмки

- [x] Workflow запускается при push в `main` и вручную из GitHub Actions.
- [x] Workflow использует `package-lock.json`, запускает production-сборку и передаёт только каталог `out/` в GitHub Pages.
- [x] Workflow использует официальные Pages Actions и необходимые минимальные permissions для публикации; API-ключи и платные сервисы не нужны.
- [x] README описывает бесплатный адрес `https://atrshncv-design.github.io/atrshncv-portfolio/`, выбор GitHub Actions как источника Pages и локальные команды статической сборки.
- [x] README больше не предписывает запускать сайт в production через Bun, standalone-сервер или Caddy.
- [x] Не добавлены и не запущены автоматизированные тесты.
