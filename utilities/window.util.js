let allWindows, currentWindow, secondWindow, allTabs, currentTab, secondTab;

/**
 * A Utility class for changing browser windows
 */
export default class Window {

    /**
     * Determines if more than one window is available and then changes the window focus.
     * @returns {void}
     */
    changeWindow() {
        /**
         * Get an array of all open windows
         * @returns {array} an array of window identifiers
         */
        allWindows = browser.windowHandles().value;

        /**
         * Throw an error if the are more or less than 2 windows open.
         */
        if (browser.windowHandles().value.length < 2 && !0) {
            throw Error(`Only 1 window was detected in the current selenium session, expected 2.`);
        } else if (browser.windowHandles().value.length > 2) {
            throw Error(`3 or more windows were detected in the current selenium session, expected 2.`);
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
    setFocus(){
        browser.window(allWindows[0]);
    }

    /**
     * All currently open windows
     * @returns {array} An array of window id's
     */
    get allWindows() {
        return allWindows;
    }

    /**
     * The currently focused window
     * @returns {string} A unique window id
     */
    get currentWindow() {
        return currentWindow;
    }

    /**
     * The secondary window, not currently focused
     * @returns {string} A unique window id
     */
    get secondWindow() {
        return secondWindow;
    }

    /**
     * Determines if more than one tab is available and then changes the tab focus.
     * @returns {void}
     */
    changeTab() {
        /**
         * Get an array of all open tabs
         * @returns {array} an array of window identifiers
         */
        allTabs = browser.getTabIds();
        /**
         * Throw an error if the are more or less than 2 windows open.
         */
        if (browser.getTabIds().length < 2 && !0) {
            throw Error(`Only 1 tab was detected in the current selenium session, expected 2.`);
        } else if (browser.getTabIds().length > 2) {
            throw Error(`3 or more tabs were detected in the current selenium session, expected 2.`);
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
    get allTabs() {
        return allTabs;
    }

    /**
     * The currently focused tab
     * @returns {string} A unique tab id
     */
    get currentTab() {
        return currentTab;
    }

    /**
     * The secondary tab, not currently focused
     * @returns {string} A unique tab id
     */
    get secondTab() {
        return secondTab;
    }

    /**
     * Attempt to change the window or tab in a hail-mary effort to get where you need to go
     * @returns {void}
     */
    changeWindowOrTab() {
        this.changeWindow();
        if (Error) {
            console.warn('No external Windows open, switching tabs'); //eslint-disable-line no-console
            this.changeTab();
        }
    }
}
