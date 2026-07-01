const BasePage = require('./BasePage');

class AddToCart extends BasePage {

    constructor(page) {
        super(page);

        this.addToCartBtn = page.locator(
            '#add-to-cart-sauce-labs-backpack'
        );

        this.cartIcon = page.locator(
            '.shopping_cart_link'
        );

        this.checkoutBtn = page.locator(
            '#checkout'
        );

        this.firstName = page.locator(
            '#first-name'
        );

        this.lastName = page.locator(
            '#last-name'
        );

        this.postalCode = page.locator(
            '#postal-code'
        );

        this.continueBtn = page.locator(
            '#continue'
        );

        this.finishBtn = page.locator(
            '#finish'
        );

        this.successMessage = page.locator(
            '.complete-header'
        );
    }

    async addProduct() {

        await this.click(this.addToCartBtn);

        await this.click(this.cartIcon);
    }

    async checkoutDetails(first,last,pincode){

        await this.click(this.checkoutBtn);

        await this.fill(this.firstName,first);

        await this.fill(this.lastName,last);

        await this.fill(this.postalCode,pincode);

        await this.click(this.continueBtn);

        await this.click(this.finishBtn);
    }

    async verifyOrderPlaced(){

        await this.successMessage.waitFor({
            state:'visible'
        });
    }
}

module.exports = AddToCart;