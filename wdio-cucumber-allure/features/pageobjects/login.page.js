const { $ } = require('@wdio/globals')

class LoginPage  {

    get usernameErrMsg(){
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/nameErrorTV"]');
    }

    get passwordErrMsg() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]');
    }

    get inventoryList() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productTV"]');
    }

    get inputUsername() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]');
    }

    get inputPassword() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]');
    }

    get btnSubmit() {
        return $('//android.widget.Button[@content-desc="Tap to login with given credentials"]');
    }

    get hamburgerMenu() {
        return $('//android.widget.ImageView[@content-desc="View menu"]');
    }

    get loginOption() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Log In"]');
    }

    async clickHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

    async clickLoginOption() {
        await this.loginOption.click();
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();