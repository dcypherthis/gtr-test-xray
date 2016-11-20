import BasePage from '../_base.page';
import UiMap from './songs.uiMap';
let _elements;

/**
 * @class Songs_page
 * @summary This page object represents the in-app upgrades page available to non-packaged pro accounts
 * @extends BasePage
 */
export default class Songs_page extends BasePage {

    /**
     * @summary Returns the name of the page
     * @memberOf BasePage
     * @method name
     * @returns {String} the name of the page
     */
    get name() {
        return "Songs Page";
    }

    /**
     * @method constructor
     * @memberOf Songs_page
     * @summary The constructor for this class
     */
    constructor() {
        super();
        _elements = new UiMap();
    }

    /**
     * @method getPageUrl
     * @memberOf Songs_page
     * @summary Looks up the pre-defined URL for the page in the uiMap. Does not access the browser object.
     * @returns {string} url defined in the ui map
     */
    getPageUrl() {
        return _elements.url;
    }

    /**
     * @method pageLoadIndicator
     * @memberOf Songs_page
     * @summary Provides a selector that, when visible, indicates that the page has loaded enough for interaction.
     * @returns {string} A css selector string
     */
    pageLoadIndicator() {
        return this.findSelector(`Songs Heading`);
    }

    /**
     * @method findSelector
     * @memberOf Songs_page
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
            case `Logged In Message`:
                return _elements.alertLoggedIn;
            case `Songs Heading`:
                return _elements.h2Songs;
            case `Plus Sign`:
                return _elements.iconPlus;
            case `Artist`:
                return _elements.inputArtist;
            case `Song Title`:
                return _elements.inputSongTitle;
            case `Spotify Url`:
                return _elements.inputSpotify;
            case `Save`:
                return _elements.btnSave;
            case `Song Added Message`:
                return _elements.alertSongAdded;
            default:
                let error = new Error(`\nMessage:\n    Element ${target} is not defined on the ${this.name}\nStack Trace:`); // eslint-disable-line prefer-const
                error.message = `${error.stack}`;
                throw error;
        }
    }

    /* Page-Specific Functions */

    /**
     * @method enterInput
     * @memberOf Songs_page
     * @summary fill in a form element
     * @param {string} target the elements we want the selector for
     * @param {string} value the string value to be entered into the form
     * @returns {void}
     */
    enterInput(target, value) {
        browser.waitForVisible(this.findSelector(target), 3000);
        browser.setValue(this.findSelector(target), value);
    }

}
