
import { test,expect } from '@playwright/test';
import { only } from 'node:test';

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

test.only ('Another PW Test', async ({browser})=>
{
  const context=await browser.newContext();
  const page= await context.newPage();
  await page.goto("https://tymper.epsilon.com/citiAoCbInt2.htm");
  const NameInitials="//*[@id='auth-dd']/span";
  await expect(page).toHaveTitle(/ThankYou/);
  await page.locator("xpath=//*[@id='memberId1']").fill('8910231282192130');
  await page.locator("xpath=//*[@id='leftLogin']/form/div[8]/input").click();
  await page.locator(NameInitials).isVisible();
  await page.locator(NameInitials).click();
  await page.locator("(//*[@class='account'])[2]/li[2]/a").click();
  await expect(page).toHaveTitle(/Order History/);
  await page.locator(NameInitials).click()
  await page.locator("(//*[@class='account'])[2]/li[3]/a").click();
});