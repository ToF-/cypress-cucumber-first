import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('that I am on the bowling score online calculator', () => {
    cy.visit('https://bowlinggenius.com');
});

When('I click {int} times on the {int} button', (times, number) => {
    for(let i = 0; i < times; i++) {
        cy.get(`#btn${number}`).click();
    }
});

Then('I see a score of {int}', (score) => {
    cy.get('#FrameStart0texthdcpscore').contains(score);

});
