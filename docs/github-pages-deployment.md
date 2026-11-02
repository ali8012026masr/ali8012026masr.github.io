# GitHub Pages Deployment Guide (angular-cli-ghpages)

This guide documents the deployment workflow using `angular-cli-ghpages` (`ngh`), which builds the Angular 22 application and publishes the compiled static assets directly to the `gh-pages` branch.

---

## 1. Quick Deploy Commands

From the `frontend` directory:

### For User Site: `https://ali8012026masr.github.io/`
```bash
cd frontend
npm run deploy:user-site
```
*Builds with base href `/` and publishes to branch `gh-pages` on `ali8012026masr.github.io`.*

### For Project Repository: `https://ali8012026masr.github.io/MyPortfolio/`
```bash
cd frontend
npm run deploy:myportfolio
```
*Builds with base href `/MyPortfolio/` and publishes to branch `gh-pages` on `MyPortfolio`.*

---

## 2. GitHub Pages Settings Configuration

To display the deployed Angular frontend instead of a README markdown page:

1. Open your repository settings on GitHub:
   * **For `ali8012026masr.github.io`:** [Settings > Pages](https://github.com/ali8012026masr/ali8012026masr.github.io/settings/pages)
   * **For `MyPortfolio`:** [Settings > Pages](https://github.com/ali8012026masr/MyPortfolio/settings/pages)
2. Under **Build and deployment**:
   * **Source:** Select **Deploy from a branch**
   * **Branch:** Select **`gh-pages`**
   * **Folder:** Select **`/ (root)`**
3. Click **Save**.

---

## 3. What `angular-cli-ghpages` Automates

When `npx ngh` runs, it automatically handles key static hosting requirements:
- **`404.html` Creation:** Duplicates `index.html` to `404.html` so that Angular Router deep links (e.g., `/projects/horizon`) work on hard refresh without 404 errors.
- **`.nojekyll` File:** Generates a `.nojekyll` file at the root of `gh-pages`, preventing GitHub Pages from executing Jekyll transformations.
- **Isolated Branch:** Keeps your source code on `main` and compiled production assets on `gh-pages`.
