# GitHub Pages Deployment Guide

**Target Site:** `https://ali8012026masr.github.io/`  
**Repository Name:** `ali8012026masr.github.io`  
**Method:** Automated GitHub Actions Workflow (`.github/workflows/deploy.yml`)

---

## 1. Prerequisites & Repository Configuration

1. **Confirm Repository Settings on GitHub:**
   - Navigate to `https://github.com/ali8012026masr/ali8012026masr.github.io/settings/pages`.
   - Under **Build and deployment > Source**, select **GitHub Actions** (not "Deploy from a branch").

2. **Root Base Href (`/`):**
   - Because the repository name matches `username.github.io`, it serves directly from the domain root (`https://ali8012026masr.github.io/`).
   - The Angular build uses `--base-href /`.

---

## 2. SPA Deep-Linking & `404.html` Solution

Standard GitHub Pages servers return a generic 404 error when visitors directly access or refresh deep links such as `/projects/horizon`.

### How Our Automated Solution Works:
1. In the build step, `index.html` is automatically copied to `404.html` in the build distribution directory (`dist/frontend/browser/`).
2. When a visitor requests `/projects/horizon`, GitHub Pages serves `404.html`.
3. Because `404.html` is our Angular SPA shell, Angular initializes, reads the browser URL path `/projects/horizon`, and immediately routes to the corresponding case study component without flashing a 404 error.

---

## 3. Deployment Workflow Trigger

Any push to the `main` branch automatically triggers `.github/workflows/deploy.yml`:
```bash
git add .
git commit -m "feat: complete portfolio build with case studies"
git push origin main
```

To trigger manually:
- Go to the **Actions** tab in your GitHub repository.
- Select **Deploy Portfolio to GitHub Pages**.
- Click **Run workflow**.

---

## 4. Post-Deployment Verification Checklist

- [ ] Homepage loads over HTTPS at `https://ali8012026masr.github.io/`.
- [ ] Direct navigation to `https://ali8012026masr.github.io/projects/horizon` loads the case study.
- [ ] Hard page refresh on `/projects/horizon` works without a 404 error.
- [ ] Theme toggling between Light, Dark, and System persists across reloads.
- [ ] CV download downloads `Mohammad-Ali-Sikder-Ramim-CV.pdf`.
- [ ] Email copy button copies address to clipboard.
