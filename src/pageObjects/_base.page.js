const _text = require('./text.util');
import Window from '../utilities/window.util';
let _window;

/**
 * A Base page object class that is extended by all other page objects.  Common functions can be placed here.
 */
export default class _Base_page {

    /**
     * Returns the name of the page
     *
     * @returns {String} the name of the page
     */
    get name() {
        return "Base Page";
    }

    /**
     * Waits for a selector to be visible and then clicks on it
     *
     * @param {String} target - The element to be clicked on
     * @returns {void}
     */
    waitAndClick(target) {
        const selector = this.findSelector(target);
        browser.waitUntil(() => {
            return browser.isVisible(selector);
        }, this.findTimeout(target), `Unable to verify that element, ${selector}, is visible on ${browser.getUrl()}.`, 1000);
        browser.click(selector);
    }

    /**
     * Searches for a selector based on a parameter and determines if it is currently visible in the browser.
     * @param {string} target - the element that you are looking for
     * @param {boolean} isVisible - checks to if elements is visible if true
     *  or not visible if false
     * @returns {boolean} If true, the element is currently visible.
     */
    checkVisibility(target, isVisible) {
        const timeout = this.findTimeout(target);
        browser.waitUntil(() => {
            return browser.isVisible(this.findSelector(target)) === isVisible;
        }, timeout, `Expected visibility of target:${target}, to be: ${isVisible}, in less than ${timeout} seconds`);
        return true;
    }

    /**
     * Finds a selector based on a parameter, wait for it to be visible and then
     *  scrolls to browser to that selector
     * @param {string} target - the element that you want to scroll to
     * @returns {void}
     */
    scrollTo(target) {
        const selector = this.findSelector(target);
        this.waitForVisible(selector);
        browser.scroll(selector);
    }

    /**
     * Finds a selector based on a parameter, wait for it to be visible and then moves the cursor over it to engage
     * a possible hover action.
     * @param {string} target - the element that you want to interact with
     * @returns {void}
     */
    hoverOver(target) {
        const selector = this.findSelector(target);
        browser.waitUntil(() => {
            return browser.isVisible(selector);
        }, this.findTimeout(target), `Unable to verify that element, ${selector}, is visible on ${browser.getUrl()}.`);
        browser.moveToObject(selector, 0, 0);
    }

    /**
     * Waits for a specific element to load to indicate the page has finished loading. If the skipWait parameter is
     * used, it does not wait for the element to be visible and check for visibility as soon as the DOM has finished
     * loading.  This is useful to call after attempting to load a new page, so that the next command does not fire
     * before the second page has had a chance to load all the way.
     * @param {string} skipWait (optional) - optionally skips the waitForVisible() command.
     * @returns {boolean} If true, the page is assumed to have finished loading.
     */
    isOnPage(skipWait) {
        const selector = this.pageLoadIndicator();
        if (!skipWait) {
            browser.waitUntil(() => {
                return browser.isVisible(selector);
            }, 10000, `Unable to verify that browser is on the ${this.name} page. The current url is ${browser.getUrl()}`);
        }
        return browser.isVisible(selector);
    }

    /**
     * Navigates to a specific URL defined in the context of the currently instantiated pageObject.
     * @returns {void}
     */
    navigate() {
        browser.url(this.getPageUrl());
    }

    /**
     * Sets a conditional timeout period for waiting all waiting functions. Default is set to 10 seconds.
     * @param {string} target - A selector that we want to know a timeout for
     * @returns {number} A number in ms that describes the length of the timeout period.
     */
    findTimeout(target) {
        switch (target) {
            default:
                return 10000;
        }
    }

    /**
     * Determines if an element is on the current page. Searches the known selectors in the current page object, and
     * queries the DOM for a match.  Returns a boolean if the element exists.  Does not have to be visible to
     * provide a truthy return.
     * @param {string} element - the element that you are searching for
     * @return {boolean} If true, an element matching the (element) parameter is on the current page.
     */
    elementIsOnPage(element) {
        const selector = this.findSelector(element);
        browser.waitUntil(() => {
            if (browser.elements(selector)) {
                return true;
            } else {
                return false;
            }
        }, 10000, `Expected element, ${element}, to be on the page`);
        return true;
    }

    /**
     * Search for a specific selector (element) and return a style attribute attached to it.
     * @param {string} element - the element that will be analyzed
     * @param {string} property - A CSS property that will be analyzed
     * @returns {string} The CSS property value parsed to a string
     */
    getStyleAttribute(element, property) {
        return browser.getCssProperty(this.findSelector(element), property).parsed.string;
    }

    /**
     * Waits for an element to include a specific snippet of text.
     * @param {string} target - An element that can receive text
     * @param {string} value - a descriptor that represents a snippet of text in the text.util.js file.
     * @return {boolean} If true, the text inside the element contains the text defined by (value)
     */
    assertText(target, value) {
        const info = _text.getInput(value);
        const selector = this.findSelector(target);
        browser.waitUntil(() => {
            return browser.getText(selector).includes(info);
        }, 10000, `Expected ${target}'s text, ${browser.getText(selector)}, to include ${info}`);
        return true;
    }

    /**
     * Get the current title from Selenium and compare it to the title in the uimap.  Waits until they both are the
     * same before returning a boolean, otherwise it throws a timeout exception.
     * @returns {bool} Returns true if the page title is correct
     */
    validatePageTitle() {
        const pageTitle = this.getPageTitle();
        let currentTitle = browser.getTitle();
        return browser.waitUntil(() => {
            currentTitle = browser.getTitle();
            return currentTitle === pageTitle;
        }, 10000, `The current page title, ${currentTitle} does not match ${pageTitle}`, 250);
    }

    /**
     * Determines if more than one window is available and then changes the window focus.
     * @returns {void}
     */
    changeWindow() {
        _window = new Window();
        _window.changeWindow();
    }

    setWindowFocus() {
        _window = new Window();
        _window.setFocus();
    }

    /**
     * Determines if an element is or is not visible on a page
     *
     * @param {string} selector - element to wait for
     * @param {int} timeout (optional) - in ms (default: 5000)
     * @param {int} interval (optional) - between condition checks (default: 250)
     * @param {string} error (optional) - Error message to display
     * @param {boolean} reverse (optional) - checks that element is visible if true,
     *  or not visible if false (default: true)
     * @returns {boolean}
     *
     * NOTE: We created this function in response to the WebdriverIO
     *  waitForVisible function fritzing out on us
     *  http://webdriver.io/api/utility/waitForVisible.html
     *  https://github.com/emmadev/quarts/issues/250
     */
    waitForVisible(selector, timeout, interval, error, reverse) {
        if (typeof timeout !== "number") {
            timeout = 5000;
        }
        if (typeof interval !== "number") {
            interval = 250;
        }
        if (typeof reverse !== "boolean") {
            reverse = true;
        }
        if (typeof error !== "string") {
            if (reverse) {
                error = `Expected element with selector, ${selector}, to be visible on the page`;
            } else {
                error = `Expected element with selector, ${selector}, to NOT be visible on the page`;
            }
        }
        browser.waitUntil(() => {
            return browser.isVisible(selector) === reverse;
        }, timeout, error, interval);
    }

    /**
     * Determines if more than one window is available and then changes the window focus.
     * @returns {void}
     */
    changeTab() {
        _window = new Window();
        _window.changeTab();
    }

    /**
     * Attempt to change the window or tab in a hail-mary effort to get where you need to go
     * @returns {void}
     */
    changeWindowOrTab() {
        _window = new Window();
        _window.changeWindowOrTab();
    }
}
