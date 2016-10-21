'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var allWindows = void 0,
    currentWindow = void 0,
    secondWindow = void 0,
    allTabs = void 0,
    currentTab = void 0,
    secondTab = void 0;

/**
 * A Utility class for changing browser windows
 */

var Window = function () {
    function Window() {
        _classCallCheck(this, Window);
    }

    _createClass(Window, [{
        key: 'changeWindow',


        /**
         * Determines if more than one window is available and then changes the window focus.
         * @returns {void}
         */
        value: function changeWindow() {
            /**
             * Get an array of all open windows
             * @returns {array} an array of window identifiers
             */
            allWindows = browser.windowHandles().value;

            /**
             * Throw an error if the are more or less than 2 windows open.
             */
            if (browser.windowHandles().value.length < 2 && !0) {
                throw Error('Only 1 window was detected in the current selenium session, expected 2.');
            } else if (browser.windowHandles().value.length > 2) {
                throw Error('3 or more windows were detected in the current selenium session, expected 2.');
            }
            currentWindow = browser.windowHandle().value;
            secondWindow = allWindows[1];
            /**
             * Change the window focus to another window
             */
            if (currentWindow !== secondWindow) {
                browser.window(secondWindow);
            }
        }

        /**
         * Resets the window focus back to the original window
         * @returns {void}
         */

    }, {
        key: 'setFocus',
        value: function setFocus() {
            browser.window(allWindows[0]);
        }

        /**
         * All currently open windows
         * @returns {array} An array of window id's
         */

    }, {
        key: 'changeTab',


        /**
         * Determines if more than one tab is available and then changes the tab focus.
         * @returns {void}
         */
        value: function changeTab() {
            /**
             * Get an array of all open tabs
             * @returns {array} an array of window identifiers
             */
            allTabs = browser.getTabIds();
            /**
             * Throw an error if the are more or less than 2 windows open.
             */
            if (browser.getTabIds().length < 2 && !0) {
                throw Error('Only 1 tab was detected in the current selenium session, expected 2.');
            } else if (browser.getTabIds().length > 2) {
                throw Error('3 or more tabs were detected in the current selenium session, expected 2.');
            }
            currentTab = browser.getCurrentTabId();
            secondTab = allTabs[1];
            /**
             * Change the window focus to another window
             */
            if (currentTab !== secondTab) {
                browser.switchTab(secondTab);
            }
        }

        /**
         * All currently open tabs
         * @returns {array} An array of tab id's
         */

    }, {
        key: 'changeWindowOrTab',


        /**
         * Attempt to change the window or tab in a hail-mary effort to get where you need to go
         * @returns {void}
         */
        value: function changeWindowOrTab() {
            this.changeWindow();
            if (Error) {
                console.warn('No external Windows open, switching tabs'); //eslint-disable-line no-console
                this.changeTab();
            }
        }
    }, {
        key: 'allWindows',
        get: function get() {
            return allWindows;
        }

        /**
         * The currently focused window
         * @returns {string} A unique window id
         */

    }, {
        key: 'currentWindow',
        get: function get() {
            return currentWindow;
        }

        /**
         * The secondary window, not currently focused
         * @returns {string} A unique window id
         */

    }, {
        key: 'secondWindow',
        get: function get() {
            return secondWindow;
        }
    }, {
        key: 'allTabs',
        get: function get() {
            return allTabs;
        }

        /**
         * The currently focused tab
         * @returns {string} A unique tab id
         */

    }, {
        key: 'currentTab',
        get: function get() {
            return currentTab;
        }

        /**
         * The secondary tab, not currently focused
         * @returns {string} A unique tab id
         */

    }, {
        key: 'secondTab',
        get: function get() {
            return secondTab;
        }
    }]);

    return Window;
}();

exports.default = Window;