// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Cypress retries
require('cypress-plugin-retries')

// Accessibility
import 'cypress-axe'

// Sign into Webfiling
import CompanySignInPage from '../support/page_objects/CompanySignInPage'

import { company_number, auth_code } from '../fixtures/company.json';

beforeEach(() => {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignInPage();
    cy.accessibilityCheck();
    companySignIn.enterCompanyDetails(company_number, auth_code);
})

afterEach('Logout', () => {
    cy.contains('Sign out').click();
})