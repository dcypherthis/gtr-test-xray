import _Base_uiMap from '../_Base.uiMap';

/**
 * A class with keys and values for css selectors
 */
export default class UiMap extends _Base_uiMap{

    /** URL & Title **/
    get url() {
        return `${browser.options.env.songs_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /*  Page Contents */

    get h2Songs() {
        return 'body > section > div:nth-child(2) > div > div > nav > div.panel-heading.is-flex.is-space-between > h2'
    }

    get iconPlus() {
        return 'body > section > div:nth-child(2) > div > div > nav > div.panel-heading.is-flex.is-space-between > a';
    }

    get inputArtist() {
        return 'p.control:nth-child(2) > input:nth-child(1)';
    }

    get inputSongTitle() {
        return 'p.control:nth-child(4) > input:nth-child(1)';
    }

    get inputSpotify() {
        return 'p.control:nth-child(6) > input:nth-child(1)';
    }

    get btnSave() {
        return 'body > section > div:nth-child(2) > div > div > form > footer > button';
    }

    get alertSongAdded() {
        return 'body > section > div.container.alert-container > div > div > div > p';
    }

}
