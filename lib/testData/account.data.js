'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var account_id = void 0,
    package_id = void 0,
    username = void 0,
    password = void 0,
    social_share_mailing = void 0;

/**
 * Helps manage account data associated with logging into emma
 */

var account_data = function () {
    function account_data() {
        _classCallCheck(this, account_data);
    }

    _createClass(account_data, [{
        key: 'setCredential',


        /**
         *
         * @param {String} accountType - The account type you want to log in to
         * @returns {void}
         */
        value: function setCredential(accountType) {
            password = 'password';
            switch (accountType) {
                case 'default':
                    username = 'autobot+gtr1@myemma.com';
                    break;
                default:
                    throw Error('No username, password, or account id for a ' + accountType + ' account was found. Please check the account.data.js file.');
            }
        }

        /**
         *
         * @returns {String} The appropriate username
         */

    }, {
        key: 'username',
        get: function get() {
            return username;
        }

        /**
         *
         * @returns {String} The appropriate password
         */

    }, {
        key: 'password',
        get: function get() {
            return password;
        }
    }]);

    return account_data;
}();

exports.default = account_data;