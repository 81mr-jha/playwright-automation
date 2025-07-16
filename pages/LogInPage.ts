import {Locator,Page} from '@playwright/test';

export class LogInPage {
    readonly page : Page;

    constructor(page : Page)
    {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async verifyloginPage()
    {
        await this.page.waitForSelector('')
    }
}