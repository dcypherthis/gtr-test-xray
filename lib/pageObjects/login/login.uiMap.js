'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base = require('../_Base.uiMap');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @interface Login_uiMap
 * @summary A uiMap containing selectors for the Login_page
 * @extends BaseUiMap
 */
var UiMap = function (_BaseUiMap) {
  _inherits(UiMap, _BaseUiMap);

  function UiMap() {
    _classCallCheck(this, UiMap);

    return _possibleConstructorReturn(this, (UiMap.__proto__ || Object.getPrototypeOf(UiMap)).apply(this, arguments));
  }

  _createClass(UiMap, [{
    key: 'url',


    /* URL & Title */

    /**
     * @method url
     * @memberOf Login_uiMap
     * @returns {string} a stringified url of the page
     */
    get: function get() {
      return '' + browser.options.env.login_url;
    }

    /**
     * @method title
     * @memberOf Login_uiMap
     * @returns {string} a stringified title selector of the page
     */

  }, {
    key: 'title',
    get: function get() {
      return 'head > title';
    }

    /**
     * @method titleText
     * @memberOf Login_uiMap
     * @returns {string} stringified title text if the page
     */

  }, {
    key: 'titleText',
    get: function get() {
      return 'AdonisJs - Node.Js MVC Framework';
    }

    /* Page Contents */

    /**
     * @method inputUsername
     * @memberOf Login_uiMap
     * @returns {string} a stringified selector for the username field
     */

  }, {
    key: 'inputUsername',
    get: function get() {
      return '#email';
    }

    /**
     * @method inputPassword
     * @memberOf Login_uiMap
     * @returns {string} a stringified selector for the password field
     */

  }, {
    key: 'inputPassword',
    get: function get() {
      return '#password';
    }
    /**
     * @method btnSubmit
     * @memberOf Login_uiMap
     * @returns {string} a stringified selector for the submit button
     */

  }, {
    key: 'btnSubmit',
    get: function get() {
      return 'body > section > div:nth-child(2) > div > div > form > footer > button';
    }
  }]);

  return UiMap;
}(_Base2.default);

exports.default = UiMap;