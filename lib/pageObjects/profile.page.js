'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./_base.page');

var _base2 = _interopRequireDefault(_base);

var _profile = require('../src/uiMaps/profile.uiMap');

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _elements = void 0;

var Profile_page = function (_Base_page2) {
    _inherits(Profile_page, _Base_page2);

    _createClass(Profile_page, [{
        key: 'name',


        /* Default Functions */
        get: function get() {
            return "Profile Page";
        }
    }]);

    function Profile_page() {
        _classCallCheck(this, Profile_page);

        var _this = _possibleConstructorReturn(this, (Profile_page.__proto__ || Object.getPrototypeOf(Profile_page)).call(this));

        _elements = new _profile2.default();
        return _this;
    }

    _createClass(Profile_page, [{
        key: 'getPageUrl',
        value: function getPageUrl() {
            return _elements.url;
        }
    }, {
        key: 'pageLoadIndicator',
        value: function pageLoadIndicator() {
            return _elements.heading;
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
                default:
                    var error = new Error('\nMessage:\n    Element ' + target + ' is not defined on the ' + this.name + '\nStack Trace:'); // eslint-disable-line prefer-const
                    error.message = '' + error.stack;
                    throw error;
            }
        }

        /* Page-Specific Functions */

    }]);

    return Profile_page;
}(_base2.default);

exports.default = Profile_page;