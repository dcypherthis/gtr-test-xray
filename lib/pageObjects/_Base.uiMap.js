'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @interface BaseUiMap
 * @description A Base UiMap containing selectors for navigation and common ui elements. All other UiMaps extend this class
 */
var UiMap = function () {
    function UiMap() {
        _classCallCheck(this, UiMap);
    }

    _createClass(UiMap, [{
        key: 'aNavHeading',


        /* Navigation */
        get: function get() {
            return 'body > div.hero.is-primary > nav > h1 > a';
        }
    }, {
        key: 'aNavSongs',
        get: function get() {
            return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(1)';
        }
    }, {
        key: 'aNavSetlists',
        get: function get() {
            return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(2)';
        }
    }, {
        key: 'aNavProfile',
        get: function get() {
            return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(3)';
        }
    }, {
        key: 'aNavLogout',
        get: function get() {
            return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(4)';
        }
    }, {
        key: 'aNavLogin',
        get: function get() {
            return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(2)';
        }
    }, {
        key: 'aNavSignup',
        get: function get() {
            return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(1)';
        }
    }, {
        key: 'alertLoggedIn',
        get: function get() {
            return 'body > section > div.container.alert-container > div > div > div > p';
        }
    }]);

    return UiMap;
}();

exports.default = UiMap;