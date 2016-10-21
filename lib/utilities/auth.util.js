'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _login = require('../pageObjects/login.page');

var _login2 = _interopRequireDefault(_login);

var _account = require('../testData/account.data');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _login_page = new _login2.default();
var loginUrl = browser.options.env.login_url;
var homeUrl = browser.options.env.home_url;

var account = new _account2.default();

var currentUrl = void 0;

/**
 * auth class handles user authentication
 */

var auth = function () {
    function auth() {
        _classCallCheck(this, auth);
    }

    _createClass(auth, [{
        key: 'hardAuthCheck',

        /**
         * Navigates to the login page, waits and checks to see if the user has been redirected to home.
         *
         * @returns {boolean}   true = The user on the home page
         */
        value: function hardAuthCheck() {
            _login_page.navigate();
            browser.pause(2500);
            currentUrl = browser.getUrl();
            return currentUrl === homeUrl;
        }

        /**
         * Compares the current url retrieved from selenium with the loginUrl retrieved from
         * the login ui map. If the current url is not the login url
         * then the user is logged and returns true.
         *
         * @returns {boolean} true = The user is currently logged in
         */

    }, {
        key: 'softAuthCheck',
        value: function softAuthCheck() {
            currentUrl = browser.getUrl();
            return currentUrl !== loginUrl;
        }

        /**
         * Performs a softAuthCheck() and (if not logged in) fills the login form based on
         * accountType
         * @param {String} accountType  The type/package/account to be used for authentication
         * @returns {void}
         */

    }, {
        key: 'login',
        value: function login(accountType) {
            if (this.softAuthCheck() === false) {
                account.setCredential(accountType);
                _login_page.fillForm(account.username, account.password);
                _login_page.submit();
                // _home_page.isOnPage();
            }
        }
    }]);

    return auth;
}();

exports.default = auth;