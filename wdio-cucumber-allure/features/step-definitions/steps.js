const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');

Given('Navigate to login screen to be shown', async () => {
    await LoginPage.clickHamburgerMenu();
    await LoginPage.clickLoginOption();
});

When('the user logs in with the following credentials username {string} and password {string} in my demo app', async (username,password) => {
    await LoginPage.login(username, password);
});


Then('an error message indicating the username is required should be {string} shown', async (error) => {
    const errorMsg = await LoginPage.usernameErrMsg.getText();
    await expect(errorMsg).toEqual(error);
});

Then('an error message indicating the password is required should be {string} shown', async (error) => {
    const errorMsg = await LoginPage.passwordErrMsg.getText();
    await expect(errorMsg).toEqual(error);
});

Then('the Inventory List screen should be shown {string}', async (list)=>{
    const inventoryScreen = await LoginPage.inventoryList.getText();
    await expect(inventoryScreen).toEqual(list);
})