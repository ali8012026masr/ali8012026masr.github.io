import { test, expect } from '@playwright/test';

test.describe('Mohammad Ali Sikder Ramim Developer Portfolio', () => {
  test('should render homepage with correct hero, title, and primary stack', async ({ page }) => {
    await page.goto('/');

    // Check document title
    await expect(page).toHaveTitle(/Mohammad Ali Sikder Ramim/);

    // Verify main headings
    const heroTitle = page.locator('#hero-title');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText('Java, Spring Boot');
    await expect(heroTitle).toContainText('Angular');

    // Verify presence of primary flagship project card
    const horizonCard = page.locator('text=Horizon — All-in-One Travel Booking Platform');
    await expect(horizonCard).toBeVisible();
  });

  test('should navigate to Horizon deep case study route and display architectural details', async ({ page }) => {
    await page.goto('/projects/horizon');

    // Title verification
    await expect(page).toHaveTitle(/Horizon/);

    // Heading and security details
    await expect(page.locator('h1')).toContainText('Horizon');
    await expect(page.locator('text=Per-User Dynamic HMAC Token Revocation')).toBeVisible();

    // Verify status pills
    const implementedPill = page.locator('text=Implemented').first();
    await expect(implementedPill).toBeVisible();

    // Back button works
    await page.click('text=Back to All Projects');
    await expect(page).toHaveURL(/.*#projects/);
  });

  test('should navigate to Bangla Akinator algorithmic case study', async ({ page }) => {
    await page.goto('/projects/bangla-akinator');

    await expect(page).toHaveTitle(/Akinator/);
    await expect(page.locator('h1')).toContainText('Bangla Akinator');
    await expect(page.locator('text=Shannon Entropy & Information Gain')).toBeVisible();
  });

  test('should display styled 404 page for unknown routes', async ({ page }) => {
    await page.goto('/unknown-random-route');

    await expect(page.locator('h1')).toContainText('Page Not Found');
    const returnBtn = page.locator('text=Return to Base');
    await expect(returnBtn).toBeVisible();

    await returnBtn.click();
    await expect(page).toHaveURL('/');
  });

  test('should toggle theme between light, dark, and system modes', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');

    // Select Dark mode
    await page.click('button[aria-label="Dark mode"]');
    await expect(html).toHaveAttribute('data-theme', 'dark');

    // Select Light mode
    await page.click('button[aria-label="Light mode"]');
    await expect(html).toHaveAttribute('data-theme', 'light');

    // Select System mode
    await page.click('button[aria-label="System theme"]');
    const themeAttr = await html.getAttribute('data-theme');
    expect(['light', 'dark']).toContain(themeAttr);
  });

  test('should verify CV download links are present', async ({ page }) => {
    await page.goto('/');

    const cvLinks = page.locator('a[download="Mohammad-Ali-Sikder-Ramim-CV.pdf"]');
    const count = await cvLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);

    const firstHref = await cvLinks.first().getAttribute('href');
    expect(firstHref).toContain('ramim-cv.pdf');
  });
});
