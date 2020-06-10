import BasePage from "./BasePage";
import AddressPage from "./Address";
import { invalid_character } from  "../../../fixtures/test_inputs.json";

const addressPage = new AddressPage();

class OfficerAppointment extends BasePage {

    enterName(title, firstName, middleName, lastName) {
        cy.get('#Title').clear().type(title);
        cy.get('#Forename').clear().type(firstName);
        cy.get('#OtherForenames').clear().type(middleName);
        cy.get('#Surname').clear().type(lastName);
        cy.get('#name-container-continue').click();
    }

    enterNationality(nationality) {
        cy.get('#nationality1').type(nationality);
        cy.get('#nationality-container-continue').click();
    }

    selectROasCorrespondenceAddress() {
        cy.get('#correspondence-address-choice-ro-label').click();
        cy.get('#service-address-sameAsLinkConf').check();
        addressPage.serviceAddressContinue();
    }

    enterHomeAddress(propertyNumber, postcode) {
        cy.get('#home-address-choice-manual-label').click();
        addressPage.lookUpResidentialAddress(propertyNumber, postcode);
        cy.get('#residential-address-container-continue').wait(2000).click();
    }

    lookupServiceAddress(propertyNumber, postcode) {
        addressPage.lookUpServiceAddress(propertyNumber, postcode);
        addressPage.serviceAddressContinue();
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
        cy.get('#Title').type(invalid_character);
        cy.get('#OtherForenames').type(invalid_character);
        return this;
    }

    enterinvalidCharacterForHomeAddress() {
        cy.get('#residential-address-postcode').type(invalid_character);
        cy.get('#residential-address-thoroughfare').type(invalid_character);
        cy.get('#residential-address-county').type(invalid_character);
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
