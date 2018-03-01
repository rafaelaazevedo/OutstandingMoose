import { defineSupportCode } from 'cucumber';
import loginPage from './pages/login-page';

defineSupportCode(function({ When }) {

    When(/^send invalid login "([^"]*)" "([^"]*)"$/, function(user, pass) {
        loginPage.submitLogin(user, pass);
    });

});