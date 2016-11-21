'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../_base.page');

var _base2 = _interopRequireDefault(_base);

var _home = require('./home.uiMap');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _elements = void 0;

/**
 * @class Home_page
 * @summary This page object represents the in-app upgrades page available to non-packaged pro accounts
 * @extends BasePage
 */

var Home_page = function (_BasePage) {
    _inherits(Home_page, _BasePage);

    _createClass(Home_page, [{
        key: 'name',


        /* Default Functions */
        get: function get() {
            return 'Home Page';
        }
    }]);

    function Home_page() {
        _classCallCheck(this, Home_page);

        var _this = _possibleConstructorReturn(this, (Home_page.__proto__ || Object.getPrototypeOf(Home_page)).call(this));

        _elements = new _home2.default();
        return _this;
    }

    _createClass(Home_page, [{
        key: 'getPageUrl',
        value: function getPageUrl() {
            return _elements.url;
        }
    }, {
        key: 'pageLoadIndicator',
        value: function pageLoadIndicator() {
            return this.findSelector('Guitar Practice Header');
        }
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
                case 'login':
                    return _elements.aNavLogin;
                case 'signup':
                    return _elements.aNavSignup;
                default:
                    var error = new Error('\nMessage:\n    Element ' + target + ' is not defined on the ' + this.name + '\nStack Trace:'); // eslint-disable-line prefer-const
                    error.message = '' + error.stack;
                    throw error;
            }
        }
        /* Page-Specific Functions */

    }]);

    return Home_page;
}(_base2.default);

exports.default = Home_page;