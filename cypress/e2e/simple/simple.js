import { When,Then } from "cypress-cucumber-preprocessor/steps";

When('I visit the website at address {string}', (site) => {
    cy.visit(site);
});

Then('I should see {string}', (text) => {
    cy.contains(text);

});
