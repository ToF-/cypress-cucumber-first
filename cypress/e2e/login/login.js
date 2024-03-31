import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('That I visit the website at address {string}', (site) => {
    cy.visit(site);
});

When('I type in {string} in field {string}', (text, field) => {
    cy.get(`#${field}`).type(text);
});

When('I type in {string} in field {string} and press enter', (text, field) => {
    cy.get(`#${field}`).type(text+'{enter}');
});

Then('I should see {string}', (text) => {
    cy.contains(text);

});
