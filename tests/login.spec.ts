import { test } from '@playwright/test';
import { BasePage } from '../pages/base-page';

const URL = "https://www.demoblaze.com/"
const USER = "user_manu_test"
const PASSWORD = "user123"

test.beforeEach(async ({ page }) => {
    const LoginPage = new BasePage(page);
    await LoginPage.loadWeb(URL);
})

test('Login test for demoBlaze', async ({ page }) => {
    const LoginPage = new BasePage(page);
    await LoginPage.clickOn('link', 'Log in');
    await LoginPage.typeText('#loginusername', USER);
    await LoginPage.typeText('#loginpassword', PASSWORD);
    await LoginPage.clickOn('button', 'Log in')
    await LoginPage.elementToBeVisible('link', 'Welcome user_manu_test');
});
