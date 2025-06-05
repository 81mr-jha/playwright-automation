import {test, expect} from '@playwright/test';

test('login feature', async ({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    // await page.click('id=login2');
    // await page.fill('#loginusername','pavanol');
    // await page.fill('//*[@id="loginpassword"]','test@123')

    // await page.click("//button[normalize-space()='Log in']");
    // const logoutLink = await page.locator("//a[normalize-space()='Log out']");
    // await expect(logoutLink).toBeVisible();

    // const regButton = page.locator('//button[text()="Log in "]');
    // await expect(regButton).toHaveAttribute('type','button')

    const getText = page.getByRole('heading', { name: 'Practice Form' });
    await expect(getText).toHaveText("Practice Form");

    await expect(page.getByRole('heading', { name: 'Student Registration Form'} )).toContainText('Form');
})