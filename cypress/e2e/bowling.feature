Feature: Computing Bowling Score 
    Scenario: Some scores
        Given that I am on the bowling score online calculator
        When I click 12 times on the 10 button
        Then I see a score of 300 for game 0
        When I click for another game
        When I click 21 times on the 5 button
        Then I see a score of 150 for game 1
        When I click for another game
        When I click on the buttons
            | 3 | 7 | 4 | 2 | 10 | 10 | 9 | 0 | 3 | 5 | 6 | 3 | 10 | 8 | 0 | 10 | 7 | 2 |
        Then I see a score of 139 for game 2
