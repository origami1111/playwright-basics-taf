import { chromium } from '@playwright/test';

export default async function globalSetup(config) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(baseURL);

  // Wait for the cookie banner and click "Accept All" if present
  const acceptButton = page.locator('#onetrust-accept-btn-handler');
  try {
    await acceptButton.waitFor({ timeout: 5000 });
    await acceptButton.click();
  } catch (e) {
    console.log('Accept button not found, continuing without clicking.');
  } finally {
    // Save the storage state to a file (this will include cookies)
    await page.context().storageState({ path: storageState });

    await browser.close();
  }
}