/**
 * @interface BaseUiMap
 * @description A Base UiMap containing selectors for navigation and common ui elements. All other UiMaps extend this class
 */
export default class UiMap {

    /* Navigation */
    get aNavHeading() {
        return 'body > div.hero.is-primary > nav > h1 > a';
    }

    get aNavSongs() {
        return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(1)';
    }

    get aNavSetlists() {
        return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(2)';
    }

    get aNavProfile() {
        return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(3)';
    }

    get aNavLogout() {
        return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(4)';
    }

    get aNavLogin() {
        return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(2)';
    }

    get aNavSignup() {
        return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(1)';
    }

    get alertLoggedIn() {
        return 'body > section > div.container.alert-container > div > div > div > p';
    }
}
