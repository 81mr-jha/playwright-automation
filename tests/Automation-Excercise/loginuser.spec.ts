import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LogInPage } from '../../pages/LogInPage';
import { ProductPage } from '../../pages/ProductPage';
import { SubscriptionPage } from '../../pages/SubscriptionPage';

test('Login User - Automation Excercise', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();
    await homePage.clickSignupLogin();

    await loginPage.verifyLogInToYourAccountIsVisible();
    await loginPage.enterNameAndEmail('bahubali@gmail.com', 'P@ssw0rd');
    await loginPage.clickOnLogInButton();

    await loginPage.verifyHomePage();
})

test('Incorrect email & password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();
    await homePage.clickSignupLogin();

    await loginPage.verifyLogInToYourAccountIsVisible();
    await loginPage.enterNameAndEmail("ashutosh@gmail.com", 'P@ssw0rd');
    await loginPage.clickOnLogInButton();
    await loginPage.verifyErrorIsVisible();
})

test('Logout User', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();
    await homePage.clickSignupLogin();

    await loginPage.verifyLogInToYourAccountIsVisible();
    await loginPage.enterNameAndEmail('bahubali@gmail.com', 'P@ssw0rd');
    await loginPage.clickOnLogInButton();
    await loginPage.verifyLoggedInAsUsername();
    await loginPage.clickOnLogout();
    await loginPage.verifyLoginPage();
})

test('Verify Test Cases Page', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    await loginPage.clickonTestCaseButton();
    await loginPage.verifyTestCasePage();
})

test('Verify All Products and product detail page', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    await productPage.clickOnProducts();
    await productPage.verifyAllProductsPage();
    await productPage.verifyProductList();
    await productPage.clickOnViewProduct();
    await productPage.verifyProductDetailPage();
})

test('Search Product', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    await productPage.clickOnProducts();
    await productPage.verifyAllProductsPage();
    await productPage.EnterProductandSearch();
    await productPage.verifySearchedProduct();
    await productPage.verifyProductVisibility();

})

test('Verify Subscription in home page', async ({ page }) => {
    const homePage = new HomePage(page);
    const subscriptionPage = new SubscriptionPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    // subscriptionPage.verifySubscriptionInHomePage();
    // subscriptionPage.enterEmailAndClickArrow("test@yopmail.com");

    await page.locator('footer').scrollIntoViewIfNeeded();

    await expect(page.locator('text=Subscription')).toBeVisible();

    const email = `testuser${Date.now()}@example.com`;
    await page.locator('#susbscribe_email').fill(email);
    await page.locator('#subscribe').click();

    subscriptionPage.verifySuccessMessage();
})

test('Verify Subscription in cart page', async ({ page }) => {
    const homePage = new HomePage(page);
    const subscriptionPage = new SubscriptionPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();
    await page.locator('//a[text()=" Cart"]').click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await subscriptionPage.verifyTextSubscription();

    const email = `testuser${Date.now()}@example.com`;
    await page.locator('#susbscribe_email').fill(email);
    await page.locator('#subscribe').click();

    subscriptionPage.verifySuccessMessage();

})


test.only('Add Product', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    await page.locator('//div[@class="shop-menu pull-right"]/ul/li[2]/a').click();
    await page.hover('.productinfo.text-center');
    await page.click('//div[@class="features_items"]/div[2]/div/div/div/a');

    await page.click('//button[text()="Continue Shopping"]');

    await page.hover('.productinfo.text-center');
    await page.click('//div[@class="features_items"]/div[3]/div/div/div/a');
    await page.click('//button[text()="Continue Shopping"]');

    await page.click('//div[@id="cartModal"]/div/div/div[2]/p[2]/a');

    const items = await page.locator('.cart_description').allTextContents();
    expect(items.length).toBeGreaterThanOrEqual(2);

    const prices = await page.locator('//tr[@id="product-1"]/td[3]/p');
    const quantity = await page.locator('.cart_quantity')
    const totals = page.locator('td.cart_total');

    await expect(prices.nth(0)).toBeVisible();
    await expect(prices.nth(1)).toBeVisible();
    await expect(quantity.nth(0)).toContainText('1');
    await expect(quantity.nth(1)).toContainText('1');
    await expect(totals.nth(0)).toBeVisible();
    await expect(totals.nth(1)).toBeVisible();

})