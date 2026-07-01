const { test } = require('@playwright/test');

const Login = require('../pages/login');
const AddToCart = require('../pages/addtocart');

test('Checkout functionality', async ({ page }) => {

    const login = new Login(page);
    const cart = new AddToCart(page);

    await login.goto('');

    await login.loginApplication(
        'standard_user',
        'secret_sauce'
    );

    await cart.addProduct();

    await cart.checkoutDetails(
        'John',
        'Doe',
        '12345'
    );

    await cart.verifyOrderPlaced();

});