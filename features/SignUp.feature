Feature: Sign Up page

    Scenario: TC01 - Should sign up on GitLab with valid credentials
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Register1"
        When A user enters "Tester" in "First name" field
        When A user enters "Smith" in "Last name" field
        When A user enters "tester_8976" in "Username" field
        When A user enters "fahafo5464@civikli.com" in "Email" field
        When A user enters "testingpass" in "Password" field
        When A user clicks on "Register2"
        Then "There was an error with the reCAPTCHA. Please solve the reCAPTCHA again." message was displayed. User was redirected to "https://gitlab.com/users" page

    Scenario: TC02 - Should sign up on GitLab with invalid credentials
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Register1"
        When A user enters "Tester" in "First name" field
        When A user enters "Smith" in "Last name" field
        When A user enters "tester_8976" in "Username" field
        When A user enters "fahafo5464" in "Email" field
        When A user enters "testingpass" in "Password" field
        When A user clicks on "Register2"
        Then "Please provide a valid email address." message was displayed under the Email field. User stays on the same page

    Scenario: TC03 - Should sign up on GitLab with empty credentials
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Register1"
        When A user clicks on "Register2"
        Then "This field is required." message was displayed under the Email field. User stays on the same page

    Scenario: TC04 - Should sign up on GitLab with Saleforce
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Register1"
        When A user clicks on "Saleforce"
        Then Saleforce login form was was displayed. User was redirected to the "https://login.salesforce.com/" page