import { defineSupportCode } from 'cucumber';
import loginPage from './pages/login-page';

defineSupportCode(function({ Then }) {

    Then(/^check login page is loaded$/, function() {
        loginPage.assertLogin();
    });

});