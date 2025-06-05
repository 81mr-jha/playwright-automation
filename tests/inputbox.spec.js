import { test, expect } from '@playwright/test';
import path from 'path';

test("Handle Input Box", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");

    await page.locator("#firstName").fill("Ashutosh");
    await page.locator("#lastName").fill("Chandra");

    await page.locator("#userEmail").fill("ashutoshchandra1523@gmail.com");
    await page.locator("label[for='gender-radio-1']").check();

    await page.getByPlaceholder("Mobile Number").fill("1234569870");
    await page.locator('//input[@id="subjectsInput"]').fill("SST");

    await page.locator('label[for="hobbies-checkbox-1"]').check();


    const filePath = path.join(__dirname, '..', 'images', 'Dwaraka.jpg');
    await page.locator('//input[@id="uploadPicture"]').setInputFiles(filePath);
});
