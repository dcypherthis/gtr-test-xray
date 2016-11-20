import BasePage from '../_base.page';
import UiMap from './login.uiMap';
let _elements;

/**
 * @class Login_page
 * @summary This page object represents /login
 * @extends BasePage
 */
export default class Login_page extends BasePage {

    /**
     * @method name
     * @memberOf Login_page
     * @summary Overrides BasePage.name
     * @description The name of the Page Object - meant to be used for debugging and error handling
     * @returns {string} The name of the Page Object
     */
    get name() {
        return "Login Page";
    }

    /**
     * @method constructor
     * @memberOf Login_page
     * @summary The constructor for this class
     */
    constructor() {
        super();
        _elements = new UiMap();
    }

    /**
     * @method getPageUrl
     * @memberOf Login_page
     * @summary Looks up the pre-defined URL for the page in the uiMap. Does not access the browser object.
     * @returns {string} url defined in the ui map
     */
    getPageUrl() {
        return _elements.url;
    }

    /**
     * @method pageLoadIndicator
     * @memberOf Login_page
     * @summary Provides a selector that, when visible, indicates that the page has loaded enough for interaction.
     * @returns {string} A css selector string
     */
    pageLoadIndicator() {
        return this.findSelector(`Guitar Practice Header`);
    }

    /**
     * @method findSelector
     * @memberOf Login_page
     * @summary Searches for a selector given a specific target
     * @param {string} target the elements we want the selector for
     * @returns {string} the selector for the target
     */
    findSelector(target) {
        switch (target) {
            case `Guitar Practice Header`:
                return _elements.aNavHeading;
            case `Songs Navigation Link`:
                return _elements.aNavSongs;
            case `My Set Lists Navigation Link`:
                return _elements.aNavSetlists;
            case `Profile Navigation Link`:
                return _elements.aNavProfile;
            case `Logout`:
                return _elements.aNavLogout;
            case `Home Page Message`:
                return _elements.h1Message;
            case `Get Started Button`:
                return _elements.btnGetStarted;
            case `username`:
                return _elements.inputUsername;
            case `password`:
                return _elements.inputPassword;
            case `save`:
                return _elements.btnSubmit;
            default:
                let error = new Error(`\nMessage:\n    Element ${target} is not defined on the ${this.name}\nStack Trace:`); // eslint-disable-line prefer-const
                error.message = `${error.stack}`;
                throw error;
        }
    }

    /* Page-Specific Functions */

    /**
     * @method submit
     * @memberOf Login_page
     * @summary submits the form
     * @returns {void}
     */
    submit() {
        this.waitAndClick(`save`);
    }

    /**
     * @method fillForm
     * @memberOf Login_page
     * @param {string} username
     * @param {string} password
     * @returns {void}
     */
    fillForm(username, password) {
        browser.waitForVisible(this.findSelector('Guitar Practice Header'));
        browser.setValue(this.findSelector('username'), username);
        browser.setValue(this.findSelector('password'), password);
    }
}
