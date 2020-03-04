class BasePage {

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

}

export default BasePage
