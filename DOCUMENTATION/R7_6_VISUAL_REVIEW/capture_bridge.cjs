const playwrightPath = 'C:\\Users\\mathi\\AppData\\Local\\npm-cache\\_npx\\e41f203b7505f1fb\\node_modules\\playwright';
const { chromium } = require(playwrightPath);
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname);

const viewports = [
  { width: 390,  height: 844,  name: 'bridge_390'  },
  { width: 768,  height: 1024, name: 'bridge_768'  },
  { width: 1024, height: 768,  name: 'bridge_1024' },
  { width: 1440, height: 900,  name: 'bridge_1440' },
];

(async () => {
  const browser = await chromium.launch();
  const allMeasurements = {};

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

    // Scroll bridge into view
    await page.evaluate(() => {
      const el = document.getElementById('payroll-bridge');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await page.waitForTimeout(500);

    // Element screenshot
    const bridgeEl = await page.$('#payroll-bridge');
    if (bridgeEl) {
      await bridgeEl.screenshot({ path: path.join(outDir, `${vp.name}_element.png`) });
      console.log(`Captured element screenshot: ${vp.name}_element.png`);
    } else {
      console.log(`ERROR: #payroll-bridge not found at ${vp.name}`);
    }

    // Viewport screenshot (bridge scrolled into view)
    await page.screenshot({ path: path.join(outDir, `${vp.name}_viewport.png`) });
    console.log(`Captured viewport screenshot: ${vp.name}_viewport.png`);

    // Programmatic measurements
    const m = await page.evaluate(() => {
      const bridge = document.getElementById('payroll-bridge');
      if (!bridge) return { error: 'bridge not found' };

      const cta = bridge.querySelector('a');
      const textDiv = bridge.querySelector('div');
      const bridgeRect = bridge.getBoundingClientRect();
      const ctaRect = cta ? cta.getBoundingClientRect() : null;
      const textRect = textDiv ? textDiv.getBoundingClientRect() : null;

      return {
        bridge_scrollWidth: bridge.scrollWidth,
        bridge_clientWidth: bridge.clientWidth,
        bridge_offsetWidth: bridge.offsetWidth,
        bridge_left: Math.round(bridgeRect.left * 10) / 10,
        bridge_right: Math.round(bridgeRect.right * 10) / 10,
        bridge_width: Math.round(bridgeRect.width * 10) / 10,
        textDiv_width: textRect ? Math.round(textRect.width * 10) / 10 : null,
        cta_left: ctaRect ? Math.round(ctaRect.left * 10) / 10 : null,
        cta_right: ctaRect ? Math.round(ctaRect.right * 10) / 10 : null,
        cta_width: ctaRect ? Math.round(ctaRect.width * 10) / 10 : null,
        doc_scrollWidth: document.documentElement.scrollWidth,
        window_innerWidth: window.innerWidth,
        PASS_no_horiz_overflow: document.documentElement.scrollWidth <= window.innerWidth,
        PASS_cta_inside_left: ctaRect ? ctaRect.left >= bridgeRect.left - 2 : false,
        PASS_cta_inside_right: ctaRect ? ctaRect.right <= bridgeRect.right + 2 : false,
        PASS_text_not_collapsed: textRect ? textRect.width > 80 : false,
        PASS_bridge_scrollWidth_ok: bridge.scrollWidth <= bridge.clientWidth,
      };
    });

    allMeasurements[`${vp.name}_${vp.width}x${vp.height}`] = m;

    console.log(`\n=== ${vp.name} (${vp.width}x${vp.height}) ===`);
    Object.entries(m).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

    await context.close();
  }

  await browser.close();

  fs.writeFileSync(
    path.join(outDir, 'bridge_measurements.json'),
    JSON.stringify(allMeasurements, null, 2)
  );
  console.log('\nAll done. Measurements saved to bridge_measurements.json');
})().catch(e => { console.error(e); process.exit(1); });
