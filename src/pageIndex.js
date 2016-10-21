/** Router **/
import Router from './router';

/** Utilities **/
import Auth from './utilities/auth.util';

/** Data **/
import Account_data from './testData/account.data';
import * as Text from './utilities/text.util';
import * as Time from './utilities/dateTime.util';
import Window from './utilities/window.util';

/** PageObjects **/

import Home_page from './pageObjects/home.page';
import Login_page from './pageObjects/login.page';
import Profile_page from './pageObjects/profile.page';
import Signup_page from './pageObjects/signup.page';
import Songs_page from './pageObjects/songs.page';
import SetLists_page from './pageObjects/setLists.page';

/** Exports **/

export default {
    Router,
    Auth,
    Text,
    Time,
    Window,
    Account_data,
    Home_page,
    Login_page,
    Profile_page,
    SetLists_page,
    Signup_page,
    Songs_page
}
