'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _window2 = require('../src/utilities/window.util');

var _window3 = _interopRequireDefault(_window2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _text = require('./text.util');

var _window = void 0;

/**
 * A Base page object class that is extended by all other page objects.  Common functions can be placed here.
 */

var _Base_page = function () {
    function _Base_page() {
        _classCallCheck(this, _Base_page);
    }

    _createClass(_Base_page, [{
        key: 'waitAndClick',


        /**
         * Waits for a selector to be visible and then clicks on it
         *
         * @param {String} target - The element to be clicked on
         * @returns {void}
         */
        value: function waitAndClick(target) {
            var selector = this.findSelector(target);
            browser.waitUntil(function () {
                return browser.isVisible(selector);
            }, this.findTimeout(target), 'Unable to verify that element, ' + selector + ', is visible on ' + browser.getUrl() + '.', 1000);
            browser.click(selector);
        }

        /**
         * Searches for a selector based on a parameter and determines if it is currently visible in the browser.
         * @param {string} target - the element that you are looking for
         * @param {boolean} isVisible - checks to if elements is visible if true
         *  or not visible if false
         * @returns {boolean} If true, the element is currently visible.
         */

    }, {
        key: 'checkVisibility',
        value: function checkVisibility(target, isVisible) {
            var _this = this;

            var timeout = this.findTimeout(target);
            browser.waitUntil(function () {
                return browser.isVisible(_this.findSelector(target)) === isVisible;
            }, timeout, 'Expected visibility of target:' + target + ', to be: ' + isVisible + ', in less than ' + timeout + ' seconds');
            return true;
        }

        /**
         * Finds a selector based on a parameter, wait for it to be visible and then
         *  scrolls to browser to that selector
         * @param {string} target - the element that you want to scroll to
         * @returns {void}
         */

    }, {
        key: 'scrollTo',
        value: function scrollTo(target) {
            var selector = this.findSelector(target);
            this.waitForVisible(selector);
            browser.scroll(selector);
        }

        /**
         * Finds a selector based on a parameter, wait for it to be visible and then moves the cursor over it to engage
         * a possible hover action.
         * @param {string} target - the element that you want to interact with
         * @returns {void}
         */

    }, {
        key: 'hoverOver',
        value: function hoverOver(target) {
            var selector = this.findSelector(target);
            browser.waitUntil(function () {
                return browser.isVisible(selector);
            }, this.findTimeout(target), 'Unable to verify that element, ' + selector + ', is visible on ' + browser.getUrl() + '.');
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

    }, {
        key: 'isOnPage',
        value: function isOnPage(skipWait) {
            var selector = this.pageLoadIndicator();
            if (!skipWait) {
                browser.waitUntil(function () {
                    return browser.isVisible(selector);
                }, 10000, 'Unable to verify that browser is on the ' + this.name + ' page. The current url is ' + browser.getUrl());
            }
            return browser.isVisible(selector);
        }

        /**
         * Navigates to a specific URL defined in the context of the currently instantiated pageObject.
         * @returns {void}
         */

    }, {
        key: 'navigate',
        value: function navigate() {
            browser.url(this.getPageUrl());
        }

        /**
         * Sets a conditional timeout period for waiting all waiting functions. Default is set to 10 seconds.
         * @param {string} target - A selector that we want to know a timeout for
         * @returns {number} A number in ms that describes the length of the timeout period.
         */

    }, {
        key: 'findTimeout',
        value: function findTimeout(target) {
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

    }, {
        key: 'elementIsOnPage',
        value: function elementIsOnPage(element) {
            var selector = this.findSelector(element);
            browser.waitUntil(function () {
                if (browser.elements(selector)) {
                    return true;
                } else {
                    return false;
                }
            }, 10000, 'Expected element, ' + element + ', to be on the page');
            return true;
        }

        /**
         * Search for a specific selector (element) and return a style attribute attached to it.
         * @param {string} element - the element that will be analyzed
         * @param {string} property - A CSS property that will be analyzed
         * @returns {string} The CSS property value parsed to a string
         */

    }, {
        key: 'getStyleAttribute',
        value: function getStyleAttribute(element, property) {
            return browser.getCssProperty(this.findSelector(element), property).parsed.string;
        }

        /**
         * Waits for an element to include a specific snippet of text.
         * @param {string} target - An element that can receive text
         * @param {string} value - a descriptor that represents a snippet of text in the text.util.js file.
         * @return {boolean} If true, the text inside the element contains the text defined by (value)
         */

    }, {
        key: 'assertText',
        value: function assertText(target, value) {
            var info = _text.getInput(value);
            var selector = this.findSelector(target);
            browser.waitUntil(function () {
                return browser.getText(selector).includes(info);
            }, 10000, 'Expected ' + target + '\'s text, ' + browser.getText(selector) + ', to include ' + info);
            return true;
        }

        /**
         * Get the current title from Selenium and compare it to the title in the uimap.  Waits until they both are the
         * same before returning a boolean, otherwise it throws a timeout exception.
         * @returns {bool} Returns true if the page title is correct
         */

    }, {
        key: 'validatePageTitle',
        value: function validatePageTitle() {
            var pageTitle = this.getPageTitle();
            var currentTitle = browser.getTitle();
            return browser.waitUntil(function () {
                currentTitle = browser.getTitle();
                return currentTitle === pageTitle;
            }, 10000, 'The current page title, ' + currentTitle + ' does not match ' + pageTitle, 250);
        }

        /**
         * Determines if more than one window is available and then changes the window focus.
         * @returns {void}
         */

    }, {
        key: 'changeWindow',
        value: function changeWindow() {
            _window = new _window3.default();
            _window.changeWindow();
        }
    }, {
        key: 'setWindowFocus',
        value: function setWindowFocus() {
            _window = new _window3.default();
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

    }, {
        key: 'waitForVisible',
        value: function waitForVisible(selector, timeout, interval, error, reverse) {
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
                    error = 'Expected element with selector, ' + selector + ', to be visible on the page';
                } else {
                    error = 'Expected element with selector, ' + selector + ', to NOT be visible on the page';
                }
            }
            browser.waitUntil(function () {
                return browser.isVisible(selector) === reverse;
            }, timeout, error, interval);
        }

        /**
         * Determines if more than one window is available and then changes the window focus.
         * @returns {void}
         */

    }, {
        key: 'changeTab',
        value: function changeTab() {
            _window = new _window3.default();
            _window.changeTab();
        }

        /**
         * Attempt to change the window or tab in a hail-mary effort to get where you need to go
         * @returns {void}
         */

    }, {
        key: 'changeWindowOrTab',
        value: function changeWindowOrTab() {
            _window = new _window3.default();
            _window.changeWindowOrTab();
        }
    }, {
        key: 'name',


        /**
         * Returns the name of the page
         *
         * @returns {String} the name of the page
         */
        get: function get() {
            return "Base Page";
        }
    }]);

    return _Base_page;
}();

exports.default = _Base_page;