class MicroEntityBalanceSheet {

    enterCalledUpShareCapitalNotPaid(current, previous) {
        cy.get('input[id$="currentCalledUpShareCapitalNotPaid"').clear().type(current);
        cy.get('input[id$="previousCalledUpShareCapitalNotPaid"').clear().type(previous);
        return this;
    }

    enterTotalFixedAssets(current, previous) {
        cy.get('input[id$="fixedAssetsControl.currentTotal"]').clear().type(current);
        cy.get('input[id$="fixedAssetsControl.previousTotal"]').clear().type(previous);
        return this;
    }

    enterTotalCurrentAssets(current, previous) {
        cy.get('input[id$="currentAssetsControl.currentTotal"]').clear().type(current);
        cy.get('input[id$="currentAssetsControl.previousTotal"]').clear().type(previous);
        return this;
    }

    enterCapitalAndReserves(current, previous) {
        cy.get('input[id$="currentShareholdersFunds"]').clear().type(current);
        cy.get('input[id$="previousShareholdersFunds"]').clear().type(previous);
        return this;
    }

    enterAvgNumberOfEmployees(current, previous) {
        cy.get('input[id$="avgNumEmployees"]').clear().type(current);
        cy.get('input[id$="avgNumEmployeesLastYear"]').clear().type(previous);
        return this;
    }

    confirmBalanceSheetStatements() {
        cy.get('input[id$="chkStatementExemption"]').check();
        cy.get('input[id$="chkStatementAudit"]').check();
        cy.get('input[id$="chkStatementResponsibilities"]').check();
        cy.get('input[id$="chkStatementPrepared"]').check();
        return this;
    }

    enterDateOfApproval(date) {
        //Open up the date picker and check accessibility
        cy.get('.ui-datepicker-trigger').click();
        cy.accessibilityCheck();
        //Enter the date specified in the field
        cy.get('input[type="text"][id$="dateOfApproval"]').clear().type(date);
        //Close the date picker
        cy.get('.ui-datepicker-trigger').click();
        return this;
    }

    enterApprovingDirector(name) {
        cy.get('input[id$="director1"]').clear().type(name);
        return this;
    }

    expandAdditionalLinks() {
        cy.get('#fixedAssetsExpand').click();
        cy.get('#currentAssetsExpand').click();
        cy.get('#capitalAndReservesExpand').click();
        cy.get('#otherNotesExpand').click();
        cy.get('#abbreviatedNotesExpand').click();
        return this;
    }

    openAndCheckAdditionalNotes() {
        // Open each of the additional note screens in turn and conduct accessibility checks
        // A wait is necessary while the screens load
        //Guarantees
        cy.get('button[id$="guaranteesNote"]').click().wait(3000);
        cy.accessibilityCheck();
        cy.get('input[class$="cancel regular right"]').click();
        //Advances and credits
        cy.get('button[id$="advancesAndCreditsNote"]').click().wait(3000);
        cy.accessibilityCheck();
        cy.get('input[class$="cancel regular right"]').click();
        //Accounting policies
        cy.get('button[id$="accountingPoliciesNote"]').click().wait(3000);
        cy.accessibilityCheck();
        cy.get('input[class$="cancel regular right"]').click().wait(3000);
        return this;
    }

    validateBalanceSheetAndContinue() {
        cy.get('input[id$="Page.submit"]').click();
    }

    submitAccountsFiling() {
        cy.get('input[value="Submit accounts"]').click();
    }

}

export default MicroEntityBalanceSheet
