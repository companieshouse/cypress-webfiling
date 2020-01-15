class BasePage {

    expandAll() {
        cy.contains('Expand all').click({force: true});
    }

    submitForm() {
        cy.get('input[class="button regular submit positive"]').click();
    }

}

export default BasePage
