import BasePage from "./BasePage";
import AddressPage from "./Address";

class ShareCapital extends BasePage {

    selectIncorrectCurrency() {
        cy.get('#currencyCode').select('-----------------------------');
        return this;        
    }

    selectShareClass(shareClass) {
        cy.get('#shareClassList').select(shareClass);
        cy.get('#share-class-container-continue').click();
        return this;
    }

    enterNumberOfShares(value) {
        cy.get('#NumberOfShares').clear().type(value);
    }

}

export default ShareCapital