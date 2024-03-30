Feature: Simple

    Scenario: visit a website
        When I visit the website at address "https://perdu.com"
        Then I should see "Pas de panique, on va vous aider"
