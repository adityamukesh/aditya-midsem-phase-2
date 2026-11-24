# Little Recipe Book

WEB 301 — Assignment 7, Problem Statement P3 (Recipe Book)

## Student details

- Name: YOUR NAME
- Roll number / UID: YOUR UID
- Live Vercel deployment: ADD YOUR VERCEL LINK

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Dataset

Place the provided P3 `recipes.js` dataset in `src/data/recipes.js`. The app currently expects the file to export a named array called `recipes`, with each recipe containing `id`, `name`, `emoji`, `cuisine`, `cookingTime`, `difficulty`, `type`, and `ingredients` fields. Keep the instructor-provided dataset structure unchanged; if its export or field names differ, update the app imports and field references to match it.

## Routes

- `/` — Home
- `/recipes` — Search, filter, sort, and save recipes
- `/recipes/:id` — Recipe details and ingredients
- `/favourites` — Saved recipes and their total cooking time
# aditya-midsem-phase-2
