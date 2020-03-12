import AccountsBalanceSheet from "./generic/AccountsBalanceSheet";

class MicroEntityBalanceSheet extends AccountsBalanceSheet {

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

    enterTotalCapitalAndReserves(current, previous) {
        cy.get('input[id$="currentShareholdersFunds"]').clear().type(current);
        cy.get('input[id$="previousShareholdersFunds"]').clear().type(previous);
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
        // Open each of the additional not screens in turn and conduct accessibility checks
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

    submitAccountsFiling() {
        cy.get('input[value="Submit accounts"]').click();
    }

}

export default MicroEntityBalanceSheet