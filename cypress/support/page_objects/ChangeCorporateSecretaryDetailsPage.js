import AddressPage from "./generic/Address";

class ChangeCorporateSecretaryDetailsPage extends AddressPage {

    changeAddressPremise() {
        this.changeCompanyAddressLink();
        cy.accessibilityCheck();

        // Clear premise and enter new entry
        cy.get('#service-address-premise').clear().type('22');

        cy.accessibilityCheck();
        // Update details
        this.companyAddressContinue();
    }

}

export default ChangeCorporateSecretaryDetailsPage