
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

test ('Another PW Test', async ({browser})=>
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

test.only('Locators',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise");
const username= page.locator("//input[@id='username']");
const password = page.locator("//input[@id='password']");
const SignIn= page.locator("//input[@id='signInBtn']");
const titles=page.locator("//*[@class='card-title']");
await username.fill("rahulshettyacademy");
await password.fill("learning");
await SignIn.click();
//console.log(await page.locator("//*[contains(@style,'block')]").textContent());
//await expect(page.locator("//*[contains(@style,'block')]")).toContainText("Empty");
await expect(titles.first()).toBeEnabled();
//console.log(await titles.nth(2).textContent());
//console.log(await titles.first().textContent());
//console.log(await titles.last().textContent());
//await page.waitForLoadState('networkidle');
await titles.first().waitFor();
const allTitles= await titles.allTextContents();
console.log(allTitles);


await page.close();


});