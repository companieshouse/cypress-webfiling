import BalanceSheetNotes from "./generic/BalanceSheetNotes";

const testString = "Test";

class AccountingPoliciesNote extends BalanceSheetNotes {

    enterBasisOfAccounts() {
        cy.get('textarea[id$=".basisOfAccounts"]').clear().type(testString);
        return this;
    }

    enterTurnover() {
        this.checkTextBoxIsOpen('textarea[id$=".turnover"]', '#turnoverHeading');
        cy.get('textarea[id$=".turnover"]').clear().type(testString);
        return this;
    }

    enterTangibleAssetsDepreciation() {
        this.checkTextBoxIsOpen('textarea[id$=".tangibleAssetsDepreciation"]', '#tangibleAssetsDepreciationHeading');
        cy.get('textarea[id$=".tangibleAssetsDepreciation"]').clear().type(testString);
        return this;
    }

    enterIntangibleAssetsAmortisation() {
        this.checkTextBoxIsOpen('textarea[id$=".intangibleAssetsAmortisation"]', '#intangibleAssetsAmortisationHeading');
        cy.get('textarea[id$=".intangibleAssetsAmortisation"]').clear().type(testString);
        return this;
    }

    enterValuationInformation() {
        this.checkTextBoxIsOpen('textarea[id$=".valuation"]', '#valuationHeading');
        cy.get('textarea[id$=".valuation"]').clear().type(testString);
        return this;
    }

    enterOtherPolicies() {
        this.checkTextBoxIsOpen('textarea[id$=".note.text"]', '#textHeading');
        cy.get('textarea[id$=".note.text"]').clear().type(testString);
        return this;
    }

    checkTextBoxIsOpen(textBoxElement, headingLink) {
        cy.get(textBoxElement).then($textField => {
            if ($textField.is(':visible')) {
                // Do nothing, the text field is already open
            } else {
                // Click the heading link to make the text field visible
                cy.get(headingLink).click();
            }
        })
        return this;
    }
}

export default AccountingPoliciesNote