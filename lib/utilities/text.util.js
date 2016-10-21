'use strict';

var _time = require('./dateTime.util.js');
var currentTime = _time.getFormattedTime();
var testGroup = 'Test - ' + currentTime;

/**
 * Generate a test import group name with a timestamp
 * @returns {String} import group name that looks like "Import Test - YYYY:MM:DD HH:MM:SS:LLL"
 */
exports.testGroup = function () {
    return testGroup;
};

/**
 * Looks up the session data from the active Selenium session and format it into a single string
 * @returns {string} Unique session data identifier
 */
var formatSessionData = function formatSessionData() {
    var sessionData = browser.session('get');
    var sessionId = sessionData.sessionId;
    var browserName = sessionData.value.browserName;
    var browserVersion = sessionData.value.version;
    var platform = sessionData.value.platform;
    return platform + ' ' + browserName + ' ' + browserVersion + ' ' + sessionId;
};

/**
 * Get the full name by matching a case with name
 *
 * @param {String} info - an argument used to identify what information to provide
 * @returns {String} Base mailing name
 */
exports.getInput = function (info) {
    switch (info) {

        default:
            return info;
    }
};

/**
 * Calls the getSessionData() function
 * @returns {string} Unique session data identifier
 */
exports.getSessionData = function () {
    return formatSessionData();
};