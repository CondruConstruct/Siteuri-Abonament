# Siteuri-Abonament (RO + RU + EN)

Website complet multi-page pentru companie de creare site-uri, realizat cu **Vite + React + TypeScript + Tailwind CSS**.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)

## Pagini incluse

1. Acasă (Home)
2. Servicii
3. Despre noi
4. Lucrările noastre
5. Contacte

## Funcționalități implementate

- Design modern premium dark + blue (`#0b0f17`, `#0a0a0a`, accente `#2f6bff`, `#00a3ff`)
- Fonturi Google: **Inter** + **Manrope**
- Header sticky + CTA „Contactează-ne”
- Contacte mereu vizibile în header + footer:
  - `jbpsuport@gmail.com`
  - `+37368694844`
- Site trilingv complet: **RO / RU / EN** (toggle în header, persistă în localStorage)
- Modal contact reutilizabil (accesibil):
  - close cu `ESC`
  - close la click outside
  - focus trap
  - copiere email/telefon + `mailto:`/`tel:`
- Butoanele de tip „Contactează-ne”, „Procura”, „Alege planul”, „Cere ofertă” deschid modalul
- Floating contact button (dreapta jos)
- Scroll reveal animations + micro-interacțiuni hover
- Responsive pe mobil / tabletă / desktop
- SEO de bază pe fiecare pagină:
  - title + description
  - OpenGraph simplu
- Formular Contacte cu trimitere directă pe Telegram

## Structură importantă

- `src/config/pricingData.ts` – datele pachetelor (ușor de modificat)
- `src/content/siteContent.ts` – tot conținutul RO/RU/EN (texte, FAQ, testimoniale, SEO)
- `src/components/` – componente reutilizabile (`Header`, `Footer`, `PricingCards`, `ContactModal`, `LanguageToggle`, `Section`)
- `src/pages/` – paginile principale
- `src/utils/sendTelegramLead.ts` – trimiterea formularului către Telegram Bot API

## Instalare și rulare locală

### 1) Intră în proiect

```bash
cd "C:\Users\condr\Desktop\Siteuri-Abonament"
```

### 2) Instalează dependențele

```bash
npm install
```

### 3) Configurează variabilele pentru Telegram

Creează `.env.local`:

```env
VITE_TELEGRAM_BOT_TOKEN=...
VITE_TELEGRAM_CHAT_ID=...
```

### 4) Rulează în development (port 8006)

```bash
npm run dev -- --host 0.0.0.0 --port 8006
```

Acces local:

- `http://localhost:8006`

## Deploy GitHub Pages

Workflow-ul `.github/workflows/deploy-pages.yml` folosește GitHub Secrets:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## Build + verificări

```bash
npm run lint
npm run build
```

## Notă

Formularul din Contacte trimite mesajul către Telegram prin Bot API și, la succes, afișează confirmare în UI.
