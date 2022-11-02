Feature: Free trial and Talk to an Expert pages

    Scenario: TC11 - Should display "Talk to an expert" form
        Given A user open main GitLab page
        When A user clicks on "Talk to an expert" button
        Then "Talk to an Expert" title was displayed. User was redirected to the "https://about.gitlab.com/sales/" page 

    Scenario: TC12 - Should display "Free trial" form
        Given A user open main GitLab page
        When A user clicks on "Get free trial" button
        Then "Free 30-day trial" title was displayed. User was redirected to the "https://gitlab.com/-/trial_registrations/" page 