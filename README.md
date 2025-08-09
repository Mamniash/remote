This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Обзор кодовой базы

- **Next.js проект**: корень содержит стандартные конфиги (`next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`) и скрипты для разработки/сборки в `package.json`. Среди зависимостей — `next`, `react`, `antd`, `framer-motion`, `tailwindcss` и др.
- **Каталог `src/app`**: корневой макет (`layout.tsx`) задаёт метаданные и общий HTML‑каркас, а `page.tsx` собирает главную страницу из компонентов интерфейса.
- **Каталог `src/components`**: отдельные секции/виджеты (шапка, геро-блок, отзывы, модальные окна и пр.), часто с анимацией через `framer-motion` и оформлением Tailwind CSS. Пример — форма подписки отправляет данные в Telegram.
- **Каталог `src/helpers`**: вспомогательные функции и хуки. В частности, `telegramApi.ts` реализует отправку заявок в Telegram; `useIsMobile.ts` определяет мобильное устройство по ширине окна.
- **Каталог `src/lib`**: небольшие утилиты, например `cn` для склеивания классов Tailwind через `clsx` и `tailwind-merge`.
- **Tailwind CSS**: настройки цветов, брейкпоинтов и плагина `tailwindcss-animate` вынесены в `tailwind.config.ts`.

## Что важно знать новичку

1. **Точка входа UI**: изучайте `src/app/layout.tsx` и `src/app/page.tsx` — они определяют глобальный каркас и структуру главной страницы.
2. **Компонентный подход**: каждый блок страницы — отдельный компонент в `src/components`. Это облегчает переиспользование и стилизацию.
3. **Интеграция с внешними сервисами**: форма подписки (`SubscriptionForm`) использует `fetch` и Telegram Bot API для отправки заявок, плюс локальное ограничение частоты отправок.
4. **Адаптивность и UX**: Tailwind CSS и кастомный хук `useIsMobile` помогают адаптировать UI под разные устройства; `framer-motion` отвечает за анимации.
5. **Настройки окружения**: Tailwind, TypeScript и ESLint уже сконфигурированы. Запуск dev-сервера — `npm run dev` (или `yarn/pnpm/bun dev`) при наличии Node.js, как указано в README.

## Куда двигаться дальше

1. **Документация Next.js** — освойте маршрутизацию, Server Components и оптимизацию: <https://nextjs.org/docs>
2. **Tailwind CSS и анимации** — изучите правила из `tailwind.config.ts`, плагин `tailwindcss-animate` и работу с `framer-motion`.
3. **Ant Design** — дополнительные компоненты и стили; обратите внимание на `src/app/AntdRegistry.tsx`.
4. **Интеграция с внешними API** — посмотрите, как `helpers/telegramApi.ts` формирует запросы; изучите ограничения и безопасность при работе с токенами.
5. **Расширение функционала** — добавляйте новые секции в `src/components`, учитывая логику модальных окон и отправки форм.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
