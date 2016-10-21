import _Base_page from './_base.page';
import UiMap from '../src/uiMaps/songs.uiMap';
let _elements;

export default class Songs_page extends _Base_page {

    /* Default Functions */
    get name() {
        return "Profile Page";
    }

    constructor() {
        super();
        _elements = new UiMap();
    }

    getPageUrl() {
        return _elements.url;
    }

    pageLoadIndicator() {
        return this.findSelector(`Songs Heading`);
    }

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

    enterInput(target, value) {
        browser.waitForVisible(this.findSelector(target), 3000);
        browser.setValue(this.findSelector(target), value);
    }

}
