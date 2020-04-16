import BasePage from "./BasePage";
import AddressPage from "./Address";

// Constants
const invalidCharacter = "`";
const addressPage = new AddressPage();

class OfficerAppointment extends BasePage {

    enterName(title, firstName, middleName, lastName) {
        cy.get('#Title').type(title);
        cy.get('#Forename').type(firstName);
        cy.get('#OtherForenames').type(middleName);
        cy.get('#Surname').type(lastName);
        cy.get('#name-container-continue').click();
    }

    enterNationality(nationality) {
        cy.get('#nationality1').type(nationality);
        cy.get('#nationality-container-continue').click();
    }

    selectROasCorrespondenceAddress() {
        cy.get('#correspondence-address-choice-ro-label').click();
        cy.get('#service-address-sameAsLinkConf').check();
        cy.get('#service-address-container-continue').click();
    }

    enterHomeAddress(propertyNumber, postcode) {
        cy.get('#home-address-choice-manual-label').click();
        addressPage.lookUpResidentialAddress(propertyNumber, postcode);
        cy.get('#residential-address-container-continue').wait(2000).click();
    }

    lookupServiceAddress(propertyNumber, postcode) {
        addressPage.lookUpServiceAddress(propertyNumber, postcode);
        cy.get('#service-address-container-continue').wait(2000).click();
    }

    checkCountryOfResidenceContains(country) {
        cy.get('#CountryOfResidence').should('have.value', country);
        cy.get('#country-of-residence-container-continue').click();
    }

    expandCorrespondenceDetails() {
        cy.get('#correspondence-address-choice-manual-label').click();
        cy.contains('Enter address manually').wait(2000).click();
    }

    expandHomeAddressDetails() {
        cy.get('#home-address-choice-manual-label').click();
        cy.get('#residential-address-manual-link').wait(2000).click();
    }

    invalidEntryForNameFields() {
        cy.get('#Title').type(invalidCharacter);
        cy.get('#OtherForenames').type(invalidCharacter);
        return this;
    }

    enterInvalidCharacterForCorrespondenceAddress() {

        return this;
    }

    enterInvalidCharacterForHomeAddress() {
        cy.get('#residential-address-postcode').type(invalidCharacter);
        cy.get('#residential-address-thoroughfare').type(invalidCharacter);
        cy.get('#residential-address-county').type(invalidCharacter);
        return this;
    }
    
    selectOfficer(elementId, officerName) {
        cy.get(elementId).each(($el) => {
            const text = $el.text();
            cy.log(text);
            if (text.includes(officerName)) {
                cy.wrap($el).should('contain.text', officerName).click();
            }
        })
    }

}
export default OfficerAppointment