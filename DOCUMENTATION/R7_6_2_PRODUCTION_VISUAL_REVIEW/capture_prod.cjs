const playwrightPath = 'C:\\Users\\mathi\\AppData\\Local\\npm-cache\\_npx\\e41f203b7505f1fb\\node_modules\\playwright';
const { chromium } = require(playwrightPath);
const path = require('path');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const targetUrl = 'https://ezy-web-landing-production.up.railway.app/';
  await page.goto(targetUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000); // Wait for fonts, images, and animations

  const sizes = [
    { width: 1440, height: 900, name: 'desktop_1440' },
    { width: 1280, height: 800, name: 'desktop_1280' },
    { width: 1024, height: 768, name: 'tablet_1024' },
    { width: 768, height: 1024, name: 'tablet_768' },
    { width: 390, height: 844, name: 'mobile_390' }
  ];

  for (const s of sizes) {
    await page.setViewportSize({ width: s.width, height: s.height });
    await page.screenshot({ path: `DOCUMENTATION/R7_6_2_PRODUCTION_VISUAL_REVIEW/prod_${s.name}.png` });
  }

  // Full page desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: `DOCUMENTATION/R7_6_2_PRODUCTION_VISUAL_REVIEW/prod_desktop_1440_full.png`, fullPage: true });

  // Dedicated live screenshots
  // 1. Hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_2_PRODUCTION_VISUAL_REVIEW/prod_hero.png` });

  // 2. Pricing desktop
  const pricingEl = await page.$('#pricing');
  await pricingEl.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_2_PRODUCTION_VISUAL_REVIEW/prod_pricing_desktop.png` });

  // 3. Pricing mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await pricingEl.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_2_PRODUCTION_VISUAL_REVIEW/prod_pricing_mobile.png` });

  // 4. Payroll Simulator -> Pricing transition
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(() => {
    document.querySelector('#pricing').scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_2_PRODUCTION_VISUAL_REVIEW/prod_payroll_pricing_transition.png` });

  // 5. Pricing -> Employee Experience
  await page.evaluate(() => {
    document.querySelector('#pricing').nextElementSibling.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_2_PRODUCTION_VISUAL_REVIEW/prod_pricing_experience_transition.png` });

  await browser.close();
}

main().catch(console.error);
