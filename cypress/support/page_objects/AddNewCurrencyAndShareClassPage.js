

import BasePage from "./generic/BasePage";

class AddNewCurrencyAndShareClassPage extends BasePage {

    selectIncorrectCurrency() {
        cy.get('#currencyCode').select('-----------------------------');
        return this;        
    }

    addCurrencyAndShareClass() {
        cy.contains('Add this currency and share class').click();
    }

    cancelAddCurrencyAndShareClass() {
        cy.get('.cancel').click();
    }

}

export default AddNewCurrencyAndShareClassPage