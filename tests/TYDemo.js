
import { test,expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://tymper.epsilon.com/citiAoCbInt2.htm');
  
  await expect(page).toHaveTitle('ThankYou');

});