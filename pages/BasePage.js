class BasePage {

    constructor(page) {
        this.page = page;
    }

    async goto(path='') {
        await this.page.goto(path);
    }

    async click(locator) {
        await locator.waitFor({
            state:'visible'
        });

        await locator.click();
    }

    async fill(locator,text) {
        await locator.waitFor({
            state:'visible'
        });

        await locator.fill(text);
    }
}

module.exports=BasePage;