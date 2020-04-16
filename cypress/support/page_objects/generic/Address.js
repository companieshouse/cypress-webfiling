import BasePage from "./BasePage";

class AddressPage extends BasePage {

    lookUpROAddress(propertyNumber, postcode) {
        const propElement = '#ro-address-premise';
        const postcodeElement = '#ro-address-postcode';
        const buttonElement = '#ro-address-postcode-Lookup';
        this.lookUpAddress(propertyNumber, postcode,
            propElement, postcodeElement, buttonElement);

    }

    lookUpServiceAddress(propertyNumber, postcode) {
        const propElement = '#service-address-premise';
        const postcodeElement = '#service-address-postcode';
        const buttonElement = '#service-address-postcode-Lookup';
        this.lookUpAddress(propertyNumber, postcode,
            propElement, postcodeElement, buttonElement);

    }

    lookUpResidentialAddress(propertyNumber, postcode) {
        const propElement = '#residential-address-premise';
        const postcodeElement = '#residential-address-postcode';
        const buttonElement = '#residential-address-postcode-Lookup';
        this.lookUpAddress(propertyNumber, postcode,
            propElement, postcodeElement, buttonElement);

    }

    lookUpAddress(propertyNumber, postcode, propElement, postcodeElement, lookupButton) {
        cy.get(propElement).type(propertyNumber)
        cy.get(postcodeElement).type(postcode)
        // Lookup address
        cy.get(lookupButton).wait(500).click();

    }

    enterInvalidROAddress(invalidCharacter) {
        cy.get('#ro-address-premise').type(invalidCharacter);
        cy.get('#ro-address-postcode').type(invalidCharacter);
        cy.get('#ro-address-street').type(invalidCharacter);
        cy.get('#ro-address-thoroughfare').type(invalidCharacter);
        cy.get('#ro-address-postTown').type(invalidCharacter);
        cy.get('#ro-address-county').type(invalidCharacter);
        cy.get('#ro-address-poBox').type(invalidCharacter);
        return this;

    }

    enterInvalidServiceAddress(invalidCharacter) {
        cy.get('#residential-address-premise').type(invalidCharacter);
        cy.get('#residential-address-postcode').type(invalidCharacter);
        cy.get('#residential-address-street').type(invalidCharacter);
        cy.get('#residential-address-thoroughfare').type(invalidCharacter);
        cy.get('#residential-address-postTown').type(invalidCharacter);
        cy.get('#residential-address-county').type(invalidCharacter);
        cy.get('#residential-address-careOfName').type(invalidCharacter);
        cy.get('#residential-address-poBox').type(invalidCharacter);
        return this;
    }

    enterInvalidResidentialAddress(invalidCharacter) {
        cy.get('#service-address-premise').type(invalidCharacter);
        cy.get('#service-address-postcode').type(invalidCharacter);
        cy.get('#service-address-street').type(invalidCharacter);
        cy.get('#service-address-thoroughfare').type(invalidCharacter);
        cy.get('#service-address-postTown').type(invalidCharacter);
        cy.get('#service-address-county').type(invalidCharacter);
        cy.get('#service-address-careOfName').type(invalidCharacter);
        cy.get('#service-address-poBox').type(invalidCharacter);
        return this;
    }

    changeServiceAddressLink() {
        cy.get('#service-address-container-change').click();
        return this;
    }

    cancelServiceAddressChange() {
        cy.get('#service-address-container-cancel').click();
        return this;
    }

    changeResidentialAddressLink() {
        cy.get('#residential-address-container-change').click();
        return this;
    }

    cancelResidentialAddressChange() {
        cy.get('#residential-address-container-cancel').click();
        return this;
    }

    changeCompanyAddressLink() {
        cy.get('#company-address-container-change').click();
        return this;
    }

    companyAddressContinue() {
        cy.get('#company-address-container-continue').click();
    }

    checkAddressByStreetName(streetName) {
        cy.get("input[id='ro-address-street']").should('have.value', streetName)
        return this;
    }

    checkAddressByTown(town) {
        cy.get("input[id='ro-address-postTown']").should('have.value', town)
        return this;
    }

    checkCountryValue(country) {
        cy.get("#countryList").should('have.value', country)
        return this;
    }

}

export default AddressPage