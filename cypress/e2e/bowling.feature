Feature: Computing Bowling Score 
    Scenario: A Perfect
        Given that I am on the bowling score online calculator
        When I click 12 times on the 10 button
        Then I see a score of 300
