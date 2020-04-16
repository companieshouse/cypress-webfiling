import BasePage from "./generic/BasePage";
import AddressPage from "./generic/Address";

const addressPage = new AddressPage();

class SatisfyMortgageChargePage extends BasePage {

    //Expand all fields and check the accessibility before interacting with the page
    initialAccessibilityCheck() {
        cy.accessibilityCheck();
        return this;
    }

    selectSatisfiedInFull() {
        cy.get('#charge-satisfaction-choice-full').click();
        cy.get('#charge-satisfaction-continue').click();
        return this;
    }

    enterInterestInCharge(interest) {
        cy.get('#InterestInCharge').type(interest);
        cy.get('#charge-interest-continue').click();
        return this;
    }

    enterName(name) {
        cy.get('#Name').type(name);
        cy.get('#charge-your-name-continue').type(name);
        return this;
    }

    enterHomeAddress(propertyNumber, postcode) {
        addressPage.lookUpResidentialAddress(propertyNumber, postcode);
        cy.get('#charge-your-address-continue').wait(3000).click();
        //Accessibility check here due to clicking the lookup button that auto populates fields
        cy.accessibilityCheck();
        return this;
    }

}

export default SatisfyMortgageChargePage