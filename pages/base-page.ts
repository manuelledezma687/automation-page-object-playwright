import { Page, expect } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async loadWeb(url: string) {
        await this.page.goto(url);
    }

    async clickOn(role, locator: string) {
        await this.page.getByRole(role, { name: locator }).click();
    }

    async typeText(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    async elementToBeVisible(role, locator: string) {
        await expect(this.page.getByRole(role, { name: locator })).toBeVisible();
    }

    async elementToBeHidden(role, locator: string) {
        await expect(this.page.getByRole(role, { name: locator })).toBeHidden();
    }

    async haveThisUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

}