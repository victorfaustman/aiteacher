# AI Teacher Site

Персональный статический сайт для публикации по домену `aiteacher.by`.

## Что в проекте

- `index.html` — главная страница
- `about.html` — обо мне
- `projects.html` — проекты
- `articles.html` — статьи
- `contacts.html` — контакты
- `assets/` — стили, скрипты, изображения

## Локальная папка

- `D:\codex\ai_site`

## Домашний сервер

- SSH: `kopytov@192.168.100.58`
- Пользователь: `kopytov`
- Папка проекта: `/home/kopytov/sites/aiteacher`

## Текущий способ запуска на сервере

Сайт уже лежит на домашнем сервере и отдается через Docker + `nginx`.

Основная папка:

- `/home/kopytov/sites/aiteacher`

Проверка на сервере:

```bash
cd /home/kopytov/sites/aiteacher
docker compose ps
curl -I http://localhost
```

## Подготовка под GitHub Pages

Для GitHub Pages в проект добавлены:

- `CNAME` — домен `aiteacher.by`
- `.nojekyll` — отключение обработки Jekyll

## Что нужно для публикации через GitHub Pages

1. Создать репозиторий на GitHub.
2. Загрузить в него файлы этого проекта.
3. Включить GitHub Pages:
   - `Settings`
   - `Pages`
   - `Deploy from a branch`
   - branch: `main`
   - folder: `/ (root)`
4. Обновить DNS у регистратора:
   - `A`/`ALIAS` или поддерживаемые записи под GitHub Pages
   - `CNAME` для `www`, если нужен `www`

## Домен

- основной домен: `aiteacher.by`
- дополнительный: `www.aiteacher.by`

## Примечание

Если сайт публикуется через GitHub Pages, домашний сервер для публичного сайта уже не обязателен.
