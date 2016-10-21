import Login_page from '../pageObjects/login.page';

const _login_page = new Login_page();
const loginUrl = browser.options.env.login_url;
const homeUrl = browser.options.env.home_url;

import Account_data from '../testData/account.data';
const account = new Account_data();

let currentUrl;

/**
 * auth class handles user authentication
 */
export default class auth {
    /**
     * Navigates to the login page, waits and checks to see if the user has been redirected to home.
     *
     * @returns {boolean}   true = The user on the home page
     */
    hardAuthCheck() {
        _login_page.navigate();
        browser.pause(2500);
        currentUrl = browser.getUrl();
        return currentUrl === homeUrl;
    }

    /**
     * Compares the current url retrieved from selenium with the loginUrl retrieved from
     * the login ui map. If the current url is not the login url
     * then the user is logged and returns true.
     *
     * @returns {boolean} true = The user is currently logged in
     */
    softAuthCheck () {
        currentUrl = browser.getUrl();
        return currentUrl !== loginUrl;
    }

    /**
     * Performs a softAuthCheck() and (if not logged in) fills the login form based on
     * accountType
     * @param {String} accountType  The type/package/account to be used for authentication
     * @returns {void}
     */
    login (accountType) {
        if (this.softAuthCheck() === false) {
            account.setCredential(accountType);
            _login_page.fillForm(account.username, account.password);
            _login_page.submit();
            // _home_page.isOnPage();
        }
    }
}
