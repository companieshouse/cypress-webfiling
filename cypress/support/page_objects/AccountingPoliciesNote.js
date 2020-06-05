import BalanceSheetNotes from "./generic/BalanceSheetNotes";


class AccountingPoliciesNote extends BalanceSheetNotes {

    enterBasisOfAccounts(basis) {
        cy.get('textarea[id$=".basisOfAccounts"]').clear().type(basis);
        return this;
    }

    enterTurnover(turnover) {
        this.checkTextBoxIsOpen('textarea[id$=".turnover"]', '#turnoverHeading');
        cy.get('textarea[id$=".turnover"]').clear().type(turnover);
        return this;
    }

    enterTangibleAssetsDepreciation(depreciation) {
        this.checkTextBoxIsOpen('textarea[id$=".tangibleAssetsDepreciation"]', '#tangibleAssetsDepreciationHeading');
        cy.get('textarea[id$=".tangibleAssetsDepreciation"]').clear().type(depreciation);
        return this;
    }

    enterIntangibleAssetsAmortisation(amortisation) {
        this.checkTextBoxIsOpen('textarea[id$=".intangibleAssetsAmortisation"]', '#intangibleAssetsAmortisationHeading');
        cy.get('textarea[id$=".intangibleAssetsAmortisation"]').clear().type(amortisation);
        return this;
    }

    enterValuationInformation(valuation) {
        this.checkTextBoxIsOpen('textarea[id$=".valuation"]', '#valuationHeading');
        cy.get('textarea[id$=".valuation"]').clear().type(valuation);
        return this;
    }

    enterOtherPolicies(otherPolicies) {
        this.checkTextBoxIsOpen('textarea[id$=".note.text"]', '#textHeading');
        cy.get('textarea[id$=".note.text"]').clear().type(otherPolicies);
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