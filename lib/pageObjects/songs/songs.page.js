'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../_base.page');

var _base2 = _interopRequireDefault(_base);

var _songs = require('./songs.uiMap');

var _songs2 = _interopRequireDefault(_songs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _elements = void 0;

/**
 * @class Songs_page
 * @summary This page object represents the in-app upgrades page available to non-packaged pro accounts
 * @extends BasePage
 */

var Songs_page = function (_BasePage) {
    _inherits(Songs_page, _BasePage);

    _createClass(Songs_page, [{
        key: 'name',


        /**
         * @summary Returns the name of the page
         * @memberOf BasePage
         * @method name
         * @returns {String} the name of the page
         */
        get: function get() {
            return "Songs Page";
        }

        /**
         * @method constructor
         * @memberOf Songs_page
         * @summary The constructor for this class
         */

    }]);

    function Songs_page() {
        _classCallCheck(this, Songs_page);

        var _this = _possibleConstructorReturn(this, (Songs_page.__proto__ || Object.getPrototypeOf(Songs_page)).call(this));

        _elements = new _songs2.default();
        return _this;
    }

    /**
     * @method getPageUrl
     * @memberOf Songs_page
     * @summary Looks up the pre-defined URL for the page in the uiMap. Does not access the browser object.
     * @returns {string} url defined in the ui map
     */


    _createClass(Songs_page, [{
        key: 'getPageUrl',
        value: function getPageUrl() {
            return _elements.url;
        }

        /**
         * @method pageLoadIndicator
         * @memberOf Songs_page
         * @summary Provides a selector that, when visible, indicates that the page has loaded enough for interaction.
         * @returns {string} A css selector string
         */

    }, {
        key: 'pageLoadIndicator',
        value: function pageLoadIndicator() {
            return this.findSelector('Songs Heading');
        }

        /**
         * @method findSelector
         * @memberOf Songs_page
         * @summary Searches for a selector given a specific target
         * @param {string} target the elements we want the selector for
         * @returns {string} the selector for the target
         */

    }, {
        key: 'findSelector',
        value: function findSelector(target) {
            switch (target) {
                case 'Guitar Practice Header':
                    return _elements.aNavHeading;
                case 'Songs Navigation Link':
                    return _elements.aNavSongs;
                case 'My Set Lists Navigation Link':
                    return _elements.aNavSetlists;
                case 'Profile Navigation Link':
                    return _elements.aNavProfile;
                case 'Logout':
                    return _elements.aNavLogout;
                case 'Home Page Message':
                    return _elements.h1Message;
                case 'Get Started Button':
                    return _elements.btnGetStarted;
                case 'Logged In Message':
                    return _elements.alertLoggedIn;
                case 'Songs Heading':
                    return _elements.h2Songs;
                case 'Plus Sign':
                    return _elements.iconPlus;
                case 'Artist':
                    return _elements.inputArtist;
                case 'Song Title':
                    return _elements.inputSongTitle;
                case 'Spotify Url':
                    return _elements.inputSpotify;
                case 'Save':
                    return _elements.btnSave;
                case 'Song Added Message':
                    return _elements.alertSongAdded;
                default:
                    var error = new Error('\nMessage:\n    Element ' + target + ' is not defined on the ' + this.name + '\nStack Trace:'); // eslint-disable-line prefer-const
                    error.message = '' + error.stack;
                    throw error;
            }
        }

        /* Page-Specific Functions */

        /**
         * @method enterInput
         * @memberOf Songs_page
         * @summary fill in a form element
         * @param {string} target the elements we want the selector for
         * @param {string} value the string value to be entered into the form
         * @returns {void}
         */

    }, {
        key: 'enterInput',
        value: function enterInput(target, value) {
            browser.waitForVisible(this.findSelector(target), 3000);
            browser.setValue(this.findSelector(target), value);
        }
    }]);

    return Songs_page;
}(_base2.default);

exports.default = Songs_page;