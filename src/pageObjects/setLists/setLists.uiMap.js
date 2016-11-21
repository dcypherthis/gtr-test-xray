import BaseUiMap from '../_Base.uiMap';

/**
 * @interface Login_uiMap
 * @summary A uiMap containing selectors for the Setlists_page
 * @extends BaseUiMap
 */
export default class UiMap extends BaseUiMap{

    /* URL & Title */
    /**
     * @method url
     * @memberOf Signup_uiMap
     * @returns {string} a stringified url of the page
     */
    get url() {
        return `${browser.options.env.setLists_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /* Page Contents */

}
