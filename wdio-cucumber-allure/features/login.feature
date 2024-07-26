Feature: My Demo APP

Background: Login App
    Given Navigate to login screen to be shown

  Scenario: Login with a standard user
    When the user logs in with the following credentials username "bob@example.com" and password "10203040" in my demo app
    Then the Inventory List screen should be shown "Products"

  Scenario: Login with a locked user
    When the user logs in with the following credentials username "alice@example.com" and password "10203040" in my demo app
    Then an error message indicating the password is required should be "Sorry this user has been locked out." shown

  Scenario: Login without providing a username
    When the user logs in with the following credentials username "" and password "10203040" in my demo app
    Then an error message indicating the username is required should be "Username is required" shown

  Scenario: Login without providing a password
    When the user logs in with the following credentials username "bob@example.com" and password "" in my demo app
    Then an error message indicating the password is required should be "Enter Password" shown

  Scenario: Login with non-matching credentials
    When the user logs in with the following credentials username "1@2.com" and password "f-o-o" in my demo app
    Then the Inventory List screen should be shown "Products"
