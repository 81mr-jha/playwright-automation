import {test,expext} from '@playwright/test';
const testData = JSON.parse(JSON.stringify(require("../../testData.json")))

test('Login to Application', async ({page}) =>{

    await page.goto("https://www.saucedemo.com/");

    await page.locator('//input[@id="user-name"]').fill(testData.username)
})