let username, password;

/**
 * Helps manage account data associated with logging into emma
 */
export default class account_data {

    /**
     *
     * @param {String} accountType - The account type you want to log in to
     * @returns {void}
     */
    setCredential(accountType) {
        password = 'password';
        switch (accountType) {
            case 'default':
                username = 'autobot+gtr1@myemma.com';
                break;
            default:
                throw Error(`No username, password, or account id for a ${accountType} account was found. Please check the account.data.js file.`);
        }
    }

    /**
     *
     * @returns {String} The appropriate username
     */
    get username() {
        return username;
    }

    /**
     *
     * @returns {String} The appropriate password
     */
    get password() {
        return password;
    }

}
