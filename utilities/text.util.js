const _time = require('./dateTime.util.js');
const currentTime = _time.getFormattedTime();
const testGroup = `Test - ${currentTime}`;

/**
 * Generate a test import group name with a timestamp
 * @returns {String} import group name that looks like "Import Test - YYYY:MM:DD HH:MM:SS:LLL"
 */
exports.testGroup = () => {
    return testGroup;
};

/**
 * Looks up the session data from the active Selenium session and format it into a single string
 * @returns {string} Unique session data identifier
 */
const formatSessionData = () => {
    const sessionData = browser.session('get');
    const sessionId = sessionData.sessionId;
    const browserName = sessionData.value.browserName;
    const browserVersion = sessionData.value.version;
    const platform = sessionData.value.platform;
    return `${platform} ${browserName} ${browserVersion} ${sessionId}`;
};

/**
 * Get the full name by matching a case with name
 *
 * @param {String} info - an argument used to identify what information to provide
 * @returns {String} Base mailing name
 */
exports.getInput = info => {
    switch (info) {

        default:
            return info;
    }
};

/**
 * Calls the getSessionData() function
 * @returns {string} Unique session data identifier
 */
exports.getSessionData = () => {
    return formatSessionData();
};
