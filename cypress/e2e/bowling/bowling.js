import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('that I am on the bowling score online calculator', () => {
    cy.visit('https://bowlinggenius.com');
});

When('I click {int} times on the {int} button', (times, number) => {
    for(let i = 0; i < times; i++) {
        cy.get(`#btn${number}`).click();
    }
});

When('I click on the buttons', (table) => {
    let row = table.raw()[0]
    for(let i = 0; i < row.length; i++) {
        let number = row[i];
        cy.get(`#btn${number}`).click();
    }
});

When('I click for another game', () => {
    cy.get('#btn033').click();
});

Then('I see a score of {int} for game {int}', (score,number) => {
    let id = `#FrameStart${number}texthdcpscore`;
    cy.get(id).contains(score);

});
