# Mapwise Task

Мобільний застосунок на `Expo + React Native` з роутингом через `expo-router`.

## Технології

- `expo` `react-native` `react`
- `expo-router`
- `mobx` `mobx-react-lite`
- `typescript`
- `eslint` (`expo lint`)

## Структура проєкту

```text
app/                  # екрани та маршрути (expo-router)
components/           # перевикористовувані UI-компоненти
constants/            # константи (кольори тощо)
hooks/                # кастомні хуки
stores/               # стани/стори
assets/               # статичні ресурси (зображення)
```

## Швидкий старт

```bash
npm install
npm run start
```

Корисні команди:

```bash
npm run ios
npm run android
npm run web
npm run lint
npx tsc --noEmit
```

## Pre-push checklist

Перед пушем рекомендовано:

```bash
npm run lint
npx tsc --noEmit
```

Додатково (за потреби): перевірити запуск через `npx expo start`.

## Git workflow

```bash
git add .
git commit -m "your message"
git push
```

## Репозиторій

Цільовий remote:

`https://github.com/ananiev-oleksandr/mapwise-task.git`

## Документація

- Expo docs: https://docs.expo.dev/
- Expo Router: https://docs.expo.dev/router/introduction/
