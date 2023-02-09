import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base-page';

const URL = "https://www.demoblaze.com/"


test.beforeEach(async ({ page }) => {
    const HomePage = new BasePage(page);
    await HomePage.loadWeb(URL);
})

test('Explore Cart Section', async ({ page }) => {
    const HomePage = new BasePage(page);
    await HomePage.clickOn('link', 'Cart');
    await HomePage.haveThisUrl("https://www.demoblaze.com/cart.html");
});

test('Adding a product', async ({ page }) => {
    const HomePage = new BasePage(page);
    await HomePage.clickOn('link', "Nokia lumia 1520")
    await HomePage.elementToBeVisible('heading', 'Nokia lumia 1520');
    await HomePage.elementToBeVisible('heading', '$820 *includes tax');
    await HomePage.clickOn('link', 'Add to cart')
    await HomePage.elementToBeHidden('button', 'Add to cart');
});
