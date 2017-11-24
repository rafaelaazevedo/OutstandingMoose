function LoginElements() {
  return {
    getUser() {
      const username = $('#usernameOrEmail');
      return username;
    },
    getPassword() {
      const password = $('#password');
      return password;
    },
    getSubmit() {
      const submit = '.login__form-action button';
      return submit;
    },
    getLogin() {
      const login = '=Log In';
      return login;
    },
  };
}

module.exports = LoginElements;
