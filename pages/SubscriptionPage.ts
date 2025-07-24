import { expect, Page, Locator } from '@playwright/test'

export class SubscriptionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // async enterEmailAndClickArrow(email: string) {
    //     // Scroll the 'subscribe_email' field into view before filling
    //     await this.page.locator('input[id="subscribe_email"]').scrollIntoViewIfNeeded();

    //     // Fill in the email
    //     await this.page.fill('input[id="subscribe_email"]', email);

    //     // Click the subscribe button
    //     await this.page.locator('#subscribe').click();
    // }

    async verifyTextSubscription() {
        await expect(this.page.locator('text=Subscription')).toBeVisible();
    }

    async verifySuccessMessage() {
        await expect(this.page.locator('//div[text()="You have been successfully subscribed!"]')).toBeVisible();
    }

}