import { Locator, Page, expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnProducts() {
        await this.page.locator('//a[text()=" Products"]').click();
    }

    async verifyAllProductsPage() {
        await expect(this.page).toHaveURL('https://automationexercise.com/products');
    }

    async verifyProductList() {
        await expect(this.page.getByText('All Products')).toBeVisible();
    }

    async clickOnViewProduct() {
        await this.page.locator('//div[@class="features_items"]/div[2]/div/div[2]/ul/li/a').click();
    }

    async verifyProductDetailPage() {
        await expect(this.page).toHaveURL('https://automationexercise.com/product_details/1');
    }

    async EnterProductandSearch() {
        await this.page.locator('#search_product').fill('Blue Top');
        await this.page.locator('#submit_search').click();
    }

    async verifySearchedProduct() {
        await this.page.locator('//div[@class="features_items"]/h2');
    }

    async verifyProductVisibility() {
        const allProducts = this.page.locator('.productinfo.text-center');
        const count = await allProducts.count();

        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
            await expect(allProducts.nth(i)).toBeVisible();
        }
    }

}