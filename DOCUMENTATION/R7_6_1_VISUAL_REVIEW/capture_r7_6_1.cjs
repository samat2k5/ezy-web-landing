const playwrightPath = 'C:\\Users\\mathi\\AppData\\Local\\npm-cache\\_npx\\e41f203b7505f1fb\\node_modules\\playwright';
const { chromium } = require(playwrightPath);
const path = require('path');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000); // Wait for fonts and animations

  const sizes = [
    { width: 1440, height: 900, name: 'desktop_1440' },
    { width: 1280, height: 800, name: 'desktop_1280' },
    { width: 1024, height: 768, name: 'tablet_1024' },
    { width: 768, height: 1024, name: 'tablet_768' },
    { width: 390, height: 844, name: 'mobile_390' }
  ];

  for (const s of sizes) {
    await page.setViewportSize({ width: s.width, height: s.height });
    await page.screenshot({ path: `DOCUMENTATION/R7_6_1_VISUAL_REVIEW/${s.name}.png` });
  }

  // Full page desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: `DOCUMENTATION/R7_6_1_VISUAL_REVIEW/desktop_1440_full.png`, fullPage: true });

  // A. Payroll Simulator -> Pricing transition (Desktop)
  const payrollPricingElement = await page.$('#payroll, #pricing'); 
  // Let's just scroll and take a screenshot manually of the intersection
  await page.evaluate(() => {
    document.querySelector('#pricing').scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_1_VISUAL_REVIEW/payroll_pricing_transition_desktop.png` });

  // B. Payroll Simulator -> Pricing transition (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    document.querySelector('#pricing').scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_1_VISUAL_REVIEW/payroll_pricing_transition_mobile.png` });

  // C. Pricing -> Employee Experience transition (Desktop)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(() => {
    document.querySelector('#pricing').nextElementSibling.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_1_VISUAL_REVIEW/pricing_experience_transition_desktop.png` });

  // D. Lower-page Security -> FAQ sequence
  await page.evaluate(() => {
    document.querySelector('#faq').previousElementSibling.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `DOCUMENTATION/R7_6_1_VISUAL_REVIEW/security_faq_sequence_desktop.png` });

  await browser.close();
}

main().catch(console.error);
