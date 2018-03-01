import { defineSupportCode } from 'cucumber';
import loginPage from './pages/login-page';

defineSupportCode(function({ Given }) {

    Given(/^opens the login page$/, function() {
        loginPage.openLogin();
    });

});