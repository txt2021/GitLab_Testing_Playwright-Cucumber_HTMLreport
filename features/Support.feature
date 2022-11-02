Feature: Support services

    Scenario: TC16 - Should navigate user to Contact Support
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Contact Support"
        Then "GitLab Support" title was displayed. User was redirected to the "https://about.gitlab.com/support/" page

    Scenario: TC17 - Should navigate user to Get Help page
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Get Help"
        Then "Help Topics" title was displayed. User was redirected to the "https://about.gitlab.com/get-help/" page
    
    Scenario: TC18 - Should navigate user to GitLab Professional Services
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Set up support services"
        Then "GitLab Professional Services" title was displayed. User was redirected to the "https://about.gitlab.com/services/" page

    Scenario: TC19 - Should navigate user to Talk to an Expert page
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Contact Sales"
        Then "Talk to an Expert" title was displayed. User was redirected to the "https://about.gitlab.com/sales/" page

    Scenario: TC20 - Should navigate user to registration page
        Given A user open main GitLab page
        When A user clicks on "Support" button
        When A user clicks on "Register1"
        Then "Sign Up form" title was displayed. User was redirected to the "https://gitlab.com/users/sign_up/" page