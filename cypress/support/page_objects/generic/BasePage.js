class BasePage {

    confirmHeadingContains(text) {
        cy.get('h1').should('have.text', text);
        return this;
    }

    expandAll() {
        cy.contains('Expand all').click({force: true});
        return this;
    }

    submitForm() {
        cy.get('input[class="button regular submit positive"]').click();
    }

    proceedPastPreFilingScreen() {
        cy.get('[class*="button positive large"]').click();
    }

    enterAddressManually() {
        cy.get('a[id$="address-manual-link"]').click();
        return this;
    }

    selectOriginalFormFilingDateAsToday() {
        cy.selectTodaysDate("#day-select-1", "#month-select-1", "#year-select-1");
        cy.get('#secondFilingQuestion-continue').click();
        return this;
    }

}

export default BasePage
