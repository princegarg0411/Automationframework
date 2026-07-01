const BasePage=require('./BasePage');

class Login extends BasePage {

    constructor(page){
        super(page);

        this.username=page.locator('#user-name');

        this.password=page.locator('#password');

        this.loginBtn=page.locator('#login-button');
    }

    async loginApplication(user,pass){

        await this.fill(this.username,user);

        await this.fill(this.password,pass);

        await this.click(this.loginBtn);
    }
}

module.exports=Login;