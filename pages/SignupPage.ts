import { Page, Locator } from '@playwright/test';

export class SignupPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyNewUserSignupVisible() {
    await this.page.locator('text=New User Signup!').waitFor();
  }

  async enterNameAndEmail(name: string, email: string) {
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
  }

  async clickSignupButton() {
    await this.page.click('button[data-qa="signup-button"]');
  }

  async verifyEnterAccountInfoVisible() {
    await this.page.locator('text=Enter Account Information').waitFor();
  }

  async fillAccountInfo(password: string, day: string, month: string, year: string) {
    await this.page.click('input#id_gender1'); // Title: Mr
    await this.page.fill('input#password', password);
    await this.page.selectOption('#days', day);
    await this.page.selectOption('#months', month);
    await this.page.selectOption('#years', year);
  }

  async checkNewslettersAndOffers() {
    await this.page.check('#newsletter');
    await this.page.check('#optin');
  }

  async fillAddressInfo(data: any) {
    await this.page.fill('#first_name', data.firstName);
    await this.page.fill('#last_name', data.lastName);
    await this.page.fill('#company', data.company);
    await this.page.fill('#address1', data.address1);
    await this.page.fill('#address2', data.address2);
    await this.page.selectOption('#country', data.country);
    await this.page.fill('#state', data.state);
    await this.page.fill('#city', data.city);
    await this.page.fill('#zipcode', data.zipcode);
    await this.page.fill('#mobile_number', data.mobile);
  }

  async clickCreateAccount() {
    await this.page.click('button[data-qa="create-account"]');
  }

  async verifyAccountCreated() {
    await this.page.locator('text=Account Created!').waitFor();
  }

  async clickContinue() {
    await this.page.click('a[data-qa="continue-button"]');
  }

  async verifyLoggedIn(username: string) {
    await this.page.locator(`text=Logged in as ${username}`).waitFor();
  }

  async deleteAccount() {
    await this.page.click('a[href="/delete_account"]');
  }

  async verifyAccountDeleted() {
    await this.page.locator('text=Account Deleted!').waitFor();
  }
}
