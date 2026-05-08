IRON THERAPY AI DEBUG FIX

Upload this entire package to your repo root, replacing old files.

This fix:
- Adds clear AI status text under each meal
- Makes Estimate Macros show alerts if something fails
- Confirms button click
- Confirms missing photo
- Confirms missing API key/server errors
- Keeps /api/analyze-meal.js in the correct api folder

After upload:
1. Commit changes
2. Redeploy in Vercel
3. Confirm OPENAI_API_KEY exists in Vercel Environment Variables
4. Test Nutrition > Add Meal > Upload Photo > Estimate Macros
