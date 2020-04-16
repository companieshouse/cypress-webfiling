import AddressPage from "./generic/Address";

const addressPage = new AddressPage();

class ChangeSecretaryDetailsPage {

    changeMiddleName(middleName) {
        cy.get('#name-container-change').click();
        cy.get('#OtherForenames').clear().type(middleName);
        // Update details
        cy.accessibilityCheck();
        cy.get('#name-container-continue').click();
    }

    changeAddress(propertyNumber, postcode) {
        addressPage.changeServiceAddressLink();
        cy.accessibilityCheck();
        cy.get('#correspondence-address-choice-manual-label').click();

        // Enter new premise
        addressPage.lookUpServiceAddress(propertyNumber, postcode);

        cy.accessibilityCheck();
    }

}

export default ChangeSecretaryDetailsPage