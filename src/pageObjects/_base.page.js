const _text = require('../utilities/text.util');
import Window from '../utilities/window.util';
let _window;

/**
 * @class BasePage
 * @summary The Base Page Object class
 * @description A Base page object class that is extended by all other page objects.  Common functions to all pages can
 * be placed here.
 */
export default class BasePage {

    /**
     * @summary Returns the name of the page
     * @memberOf BasePage
     * @method name
     * @returns {String} the name of the page
     */
    get name() {
        return "Base Page";
    }

    /**
     * @summary Waits for a selector to be visible and then clicks on it
     * @memberOf BasePage
     * @method waitAndClick
     * @param {String} target - The element to be clicked on
     * @return {void}
     */
    waitAndClick(target) {
        const selector = this.findSelector(target);
        browser.waitUntil(() => {
            return browser.isVisible(selector);
        }, this.findTimeout(target), `Unable to verify that element, ${selector}, is visible on ${browser.getUrl()}.`, 1000);
        browser.click(selector);
    }

    /**
     * @summary Searches for a selector based on a parameter and determines if it is currently visible in the browser.
     * @memberOf BasePage
     * @method CheckVisibility
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
     * @summary Finds a selector based on a parameter, wait for it to be visible and then scrolls to browser to that selector
     * @memberOf BasePage
     * @method scrollTo
     * @param {string} target - the element that you want to scroll to
     * @returns {void}
     */
    scrollTo(target) {
        const selector = this.findSelector(target);
        this.waitForVisible(selector);
        browser.scroll(selector);
    }

    /**
     * @summary Finds a selector based on a parameter, wait for it to be visible and then moves the cursor over it to
     * engage a possible hover action.
     * @memberOf BasePage
     * @method hoverOver
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
     * @summary Waits for a specific element to load to indicate the page has finished loading.
     * @description If the skipWait parameter is used, it does not wait for the element to be visible and check for
     * visibility as soon as the DOM has finished loading. This is useful to call after attempting to load a new page,
     * so that the next command does not fire before the second page has had a chance to load all the way.
     * @memberOf BasePage
     * @method isOnPage
     * @param {boolean} skipWait (optional) - optionally skips the waitForVisible() command.
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
     * @summary Overrides the basePage function. Navigates to an account-specific url if performing a social share test,
     * otherwise uses the default url
     * @memberOf BasePage
     * @method navigate
     * @param {string} target - the page that is navigated to
     * @returns {void}
     */
    navigate() {
        browser.url(this.getPageUrl());
    }

    /**
     * @summary Sets a conditional timeout period for waiting all waiting functions. Default is set to 10 seconds.
     * @memberOf BasePage
     * @method findTimeout
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
     * @summary Determines if an element is on the current page.
     * @description Searches the known selectors in the current page object, and queries the DOM for a match.  Returns a
     * boolean if the element exists.  Does not have to be visible to provide a truthy return.
     * @memberOf BasePage
     * @method elementIsOnPage
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
     * @summary Search for a specific selector (element) and return a style attribute attached to it.
     * @memberOf BasePage
     * @method getStyleAttribute
     * @param {string} target - the element that will be analyzed
     * @param {string} property - A CSS property that will be analyzed
     * @returns {string} The CSS property value parsed to a string
     */
    getStyleAttribute(target, property) {
        return browser.getCssProperty(this.findSelector(target), property).parsed.string;
    }

    /**
     * @summary Waits for an element to include a specific snippet of text.
     * @memberOf BasePage
     * @method assertText
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
     * @summary Get the current title from Selenium and compare it to the title in the uimap,.
     * @description Waits until they both are the same before returning a boolean, otherwise it throws a timeout exception.
     * @method validatePageTitle
     * @memberOf BasePage
     * @returns {boolean} Returns true if the page title is correct
     * @throws {Exception} Throws error if page title is not updated to equal the expectation in the allotted time
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
     * @summary Determines if more than one window is available and then changes the window focus.
     * @memberOf BasePage
     * @method changeWindow
     * @returns {void}
     */
    changeWindow() {
        _window = new Window();
        _window.changeWindow();
    }

    /**
     * @summary Sets the window focus back to the first opened window
     * @memberOf BasePage
     * @method setWindowFocus
     * @returns {void}
     */
    setWindowFocus() {
        _window = new Window();
        _window.setFocus();
    }

    /**
     * @summary Determines if an element is or is not visible on a page
     * @description We created this function in response to the WebdriverIO waitForVisible function fritzing out on us
     * http://webdriver.io/api/utility/waitForVisible.html, https://github.com/emmadev/quarts/issues/250
     * @memberOf BasePage
     * @method waitForVisible
     * @param {string} selector - element to wait for
     * @param {int} timeout (optional) - in ms (default: 5000)
     * @param {int} interval (optional) - between condition checks (default: 250)
     * @param {string} error (optional) - Error message to display
     * @param {boolean} reverse (optional) - checks that element is visible if true,
     *  or not visible if false (default: true)
     * @returns {boolean} If true, the element is currently visible
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
     * @summary Determines if more than one window is available and then changes the window focus.
     * @memberOf BasePage
     * @method changeTab
     * @returns {void}
     */
    changeTab() {
        _window = new Window();
        _window.changeTab();
    }

    /**
     * Attempt to change the window or tab in a hail-mary effort to get where you need to go
     * @memberOf BasePage
     * @method changeWindowOrTab
     * @returns {void}
     */
    changeWindowOrTab() {
        _window = new Window();
        _window.changeWindowOrTab();
    }
}
