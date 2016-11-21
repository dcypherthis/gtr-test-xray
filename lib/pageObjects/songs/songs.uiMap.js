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
 * @interface Songs_uiMap
 * @summary A uiMap containing selectors for the Songs_page
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


    /**
     * @method url
     * @memberOf Songs_uiMap
     * @returns {string} a stringified url of the page
     */
    get: function get() {
      return '' + browser.options.env.songs_url;
    }

    /**
     * @method title
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector for rthe page title
     */

  }, {
    key: 'title',
    get: function get() {
      return 'head > title';
    }

    /**
     * @method titleText
     * @memberOf Songs_uiMap
     * @returns {string} a stringified title of the page
     */

  }, {
    key: 'titleText',
    get: function get() {
      return 'AdonisJs - Node.Js MVC Framework';
    }

    /*  Page Contents */

    /**
     * @method h2Songs
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */

  }, {
    key: 'h2Songs',
    get: function get() {
      return 'body > section > div:nth-child(2) > div > div > nav > div.panel-heading.is-flex.is-space-between > h2';
    }

    /**
     * @method iconPlus
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */

  }, {
    key: 'iconPlus',
    get: function get() {
      return 'body > section > div:nth-child(2) > div > div > nav > div.panel-heading.is-flex.is-space-between > a';
    }

    /**
     * @method inputArtist
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */

  }, {
    key: 'inputArtist',
    get: function get() {
      return 'p.control:nth-child(2) > input:nth-child(1)';
    }

    /**
     * @method inputSongTitle
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */

  }, {
    key: 'inputSongTitle',
    get: function get() {
      return 'p.control:nth-child(4) > input:nth-child(1)';
    }

    /**
     * @method inputSpotify
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */

  }, {
    key: 'inputSpotify',
    get: function get() {
      return 'p.control:nth-child(6) > input:nth-child(1)';
    }

    /**
     * @method btnSave
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */

  }, {
    key: 'btnSave',
    get: function get() {
      return 'body > section > div:nth-child(2) > div > div > form > footer > button';
    }

    /**
     * @method alertSongAdded
     * @memberOf Songs_uiMap
     * @returns {string} a stringified selector
     */

  }, {
    key: 'alertSongAdded',
    get: function get() {
      return 'body > section > div.container.alert-container > div > div > div > p';
    }
  }]);

  return UiMap;
}(_Base2.default);

exports.default = UiMap;