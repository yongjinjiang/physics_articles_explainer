import { test, expect } from '@playwright/test';

const ARTICLES = [
  { slug: 'quantum-entanglement', name: 'Quantum Entanglement' },
  { slug: 'bekenstein-bound', name: 'Bekenstein Bound' }
];

test('monkey test - click all interactive elements and catch errors', async ({ page }) => {
  const browserErrors: string[] = [];
  const consoleMessages: string[] = [];

  // Capture browser console errors
  page.on('console', (msg) => {
    const text = msg.text();
    consoleMessages.push(text);

    if (msg.type() === 'error') {
      console.log(`[BROWSER_ERROR] ${text}`);
      browserErrors.push(text);
    } else if (msg.type() === 'warning') {
      console.log(`[BROWSER_WARNING] ${text}`);
    } else {
      console.log(`[BROWSER_LOG] ${text}`);
    }
  });

  // Capture page errors
  page.on('pageerror', (error) => {
    const errorText = `${error.name}: ${error.message}\n${error.stack}`;
    console.log(`[BROWSER_ERROR] Page Error: ${errorText}`);
    browserErrors.push(errorText);
  });

  // Test each article
  for (const article of ARTICLES) {
    console.log(`\n\n${'='.repeat(60)}`);
    console.log(`TESTING ARTICLE: ${article.name}`);
    console.log(`${'='.repeat(60)}\n`);

    // Navigate to the article page
    console.log('=== Navigating to article page ===');
    await page.goto(`http://localhost:5174/article/${article.slug}`);
    await page.waitForLoadState('networkidle');

  // Wait for the page to be fully rendered
  await page.waitForTimeout(1000);

  // Debug: Check the actual HTML of the first trigger
  const firstTrigger = await page.locator('.article-trigger').first();
  const firstTriggerHTML = await firstTrigger.evaluate(el => el.outerHTML);
  console.log('First trigger HTML:', firstTriggerHTML);

  // Check if explanations exist in DOM
  const explanationElements = await page.locator('[data-explanation-id]').all();
  console.log('Found explanation elements with data-explanation-id:', explanationElements.length);
  for (const el of explanationElements) {
    const dataId = await el.getAttribute('data-explanation-id');
    const id = await el.getAttribute('id');
    console.log(`  - Element with data-explanation-id="${dataId}", id="${id}"`);
  }

  // Also check all divs in the explanations container
  const allDivs = await page.locator('.space-y-6 > div').all();
  console.log('All divs in explanations container:', allDivs.length);

  console.log('\n=== Finding all clickable elements ===');

  // Find all clickable elements (buttons, links, elements with role="button")
  const clickableSelectors = [
    'button',
    'a',
    '[role="button"]',
    '[onclick]',
    '.article-trigger'
  ];

  const clickableElements = await page.locator(clickableSelectors.join(', ')).all();

  console.log(`Found ${clickableElements.length} clickable elements\n`);

  // Re-check explanations RIGHT before clicking
  const explanationsBeforeClicking = await page.locator('[data-explanation-id]').all();
  console.log('\n=== RIGHT BEFORE CLICKING ===');
  console.log('Explanations still in DOM:', explanationsBeforeClicking.length);
  for (const el of explanationsBeforeClicking) {
    const dataId = await el.getAttribute('data-explanation-id');
    console.log(`  - ${dataId}`);
  }
  console.log('===========================\n');

    // Click each element
    for (let i = 0; i < clickableElements.length; i++) {
      const element = clickableElements[i];

      try {
        // Get the text content for logging
        const text = await element.textContent();
        const trimmedText = text?.trim().substring(0, 50) || '(no text)';

        // Skip navigation links
        if (trimmedText.includes('View Original') || trimmedText.includes('Back to')) {
          console.log(`\n--- Skipping ${i + 1}/${clickableElements.length}: "${trimmedText}" ---`);
          continue;
        }

        console.log(`\n--- Click ${i + 1}/${clickableElements.length}: "${trimmedText}" ---`);

        // Check if element is visible and enabled
        const isVisible = await element.isVisible();
        const isEnabled = await element.isEnabled();

        if (!isVisible) {
          console.log('  ⚠️  Element not visible, skipping');
          continue;
        }

        if (!isEnabled) {
          console.log('  ⚠️  Element not enabled, skipping');
          continue;
        }

        // Record URL before click
        const urlBefore = page.url();

        // Click the element
        await element.click({ timeout: 5000 });

        // Wait a bit for any effects
        await page.waitForTimeout(500);

        // Check if navigation occurred
        const urlAfter = page.url();
        if (urlBefore !== urlAfter) {
          console.log(`  🔄 Navigation detected: ${urlAfter}`);
          console.log('  ⬅️  Going back');
          await page.goBack();
          await page.waitForLoadState('networkidle');
        }

        console.log('  ✅ Click successful');

      } catch (error: any) {
        console.log(`  ❌ Click failed: ${error.message}`);
      }
    }

    console.log(`\n=== Test Summary for ${article.name} ===`);
    console.log(`Total clickable elements tested: ${clickableElements.length}`);
    console.log(`Browser errors captured: ${browserErrors.length}`);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('=== OVERALL TEST SUMMARY ===');
  console.log(`${'='.repeat(60)}`);
  console.log(`Total browser errors captured: ${browserErrors.length}`);
  console.log(`Total console messages: ${consoleMessages.length}`);

  // Print all browser errors
  if (browserErrors.length > 0) {
    console.log('\n=== BROWSER ERRORS DETECTED ===');
    browserErrors.forEach((error, index) => {
      console.log(`\nError ${index + 1}:`);
      console.log(error);
    });
    console.log('\n================================\n');
  }

  // Fail the test if there were browser errors
  expect(browserErrors.length, `Found ${browserErrors.length} browser errors`).toBe(0);
});
