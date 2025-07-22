import { Locator, Page, expect } from '@playwright/test';

export class LogInPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        // this.EnterEmail = page.locator('//input[@data-qa="login-email"]')
    }

    async verifyLogInToYourAccountIsVisible() {
        await this.page.locator('//div[@class="login-form"]/h2');
    }

    async enterNameAndEmail(email: string, password: string) {
        await this.page.fill('input[data-qa="login-email"]', email);
        await this.page.fill('input[data-qa="login-password"]', password);
    }

    async clickOnLogInButton() {
        await this.page.click('button[data-qa="login-button"]');
    }

    async verifyHomePage() {
        await expect(this.page).toHaveURL('https://automationexercise.com/');
    }

    async verifyErrorIsVisible() {
        await expect(this.page.locator("//p[text()='Your email or password is incorrect!']")).toBeVisible();
    }

    async verifyLoggedInAsUsername() {
        await expect(this.page.locator('//a[text()=" Logged in as "]')).toBeVisible();
    }

    async clickOnLogout() {
        // await this.page.locator('a:has-text("Logout")').click();
        await this.page.getByRole('link', { name: 'Logout' }).click();

    }

    async verifyLoginPage() 
    {
        await expect(this.page).toHaveURL('https://automationexercise.com/login');
    }

    async verifyTestCasesOnHomePage() 
    {
        await expect(this.page.locator('//a[text()=" Test Cases"]')).toBeVisible();
    }

    async clickonTestCaseButton() 
    {
        await this.page.locator('//a[text()=" Test Cases"]').click();
    }

    async verifyTestCasePage() 
    {
        await expect(this.page).toHaveURL('https://automationexercise.com/test_cases');
    }

    async clickOnProducts() 
    {
        await this.page.locator('//a[text()=" Products"]').click();
    }

    async verifyAllProductsPage() 
    {
        await expect(this.page).toHaveURL('https://automationexercise.com/products');
    }

    async verifyProductList() 
    {
        await expect(this.page.getByText('All Products')).toBeVisible();
    }

    async clickOnViewProduct() 
    {
        await this.page.locator('//div[@class="features_items"]/div[2]/div/div[2]/ul/li/a').click();
    }

    async verifyProductDetailPage()
    {
        await expect(this.page).toHaveURL('https://automationexercise.com/product_details/1');
    }

    
}