
Saurav Tracker - React + Tailwind Starter (Deploy-ready)
=======================================================

How to run locally:
1. Install Node.js (v18+)
2. cd into project folder
3. npm install
4. npm run dev
5. Open http://localhost:5173

Tailwind setup notes:
- This starter uses Tailwind in dev mode. When you run `npm run dev`, Vite will process PostCSS/Tailwind.
- If you prefer to use Tailwind CLI, run `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch` and include output css.

Deploy to Vercel (quick):
1. Create a GitHub repo and push this project.
2. Create a Vercel account and import the GitHub repo.
3. Set Build Command: `npm run build`, Output Directory: `dist`
4. Deploy. Vercel will install dependencies and deploy automatically.

GitHub push (quick):
git init
git add .
git commit -m "Initial commit - Saurav Tracker Tailwind"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main

Next steps (Phase 2):
- Integrate Supabase for Auth & DB
- Implement Google Calendar two-way sync
