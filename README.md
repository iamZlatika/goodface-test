# Goodface Test (Next.js + React + Tailwind + TS)

Демо-сторінка замовлення проксі за макетом Figma: вибір кількості IP, періоду підписки й локації з підсумком замовлення.

Figma: https://www.figma.com/design/0Fg3YESzCaW77sCQdF8OAZ/Goodface-%7C-Test-task-front-end-dev?node-id=0-1

## Технології
- Next.js 16 (App Router, React Server/Client Components)
- React 19, React Compiler увімкнено
- TypeScript (strict)
- TailwindCSS v4

## Відповідність вимогам завдання
- Адаптивність: мобайл/десктоп, лейаути через Tailwind (`lg:*`), окремі компоненти для різних брейкпоінтів
- Компонентний підхід: сторінка зібрана з дрібних `ui` та `features`
- Semantic HTML + базовий a11y (ролі для кастомних віджетів)
- TailwindCSS використано як основну систему стилів
- Типізація з TypeScript
- Структура `app/` + компоненти в окремих папках

Деталі архітектури: див. `ARCHITECTURE.md`. Рев’ю з ризиками й поліпшеннями: `REVIEW.md`.

## Запуск локально
```bash

npm run dev

```
Відкрити http://localhost:3000

## Структура проекту (скорочено)
```
app/
  layout.tsx, page.tsx  # каркас і сторінка
components/
  layout/               # Sidebar, MobileHeader
  pages/                # композиція сторінки (ProductOrderPage)
  features/             # бізнес-компоненти (MainCard, SummaryCard, ...)
  ui/                   # дрібні перевикористовувані елементи (кнопки, іконки, card)
lib/                    # утиліти, словники, бізнес-логіка (discounts, ips, i18n)
providers/              # контексти (OrderProvider)
public/                 # статичні файли (флагі тощо)
```

Ключові місця:
- `components/pages/product-order-page.tsx` — складання сторінки
- `providers/order-provider.tsx` — стан замовлення (кількість, період, локація, total)
- `lib/discounts.ts` — розрахунок ціни/діапазонів
- `components/features/main-card/*` — селект локації, слайдер кількості, періоди
- `components/features/summary-card` — підсумок і промокод

## Скрипти
- `npm run dev` — запуск дев-сервера
- `npm run build` — продакшн білд
- `npm start` — запуск зібраної версії
- `npm run lint` — ESLint перевірка

