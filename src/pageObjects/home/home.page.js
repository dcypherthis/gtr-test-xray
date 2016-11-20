import BasePage from '../_base.page';
import UiMap from './home.uiMap';
let _elements;

/**
 * @class Home_page
 * @summary This page object represents the in-app upgrades page available to non-packaged pro accounts
 * @extends BasePage
 */
export default class Home_page extends BasePage {

    /* Default Functions */
    get name() {
        return `Home Page`;
    }

    constructor() {
        super();
        _elements = new UiMap();
    }

    getPageUrl() {
        return _elements.url;
    }

    pageLoadIndicator() {
        return this.findSelector(`Guitar Practice Header`);
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
            case `login`:
                return _elements.aNavLogin;
            case `signup`:
                return _elements.aNavSignup;
            default:
                let error = new Error(`\nMessage:\n    Element ${target} is not defined on the ${this.name}\nStack Trace:`); // eslint-disable-line prefer-const
                error.message = `${error.stack}`;
                throw error;
        }
    }
    /* Page-Specific Functions */

}
