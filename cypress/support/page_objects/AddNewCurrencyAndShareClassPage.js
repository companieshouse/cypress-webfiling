

import ShareCapital from "./generic/ShareCapital";

class AddNewCurrencyAndShareClassPage extends ShareCapital {

    addCurrencyAndShareClass() {
        cy.contains('Add this currency and share class').click();
    }

    cancelAddCurrencyAndShareClass() {
        cy.get('.cancel').click();
    }

}

export default AddNewCurrencyAndShareClassPage