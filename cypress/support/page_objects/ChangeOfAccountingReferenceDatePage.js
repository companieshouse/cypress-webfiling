class ChangeOfAccountingReferenceDatePage {

    selectCurrentAccountingPeriod() {
        cy.get('#currentdate').click();
        return this;
    }

    enterNewAccountingReferenceDate(date) {
        cy.get('#newdate').type(date);
        return this;
    }

    submitForm() {
        cy.get('input[type="submit"][class="buttonRight"]').click();
    }

}

export default ChangeOfAccountingReferenceDatePage