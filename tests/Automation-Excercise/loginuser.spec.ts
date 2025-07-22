import {test} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LogInPage } from '../../pages/LogInPage';

test('Login User - Automation Excercise', async ({page}) =>{
    const homePage = new HomePage(page);
    const loginPage = new LogInPage(page);

    await homePage.goto();
    await homePage.verifyHomePageVisible();
    await homePage.clickSignupLogin();

    await loginPage.verifyLogInToYourAccountIsVisible();
    await loginPage.enterNameAndEmail('bahubali@gmail.com','P@ssw0rd');
    await loginPage.clickOnLogInButton();
})