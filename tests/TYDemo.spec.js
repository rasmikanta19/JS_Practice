
import { test,expect } from '@playwright/test';

test('has title', async ({ page }) => {


  await page.goto('https://tymper.epsilon.com/citiAoCbInt2.htm');
  
  await expect(page).toHaveTitle(/ThankYou/);
  await page.locator("xpath=//*[@id='memberId1']").fill('8910231282192130');
  await page.locator("xpath=//*[@id='leftLogin']/form/div[8]/input").click();
  await page.locator("//*[@id='auth-dd']/span").isVisible();
  await page.locator("//*[@id='auth-dd']/span").click();
  await page.locator("(//*[@class='account'])[2]/li[2]/a").click();
  await page.close();

});

test('Another PW Test', async ({browser})=>
{
  const context=browser.newContext();
  browser

});