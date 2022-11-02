Feature: Navigation main page

    Scenario: TC05 - Should navigate to "Why GitLab" section
        Given A user open main GitLab page
        When A user clicks on "Why GitLab"
        Then "Why GitLab" title was displayed, "Why GitLab" section was appeared
    
    Scenario: TC06 - Should navigate to "Platform" section
        Given A user open main GitLab page
        When A user clicks on "Platform"
        Then "Platform" title was displayed, "Platform" section was appeared

    Scenario: TC07 - Should navigate to "Solutions" section
        Given A user open main GitLab page
        When A user clicks on "Solutions"
        Then "Solutions" title was displayed, "Solutions" section was appeared
    
    Scenario: TC09 - Should navigate to "Partners" section
        Given A user open main GitLab page
        When A user clicks on "Partners"
        Then "Partners" title was displayed, "Partners" section was appeared

    Scenario: TC10 - Should navigate to "Resources" section
        Given A user open main GitLab page
        When A user clicks on "Resources"
        Then "Resources" title was displayed, "Resources" section was appeared

    Scenario: TC08 - Should navigate to "Pricing" section
        Given A user open main GitLab page
        When A user clicks on "Pricing"
        Then "Get The One DevOps Platform" title was displayed. User was redirected to the "https://about.gitlab.com/pricing/" page

