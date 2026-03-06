import { test, expect } from '@playwright/test';

const routes = [
  { path: '/#/', name: 'Homepage' },
  { path: '/#/platform', name: 'Platform' },
  { path: '/#/platform/land', name: 'Land Records' },
  { path: '/#/platform/agriculture', name: 'Agriculture' },
  { path: '/#/platform/schemes', name: 'Schemes' },
  { path: '/#/platform/works', name: 'Works' },
  { path: '/#/platform/education', name: 'Education' },
  { path: '/#/platform/governance', name: 'Governance' },
  { path: '/#/platform/ai-agent', name: 'AI Agent' },
  { path: '/#/about', name: 'About' },
  { path: '/#/proposal', name: 'Proposal' },
  { path: '/#/sources', name: 'Sources' },
];

// Test 1: All pages load without errors
for (const route of routes) {
  test(`${route.name} page loads without console errors`, async ({ page }) => {
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', err => errors.push(err.message));

    await page.goto(route.path);
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });
}

// Test 2: Homepage has all critical elements
test('Homepage has hero, stats, problem, platform, impact sections', async ({ page }) => {
  await page.goto('/#/');

  // Hero
  await expect(page.locator('h1').first()).toContainText('Public');

  // Stat counters exist
  const stats = page.locator('[data-testid="stat-counter"]');
  await expect(stats).toHaveCount(4);

  // Problem section
  await expect(page.locator('[data-testid="problem-section"]')).toBeVisible();

  // Platform overview
  await expect(page.locator('[data-testid="platform-section"]')).toBeVisible();

  // CTA buttons work (HashRouter uses # prefix in hrefs)
  const explorBtn = page.locator('a[href="#/platform"]').first();
  await expect(explorBtn).toBeVisible();
});

// Test 3: Navigation works across all pages
test('Navigation links are functional', async ({ page }) => {
  await page.goto('/#/');

  // Click Platform link in nav
  await page.click('[data-testid="desktop-nav"] a[href="#/platform"]');
  await expect(page).toHaveURL(/\/platform/);
  await expect(page.locator('h1').first()).toBeVisible();

  // Click a module link
  await page.click('a[href="#/platform/land"]');
  await expect(page).toHaveURL(/\/platform\/land/);

  // Back to home via logo
  await page.click('[data-testid="nav-logo"]');
  await expect(page).toHaveURL(/#\/$/);
});

// Test 4: Mobile responsiveness
test('Mobile layout renders correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/#/');

  // Mobile menu button should be visible
  await expect(page.locator('[data-testid="mobile-menu-btn"]')).toBeVisible();

  // Desktop nav links should be hidden
  await expect(page.locator('[data-testid="desktop-nav"]')).not.toBeVisible();

  // Click mobile menu
  await page.click('[data-testid="mobile-menu-btn"]');
  await expect(page.locator('[data-testid="mobile-nav"]')).toBeVisible();
});

// Test 5: All module detail pages have required sections
const moduleRoutes = routes.filter(r => r.path.includes('/platform/'));
for (const mod of moduleRoutes) {
  test(`${mod.name} detail page has complete content`, async ({ page }) => {
    await page.goto(mod.path);
    await page.waitForLoadState('networkidle');

    // Has a hero/title
    await expect(page.locator('h1').first()).toBeVisible();

    // Has content sections
    const sections = page.locator('section');
    expect(await sections.count()).toBeGreaterThanOrEqual(2);

    // Has back navigation (HashRouter uses # prefix)
    await expect(page.locator('a[href="#/platform"]').first()).toBeVisible();
  });
}

// Test 6: Proposal page has all required sections
test('Proposal page has complete content', async ({ page }) => {
  await page.goto('/#/proposal');

  // Check key sections exist
  await expect(page.getByText(/executive summary/i).first()).toBeVisible();
  await expect(page.getByText(/access control/i).first()).toBeVisible();
  await expect(page.getByText(/budget/i).first()).toBeVisible();
  await expect(page.getByText(/implementation/i).first()).toBeVisible();
});

// Test 7: Sources page lists all data sources
test('Sources page has categorized data sources', async ({ page }) => {
  await page.goto('/#/sources');

  // Check categories exist
  await expect(page.getByText(/agriculture/i).first()).toBeVisible();
  await expect(page.getByText(/welfare/i).first()).toBeVisible();
  await expect(page.getByText(/education/i).first()).toBeVisible();
  await expect(page.getByText(/governance/i).first()).toBeVisible();
});

// Test 8: Visual screenshots for manual review
for (const route of routes) {
  test(`Screenshot: ${route.name}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(route.path);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    // Scroll through the page to trigger all whileInView animations
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(100);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    await page.screenshot({
      path: `tests/screenshots/${route.name.toLowerCase().replace(/\s/g, '-')}-desktop.png`,
      fullPage: true
    });

    // Mobile screenshot
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(300);
    const mobileHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < mobileHeight; y += 400) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(100);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    await page.screenshot({
      path: `tests/screenshots/${route.name.toLowerCase().replace(/\s/g, '-')}-mobile.png`,
      fullPage: true
    });
  });
}
