import BaseUiMap from '../_Base.uiMap';

/**
 * @interface Songs_uiMap
 * @summary A uiMap containing selectors for the Songs_page
 * @extends BaseUiMap
 */
export default class UiMap extends BaseUiMap {

    /**
     * @method url
     * @memberOf Songs_uiMap
     * @returns {string} a stringified url of the page
     */
    get url() {
        return `${browser.options.env.songs_url}`;
    }

    /**
     * @method title
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector for rthe page title
     */
    get title() {
        return 'head > title';
    }

    /**
     * @method titleText
     * @memberOf Songs_uiMap
     * @returns {string} a stringified title of the page
     */
    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /*  Page Contents */

    /**
     * @method h2Songs
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */
    get h2Songs() {
        return 'body > section > div:nth-child(2) > div > div > nav > div.panel-heading.is-flex.is-space-between > h2'
    }

    /**
     * @method iconPlus
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */
    get iconPlus() {
        return 'body > section > div:nth-child(2) > div > div > nav > div.panel-heading.is-flex.is-space-between > a';
    }

    /**
     * @method inputArtist
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */
    get inputArtist() {
        return 'p.control:nth-child(2) > input:nth-child(1)';
    }

    /**
     * @method inputSongTitle
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */
    get inputSongTitle() {
        return 'p.control:nth-child(4) > input:nth-child(1)';
    }

    /**
     * @method inputSpotify
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */
    get inputSpotify() {
        return 'p.control:nth-child(6) > input:nth-child(1)';
    }

    /**
     * @method btnSave
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */
    get btnSave() {
        return 'body > section > div:nth-child(2) > div > div > form > footer > button';
    }

    /**
     * @method alertSongAdded
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */
    get alertSongAdded() {
        return 'body > section > div.container.alert-container > div > div > div > p';
    }

}
