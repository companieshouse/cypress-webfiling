class ChangeOfAccountingReferenceDatePage {

    selectCurrentAccountingPeriod() {
        cy.get('#currentdate').click();
        return this;
    }

    enterNewAccountingReferenceDate(date) {
        cy.get('#newdate').type(date);
        return this;
    }

    confirmForm() {
        cy.get('[value="CONFIRM"]').click();
    }

    submitForm() {
        cy.get('[name*="submit"]').click();

    }

}

export default ChangeOfAccountingReferenceDatePage