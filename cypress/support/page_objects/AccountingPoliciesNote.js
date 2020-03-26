import BalanceSheetNotes from "./generic/BalanceSheetNotes";

const testString = "Test";

class AccountingPoliciesNote extends BalanceSheetNotes {

    enterBasisOfAccounts() {
        cy.get('textarea[id$=".basisOfAccounts"]').clear().type("test");
        return this;
    }

    enterTurnover() {
        this.checkTextBoxIsOpen('#turnoverHeading');
        cy.get('textarea[id$=".turnover"]').clear().type("test");
        return this;
    }

    enterTangibleAssetsDepreciation() {
        this.checkTextBoxIsOpen('#tangibleAssetsDepreciationHeading');
        cy.get('textarea[id$=".tangibleAssetsDepreciation"]').clear().type("test");
        return this;
    }

    enterIntangibleAssetsAmortisation() {
        this.checkTextBoxIsOpen('#intangibleAssetsAmortisationHeading');
        cy.get('textarea[id$=".intangibleAssetsAmortisation"]').clear().type("test");
        return this;
    }

    enterValuationInformation() {
        this.checkTextBoxIsOpen('#valuationHeading');
        cy.get('textarea[id$=".valuation"]').clear().type("test");
        return this;        
    }

    enterOtherPolicies() {
        this.checkTextBoxIsOpen('#textHeading');
        cy.get('textarea[id$=".note.text"]').clear().type("test");
        return this;
    }

    checkTextBoxIsOpen(linkSelector) {
        // Get the class value of the element
        cy.get(linkSelector).then(($linkElement) => {

            // If the link is not expanded the there will be a class value of "closed"
            // Open it if this is the case
            if ($linkElement.text().includes("closed")) {
                linkElement.click()
            } else {
                // Do nothing as it's already open
            }

        })
    }

}

export default AccountingPoliciesNote