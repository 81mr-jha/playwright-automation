import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LogInPage } from '../../pages/LogInPage';

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

test('Verify Test Cases Page', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    await loginPage.clickonTestCaseButton();
    await loginPage.verifyTestCasePage();
})

test('Verify All Products and product detail page', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    await loginPage.clickOnProducts();
    await loginPage.verifyAllProductsPage();
    await loginPage.verifyProductList();
    await loginPage.clickOnViewProduct();
    await loginPage.verifyProductDetailPage();
})

test('Search Product', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();

    await loginPage.clickOnProducts();
    await loginPage.verifyAllProductsPage();

    // await loginPage.
})