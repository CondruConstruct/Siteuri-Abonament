# Siteuri-Abonament (RO + RU)

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
- Site bilingv complet: **RO / RU** (toggle în header, persistă în localStorage)
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

## Structură importantă

- `src/config/pricingData.ts` – datele pachetelor (ușor de modificat)
- `src/content/siteContent.ts` – tot conținutul RO/RU (texte, FAQ, testimoniale, SEO)
- `src/components/` – componente reutilizabile (`Header`, `Footer`, `PricingCards`, `ContactModal`, `LanguageToggle`, `Section`)
- `src/pages/` – paginile principale

## Instalare și rulare locală

### 1) Intră în proiect

```bash
cd "C:\Users\condr\Desktop\Siteuri-Abonament"
```

### 2) Instalează dependențele

```bash
npm install
```

### 3) Rulează în development (port 8006)

```bash
npm run dev -- --host 0.0.0.0 --port 8006
```

Acces local:

- `http://localhost:8006`

## Build + verificări

```bash
npm run lint
npm run build
```

## Notă

Formularul din pagina Contacte este **fără backend** (conform cerinței). La submit afișează confirmare și oferă acțiuni directe de contact (copy / mailto / tel).
