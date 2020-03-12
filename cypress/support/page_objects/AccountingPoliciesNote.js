import BalanceSheetNotes from "./generic/BalanceSheetNotes";

class AccountingPoliciesNote extends BalanceSheetNotes {

    enterAccountingPolicies() {
        cy.get('textarea[id$=".basisOfAccounts"]').clear().type("test");
        cy.get('#turnoverHeading').click();
        cy.get('textarea[id$=".turnover"]').clear().type("test");
        cy.get('#tangibleAssetsDepreciationHeading').click();
        cy.get('textarea[id$=".tangibleAssetsDepreciation"]').clear().type("test");
        cy.get('#intangibleAssetsAmortisationHeading').click();
        cy.get('textarea[id$=".intangibleAssetsAmortisation"]').clear().type("test");
        cy.get('#valuationHeading').click();
        cy.get('textarea[id$=".valuation"]').clear().type("test");
        cy.get('#textHeading').click();
        cy.get('textarea[id$=".note.text"]').clear().type("test");
        return this;
    }
}

export default AccountingPoliciesNote