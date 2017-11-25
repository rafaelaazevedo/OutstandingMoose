const LoginElements = require('./login-elements');
const assert = require('assert');

function LoginPage() {
  const loginElements = new LoginElements();

  return {
    login(user, pass) {
      const username = loginElements.getUser();
      username.setValue(user);
      const password = loginElements.getPassword();
      password.setValue(pass);
      browser.click(loginElements.getSubmit());
    },
    assertLogin() {
      const title = browser.getTitle();
      assert.equal(title, 'Log In — WordPress.com');
    },
    openLogin() {
      browser.click(loginElements.getLogin());
    },
  };
}

module.exports = LoginPage;
