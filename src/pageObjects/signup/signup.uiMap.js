import BaseUiMap from '../_Base.uiMap';

/**
 * @interface Signup_uiMap
 * @summary A uiMap containing selectors for the Signup_page
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
        return `${browser.options.env.signup_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /** Navigation **/
    get navHeading() {
        return 'body > div.hero.is-primary > nav > h1 > a';
    }

    /* Page Contents */

}
