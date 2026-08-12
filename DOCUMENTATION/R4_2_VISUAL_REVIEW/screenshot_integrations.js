const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(2500);
  const section = await page.$('section:has-text("Connect ezyHR with your existing software stack")');
  if (section) {
    await section.screenshot({ path: 'DOCUMENTATION/R4_2_VISUAL_REVIEW/verify_integrations_crop.png' });
    console.log('Integrations section screenshot saved.');
  } else {
    console.log('Section not found by selector.');
  }
  await browser.close();
})();
