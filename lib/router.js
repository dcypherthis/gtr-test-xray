'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pageIndex = require('./pageIndex');

var _pageIndex2 = _interopRequireDefault(_pageIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var page = void 0,
    currentUrl = void 0;

/**
 * @class Router
 * @summary A Router class handles context driven decisions for the test suite.
 * @classdesc The Router is used to determine which page object should be used by the test.  If can either look up a
 * page object based on the url or set a page object based on a parameter passed along from the test. The router
 * instantiates a new pageObject as `page` and returns page as an available class with context-specific methods.
 */

var router = function () {
    function router() {
        _classCallCheck(this, router);
    }

    _createClass(router, [{
        key: 'getContext',


        /**
         * @method getContext
         * @memberOf Router
         * @summary Determines which page object to use
         * @description Uses if/else logic with regular expressions to determine the current page base on matching parts
         * of the current url. A matching condition instantiates the corresponding page and returns a page object.
         * @returns {Object} A page object
         * @alias router.getContext
         * @example
         * //step.js
         *     _page = new login_page();
         *     console.log(_page) // outputs: login_page{}
         *     browser.url('home.e2ma.net'); // Navigates to https://home.myemma.com
         *     console.log(_page) // outputs: login_page{}
         *     Router.getContext(); // Looks up page based on current url
         *     console.log(_page) // outputs: home_page{}
         */
        value: function getContext() {
            currentUrl = browser.getUrl();
            if (currentUrl.match(/login/)) {
                page = new _pageIndex2.default.Login_page();
            } else if (currentUrl.match(/profile/)) {
                page = new _pageIndex2.default.Profile_page();
            } else if (currentUrl.match(/set-lists/)) {
                page = new _pageIndex2.default.SetLists_page();
            } else if (currentUrl.match(/signup/)) {
                page = new _pageIndex2.default.Signup_page();
            } else if (currentUrl.match(/songs/)) {
                page = new _pageIndex2.default.Songs_page();
            } else if (currentUrl === browser.options.env.home_url) {
                page = new _pageIndex2.default.Home_page();
            } else {
                var error = new Error('\nMessage:\n    The url, ' + currentUrl + ', does not match any pages defined in the router.js file\nStack Trace:'); // eslint-disable-line prefer-const
                error.message = '' + error.stack;
                throw error;
            }
            return page;
        }

        /**
         * @method setContext
         * @memberOf Router
         * @summary Returns a new Page Object matching the {targetPage} parameter
         * @description Use when trying to force a Page Object onto a test without comparing url's
         * @param {String} targetPage   The intended page
         * @returns {Object} A page object that matches targetPage.
         * @alias router.setContext
         * @example
         //step.js
         *     _page = new login_page();
         *     console.log(_page) // outputs: login_page{}
         *     Router.setContext('home')
         *     console.log(_page) // outputs: home_page{}
         */

    }, {
        key: 'setContext',
        value: function setContext(targetPage) {
            this.page = page;
            switch (targetPage) {
                case 'Home':
                    page = new _pageIndex2.default.Home_page();
                    break;
                case 'Login':
                    page = new _pageIndex2.default.Login_page();
                    break;
                case 'Profile':
                    page = new _pageIndex2.default.Profile_page();
                    break;
                case 'Set Lists':
                    page = new _pageIndex2.default.SetLists_page();
                    break;
                case 'Signup':
                    page = new _pageIndex2.default.Signup_page();
                    break;
                case 'Songs':
                    page = new _pageIndex2.default.Songs_page();
                    break;
                default:
                    throw Error('The ' + targetPage + ' page is not defined as a valid route in router.setContext(targetPage)');
            }
            return page;
        }

        /**
         * @method switchPage
         * @memberOf Router
         * @summary Change from one page object to another inside a test
         * @description Compares current url (from selenium) with destination url (from page object).  If they do not
         * match, it sets page to the the corresponding targetPage, navigates to it via url, and then returns the page object.
         * @param {String} targetPage   The intended page
         * @returns {Object} A page object that matches targetPage.
         * @alias router.switchPage
         * @example
         * //step.js
         *     _page = new login_page();
         *     console.log(_page) // outputs: login_page{}
         *     _page = router.switchPage('home')
         *     console.log(_page) // outputs: home_page{}
         */

    }, {
        key: 'switchPage',
        value: function switchPage(targetPage) {
            var current = browser.getUrl();
            var destination = this.setContext(targetPage).getPageUrl();
            if (current !== destination) {
                page = this.setContext(targetPage);
                page.navigate();
            }
            return page;
        }
    }]);

    return router;
}();

exports.default = router;