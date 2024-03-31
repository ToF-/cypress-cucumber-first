Feature: Login

    Scenario: login to a blog app
        Given That I visit the website at address "http://localhost:5000/auth/login"
        When I type in "ToF" in field "username"
        When I type in "cooper" in field "password" and press enter
        Then I should see "Posts"
