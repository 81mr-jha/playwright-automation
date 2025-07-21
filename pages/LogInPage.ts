import {Locator,Page} from '@playwright/test';

export class LogInPage {
    readonly page : Page;

    constructor(page : Page)
    {
        this.page = page;
        // this.EnterEmail = page.locator('//input[@data-qa="login-email"]')
    }

    async verifyLogInToYourAccountIsVisible() {
        await this.page.locator('//div[@class="login-form"]/h2');
    }

    async enterNameAndEmail(email : string, password : string)
    {
        await this.page.fill('input[data-qa="login-email"]',email);
        await this.page.fill('input[data-qa="login-password"]',password);
    }

    async clickOnLogInButton(){
        await this.page.click('')
    }
}