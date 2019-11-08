// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Sign into service via UI
Cypress.Commands.add('signIntoWebfiling', () => {
    cy.visit('/')
    cy.injectAxe();

    cy.checkA11y(Cypress.env('tags'))

    cy.get('#email').type(Cypress.env('user_email'))
    cy.get('#seccode').type(Cypress.env('user_password'))
    cy.get('.button').click()
})

Cypress.Commands.add('accessibilityCheck', () => {
    cy.injectAxe();
    cy.checkA11y(Cypress.env('tags'));
})

Cypress.Commands.add('selectTodaysDate', (dayElement, MonthElement, yearElement) => {
    const day = Cypress.moment().format('D');
    const month = Cypress.moment().format('MMMM');
    const year = Cypress.moment().format('YYYY');

    cy.log(Cypress.moment().format('D MMMM YYYY'))

    cy.get(dayElement).select(day);
    cy.get(MonthElement).select(month);
    cy.get(yearElement).select(year);
})

Cypress.Commands.add('checkSubmitIsDisabled', () => {
    cy.get('.submit').should('have.attr', 'disabled');
})
