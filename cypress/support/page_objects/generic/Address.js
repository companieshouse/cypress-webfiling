class AddressPage {

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