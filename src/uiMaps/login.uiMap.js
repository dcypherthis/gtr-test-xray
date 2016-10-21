import _Base_uiMap from './_Base.uiMap';

/**
 * A class with keys and values for css selectors
 */
export default class UiMap extends _Base_uiMap{

    /* URL & Title */
    get url() {
        return `${browser.options.env.login_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /* Page Contents */

    get inputUsername() {
        return '#email';
    }

    get inputPassword() {
        return '#password';
    }

    get btnSubmit() {
        return 'body > section > div:nth-child(2) > div > div > form > footer > button';
    }
}
