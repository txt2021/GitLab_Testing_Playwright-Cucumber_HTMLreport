const { setWorldConstructor } = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const baseURL = 'https://about.gitlab.com/';
class CustomWorld {
    async openUrl() {
        const browser = await playwright.chromium.launch({
            headless: true,
        });
        const context = await browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(baseURL);
        
        
    }
    
}

setWorldConstructor(CustomWorld);