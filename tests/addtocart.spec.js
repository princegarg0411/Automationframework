const { test } = require('@playwright/test');

const Login = require('../pages/login');
const AddToCart = require('../pages/addtocart');


test('Add product to cart', async ({ page }) => {

    const login = new Login(page);
    const cart = new AddToCart(page);

    await login.goto('');

    await login.loginApplication(
        'standard_user',
        'secret_sauce'
    );

    await cart.addProduct();

});
