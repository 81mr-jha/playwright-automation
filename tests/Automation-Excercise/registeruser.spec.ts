import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SignupPage } from '../../pages/SignupPage';

test('Register User - Automation Exercise', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  await homePage.goto();
  await homePage.verifyHomePageVisible();
  await homePage.clickSignupLogin();

  await signupPage.verifyNewUserSignupVisible();
  await signupPage.enterNameAndEmail('TestUser', 'testuser' + Date.now() + '@mail.com');
  await signupPage.clickSignupButton();
  await signupPage.verifyEnterAccountInfoVisible();
  await signupPage.fillAccountInfo('Password123', '10', '5', '1990');
  await signupPage.checkNewslettersAndOffers();

  await signupPage.fillAddressInfo({
    firstName: 'John',
    lastName: 'Doe',
    company: 'TestCorp',
    address1: '123 Street',
    address2: 'Suite 100',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: 'A1B2C3',
    mobile: '1234567890'
  });

  await signupPage.clickCreateAccount();
  await signupPage.verifyAccountCreated();
  await signupPage.clickContinue();
  await signupPage.verifyLoggedIn('TestUser');
  await signupPage.deleteAccount();
  await signupPage.verifyAccountDeleted();
});
