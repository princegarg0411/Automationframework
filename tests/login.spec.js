const { test } = require('@playwright/test');

const Login = require('../pages/login');
const AddToCart = require('../pages/addtocart');

test('Login functionality', async ({ page }) => {

    const login = new Login(page);

    await login.goto('');

    await login.loginApplication(
        'standard_user',
        'secret_sauce'
    );

});