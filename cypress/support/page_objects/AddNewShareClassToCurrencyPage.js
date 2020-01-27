import BasePage from "./generic/BasePage";

class AddNewShareClassToCurrencyPage extends BasePage {

    addShareClass() {
        cy.contains('Add this share class').click();
    }

    cancelAddShareClass() {
        cy.get('.cancel').click();
    }

}

export default AddNewShareClassToCurrencyPage