import assert from 'assert';

class LoginPage {

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

    submitLogin(user, pass) {
        this.username.setValue(user);
        this.submit.click();
        this.password.setValue(pass);
        this.submit.click();
    }

    assertLogin() {
        const title = browser.getTitle();
        assert.equal(title, 'Log In — WordPress.com');
    }

    openLogin() {
        this.login.click();
    }
}

export default new LoginPage()