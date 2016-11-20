import BaseUiMap from '../_Base.uiMap';

/**
 * @interface Login_uiMap
 * @summary A uiMap containing selectors for the Login_page
 * @extends BaseUiMap
 */
export default class UiMap extends BaseUiMap{

    /* URL & Title */

    /**
     * @method url
     * @memberOf Login_uiMap
     * @returns {string} a stringified url of the page
     */
    get url() {
        return `${browser.options.env.login_url}`;
    }

    /**
     * @method title
     * @memberOf Login_uiMap
     * @returns {string} a stringified title selector of the page
     */
    get title() {
        return 'head > title';
    }

    /**
     * @method titleText
     * @memberOf Login_uiMap
     * @returns {string} stringified title text if the page
     */
    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /* Page Contents */

    /**
     * @method inputUsername
     * @memberOf Login_uiMap
     * @returns {string} a stringified selector for the username field
     */
    get inputUsername() {
        return '#email';
    }

    /**
     * @method inputPassword
     * @memberOf Login_uiMap
     * @returns {string} a stringified selector for the password field
     */
    get inputPassword() {
        return '#password';
    }
    /**
     * @method btnSubmit
     * @memberOf Login_uiMap
     * @returns {string} a stringified selector for the submit button
     */
    get btnSubmit() {
        return 'body > section > div:nth-child(2) > div > div > form > footer > button';
    }
}
