IRON THERAPY ICON + AI MEAL ANALYSIS UPDATE

Upload ALL files/folders to your repo root:
- index.html
- styles.css
- app.js
- manifest.json
- logo.jpg
- apple-touch-icon.png
- icon-192.png
- icon-512.png
- package.json
- api/analyze-meal.js
- README.txt

Custom App Icon:
- iPhone Home Screen icon now uses your skull fitness logo.
- After deploying, delete the old Home Screen app and add it again from Safari.

AI Meal Analysis:
- The Estimate Macros button now calls /api/analyze-meal.
- It requires an OpenAI API key saved in Vercel.

Vercel Environment Variable:
Name:
OPENAI_API_KEY

Optional:
OPENAI_MEAL_MODEL
Default:
gpt-4.1-mini

Important:
AI meal macros are estimates. Always review and edit serving sizes/macros manually when needed.
