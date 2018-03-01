Feature: Login

  Scenario: Invalid login

  Given opens the login page
  When send invalid login "test" "passwordtest"
  Then check login page is loaded