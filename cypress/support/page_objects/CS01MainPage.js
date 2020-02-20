class CS01MainPage {

    openSections() {
        cy.get('div[class="hidden-text view "]').click({multiple: true});
    }

    enterTotalAggregateAmountUnpaid(amount) {
        cy.get('input[id$=AggregateAmountUnpaid]').clear().type(amount);
        cy.get('input[id$=continue]').click(); 
        return this;
    }

    clickConfirmCheckbox() {
        cy.get('input[type=checkbox]').check();
        return this;
    }

    submitForm() {
        cy.get('[id$=submit]').click();
        return this;
    }

}

export default CS01MainPage