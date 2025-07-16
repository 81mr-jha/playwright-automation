import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signupLoginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupLoginBtn = page.locator('a[href="/login"]');
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async verifyHomePageVisible() {
        await this.page.waitForSelector('section#slider');
    }

    async clickSignupLogin() {
        await this.signupLoginBtn.click();
    }
} 