import {test} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';

test('Verify Product quantity in Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    homePage.goto();
    homePage.verifyHomePageVisible();
    
    productPage.clickOnViewProduct();
    productPage.verifyProductDetailPage();
    // productPage.
})