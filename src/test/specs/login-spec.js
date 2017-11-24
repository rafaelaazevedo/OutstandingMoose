const LoginPage = require('./login-page');
const loginPage = new LoginPage();

describe('test invalid login', () => {
  it('opens the login page', () => {
    loginPage.openLogin();
  });

  it('send invalid login', () => {
    loginPage.login('usertest', 'passtest');
  });

  it('check login page is loaded', () => {
    loginPage.assertLogin();
  });
});
