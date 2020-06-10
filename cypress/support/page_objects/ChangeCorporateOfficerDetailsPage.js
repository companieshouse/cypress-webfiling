import BasePage from "./generic/BasePage";
import AddressPage from "./generic/Address";
import { invalid_character } from '../../../fixtures/test_inputs.json';

const addressPage = new AddressPage();

class ChangeCorporateOfficerDetailsPage extends BasePage {

    enterDateOfChangeAsToday() {
        cy.selectTodaysDate('#day-select-4', '#month-select-4', '#year-select-4');
        return this;
    }

    changeCorporateOfficerName(newName) {
        cy.get('#corporate-name-container-change').click();
        //Check after opening the section
        cy.accessibilityCheck();
        cy.get('#corporateName').clear().type(newName);
        cy.get('#corporate-name-container-continue').click();
        return this;
    }

    enterInvalidAddress(invalid_character) {
        cy.get('#company-address-container-change').click();
        //Check after opening the section
        cy.accessibilityCheck();
        cy.get('#service-address-postcode-Lookup').click();
        addressPage.enterInvalidServiceAddress(invalid_character)
        .companyAddressContinue();
        return this;
    }

    enterInvalidCompanyDetails() {
        cy.get('#eea-container-change').click();
        //Check after opening the section
        cy.accessibilityCheck();
        cy.get('#EEAInd-label').click();
        //Check after clicking EEA button
        cy.accessibilityCheck();
        cy.get('#PlaceRegisteredEEA').select("Please select");
        cy.get('#RegistrationNumberEEA').clear();
        cy.get('#eea-container-continue').click();
        return this;
    }

    changeAddressPremise() {
        addressPage.changeCompanyAddressLink();
        //Check after opening the section
        cy.accessibilityCheck();
        // Clear premise and enter new entry
        cy.get('#service-address-premise').clear().type('22');
        cy.accessibilityCheck();
        // Update details
        addressPage.companyAddressContinue();
    }

}

export default ChangeCorporateOfficerDetailsPage
