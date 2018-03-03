import assert from 'assert';
import { CONSTANTS } from './constants';

class LoginPage {

    ////////* Elements *////////
    ////////////////////////////

    get username() {
        return browser.element('#usernameOrEmail');
    }

    get password() {
        return browser.element('#password');
    }

    get submit() {
        return browser.element('.login__form-action button');
    }

    get login() {
        return browser.element('.login-link');
    }

    get suspendedWarning() {
        return browser.element('.is-error');
    }
    
    ////////* Elements *////////
    ////////////////////////////

    submitLogin(user, pass) {
        this.username.setValue(user);
        this.submit.click();
        this.password.waitForEnabled(CONSTANTS.TIMEOUT);
        this.password.setValue(pass);
        this.submit.click();
    }

    assertLogin() {
        this.suspendedWarning.waitForExist(CONSTANTS.TIMEOUT);
        assert.equal(this.suspendedWarning.isVisible(), true);
    }

    openLogin() {
        this.login.click();
    }
}

export default new LoginPage()