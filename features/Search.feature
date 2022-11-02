Feature: Search work

    Scenario: TC13 - Should check search work
        Given A user open main GitLab page
        When A user clicks on search icon
        When A user enters "testing" in "search" field
        When A user press Enter
        Then "Results for testing" title was displayed. User stays on the same page

    Scenario: TC14 - Should check search suggestions work
        Given A user open main GitLab page
        When A user clicks on search icon
        When A user clicks on "DevOps" button
        Then "What is DevOps?" title was displayed. User was redirected to the "https://about.gitlab.com/topics/devops/" page

    Scenario: TC15 - Should redirect user to sign in form frome search page
        Given A user open main GitLab page
        When A user clicks on search icon
        When A user clicks on "gitlab.com"
        Then User was redirected to the "https://gitlab.com/users/sign_in/" page. Sign in form was displayed