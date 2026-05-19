# Figma UI Gen — Complete Setup Guide

> Everything you need to push your project, restore it on a new machine, and get Copilot + Figma MCP working again.

---

## Part 1: Push to GitHub (do this now, on your current machine)

### Step 1 — create `.gitignore`
```bash
cd C:\Users\vaish\figma-ui-gen

echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
```

### Step 2 — initialize git and commit
```bash
git init
git add .
git commit -m "initial commit"
```

### Step 3 — create repo on GitHub
1. Go to [github.com](https://github.com) → click **New repository**
2. Name it `figma-ui-gen`
3. Leave it empty (no README, no .gitignore)
4. Copy the repo URL

### Step 4 — push
```bash
git remote add origin https://github.com/YOUR_USERNAME/figma-ui-gen.git
git branch -M main
git push -u origin main
```

---

## Part 2: Restore on a New Laptop (do this tomorrow)

### Step 1 — install Node.js
Download the **LTS version** from [nodejs.org](https://nodejs.org) and install it. Then verify:
```bash
node -v
npm -v
```

### Step 2 — install Angular CLI
```bash
npm install -g @angular/cli
```

### Step 3 — clone your repo
```bash
git clone https://github.com/YOUR_USERNAME/figma-ui-gen.git
cd figma-ui-gen
```

### Step 4 — install dependencies
```bash
npm install
```

### Step 5 — run the app
```bash
ng serve
```
Open [localhost:4200](http://localhost:4200)

---

## Part 3: Restore Copilot + Figma MCP

### Step 1 — install VS Code
Download from [code.visualstudio.com](https://code.visualstudio.com)

### Step 2 — install GitHub Copilot
Open VS Code → Extensions (`Ctrl+Shift+X`) → search **GitHub Copilot** → Install

### Step 3 — configure MCP
Press `Ctrl+Shift+P` → type `MCP` → select **Open MCP Configuration**, then paste:

```jsonc
{
  "servers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--stdio"],
      "env": {
        "FIGMA_API_KEY": "YOUR_NEW_API_KEY_HERE"
      }
    }
  }
}
```

### Step 4 — get a new Figma API key
1. Go to [figma.com](https://figma.com) → click your profile picture
2. **Settings → Security → Personal access tokens**
3. Click **Generate new token** → copy it
4. Paste it into `mcp.json` above replacing `YOUR_NEW_API_KEY_HERE`

> ⚠️ Your old API key was exposed in chat — always regenerate after that happens.

### Step 5 — restore the skill `.md` file
Copy your `figma-screen-gen.md` instruction file back into your project root, or store it in a separate repo so it's always available.

---

## Part 4: Fix Images Not Showing (angular.json patch)

If images downloaded by the agent aren't showing up, open `angular.json` and find the assets array under `build > options`. Change it from:

```json
{
  "glob": "**/*",
  "input": "src/assets"
}
```

to:

```json
{
  "glob": "**/*",
  "input": "src/assets",
  "output": "assets"
}
```

Then restart `ng serve`. Images at `src/assets/figma-images/` will now be served at `localhost:4200/assets/figma-images/`.

---

## Part 5: Getting Better Results from the Agent

### For multi-section Figma files, use this prompt format:
```
Generate Angular components from Figma file: YOUR_FILE_KEY

IMPORTANT:
- Fetch ALL pages from this file, not just the first one
- Each top-level frame = one component
- Do NOT stop after the first frame
- The file has multiple sections — generate ALL of them
```

### To target specific frames:
```
Generate components for frames: "Hero", "Discover", "Blend", "Different", "Morning", "Feedback"
from Figma file: YOUR_FILE_KEY
```

### To check what frames exist:
Open the Figma file → look at the left panel for page names and top-level frame names → list them explicitly in your prompt.

---

## Quick Reference

| Task | Command |
|---|---|
| Save progress | `git add . && git commit -m "progress" && git push` |
| Get latest on new machine | `git pull` |
| Install deps after clone | `npm install` |
| Run app | `ng serve` |
| Build for production | `ng build` |
| Open app in browser | `localhost:4200` |
| Test if image is served | `localhost:4200/assets/figma-images/FILENAME.png` |

---

## File Structure Reference

```
figma-ui-gen/
├── src/
│   ├── app/
│   │   ├── screens/          ← generated components go here
│   │   │   ├── index.ts
│   │   │   ├── hero.component.ts
│   │   │   └── ...
│   │   ├── app.component.html   ← contains only <router-outlet />
│   │   └── app.routes.ts        ← auto-updated with all routes
│   └── assets/
│       └── figma-images/     ← all exported Figma images go here
├── public/
├── angular.json              ← fix assets > output: "assets" if images break
├── mcp.json                  ← Figma MCP config (keep API key out of git!)
└── figma-screen-gen.md       ← Copilot instruction file
```

---

## Important Reminders

- **Never commit your Figma API key** — add `mcp.json` to `.gitignore` or remove the key before pushing
- **Regenerate your API key** after it gets exposed anywhere (chat, screenshot, etc.)
- **node_modules is never pushed** — always run `npm install` after cloning
- **Images need the `output: "assets"` fix** in `angular.json` for Angular 17+ projects