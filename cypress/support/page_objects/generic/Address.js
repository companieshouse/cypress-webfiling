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
        cy.get(propElement).clear().type(propertyNumber)
        cy.get(postcodeElement).clear().type(postcode)
        // Lookup address
        cy.get(lookupButton).click().wait(1000);

    }

    enterInvalidROAddress(invalidCharacter) {
        cy.get('#ro-address-premise').clear().type(invalidCharacter);
        cy.get('#ro-address-postcode').clear().type(invalidCharacter);
        cy.get('#ro-address-street').clear().type(invalidCharacter);
        cy.get('#ro-address-thoroughfare').clear().type(invalidCharacter);
        cy.get('#ro-address-postTown').clear().type(invalidCharacter);
        cy.get('#ro-address-county').clear().type(invalidCharacter);
        cy.get('#ro-address-poBox').clear().type(invalidCharacter);
        return this;

    }

    enterInvalidResidentialAddress(invalidCharacter) {
        cy.get('#residential-address-premise').clear().type(invalidCharacter);
        cy.get('#residential-address-postcode').clear().type(invalidCharacter);
        cy.get('#residential-address-street').clear().type(invalidCharacter);
        cy.get('#residential-address-thoroughfare').clear().type(invalidCharacter);
        cy.get('#residential-address-postTown').clear().type(invalidCharacter);
        cy.get('#residential-address-county').clear().type(invalidCharacter);
        return this;
    }

    enterInvalidServiceAddress(invalidCharacter) {
        cy.get('#service-address-premise').clear().type(invalidCharacter);
        cy.get('#service-address-postcode').clear().type(invalidCharacter);
        cy.get('#service-address-street').clear().type(invalidCharacter);
        cy.get('#service-address-thoroughfare').clear().type(invalidCharacter);
        cy.get('#service-address-postTown').clear().type(invalidCharacter);
        cy.get('#service-address-county').clear().type(invalidCharacter);
        cy.get('#service-address-careOfName').clear().type(invalidCharacter);
        cy.get('#service-address-poBox').clear().type(invalidCharacter);
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

    serviceAddressContinue() {
        cy.get('#service-address-container-continue').click();
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