import { test, expect } from '@playwright/test';

test('MultiSelectDropdown', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Select multiple options from multi select dropdown
    await page.selectOption('#colors'                                  , ['Blue', 'Red','Yellow'])
})