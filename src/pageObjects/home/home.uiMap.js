import BaseUiMap from '../_Base.uiMap'

/**
 * @interface Home_uiMap
 * @summary A uiMap containing selectors for the Home_page
 * @extends BaseUiMap
 */
export default class UiMap extends BaseUiMap {

    /* URL & Title */
    /**
     * @method url
     * @memberOf Signup_uiMap
     * @returns {string} a stringified url of the page
     */
    get url() {
        return `${browser.options.env.home_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /* Page Contents */

    get h1Message() {
        return 'body > section > div > div > h1';
    }

    get btnGetStarted() {
        return 'body > section > div > div > h2 > a';
    }
}
