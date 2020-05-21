import BasePage from "./generic/BasePage";
import AddressPage from "./generic/Address";

const addressPage = new AddressPage();

class ChangeOfficerDetailsPage extends BasePage {

    enterDateOfChangeAsToday() {
        cy.selectTodaysDate('#day-select-1', '#month-select-1', '#year-select-1');
        return this;
    }

    changeOfficerName(title, firstName, middleName, surname) {
        cy.get('#name-container-change').click();
        // Initial check after opening the section
        cy.accessibilityCheck();
        cy.get('#Title').clear().type(title);
        cy.get('#Forename').clear().type(firstName);
        cy.get('#OtherForenames').clear().type(middleName);
        cy.get('#Surname').clear().type(surname);
        cy.get('#name-container-continue').click();
        return this;
    }

    changeNationality(nationality) {
        cy.get('#nationality-container-change').click();
        // Initial check after opening the section
        cy.accessibilityCheck();
        cy.get('#nationality1').clear().type(nationality);
        cy.get('#nationality-container-continue').click();
        return this;
    }

    changeOccupation(occupation) {
        cy.get('#occupation-container-change').click();
        // Initial check after opening the section
        cy.accessibilityCheck();
        cy.get('#Occupation').clear().type(occupation);
        cy.get('#occupation-container-continue').click();
        return this;
    }

    enterInvalidCorrespondenceAddress(invalidCharacter) {
        cy.get('#service-address-container-change').click();
        cy.accessibilityCheck();
        cy.get('#correspondence-address-choice-manual-label').click();
        cy.accessibilityCheck();
        cy.get('#service-address-manual-link').click();
        cy.accessibilityCheck();
        addressPage.enterInvalidServiceAddress(invalidCharacter)
        .serviceAddressContinue();
        return this;
    }

    enterInvalidResidentialAddress(invalidCharacter) {
        cy.get('#residential-address-container-change').click();
        cy.accessibilityCheck();
        cy.get('#home-address-choice-manual-label').click();
        cy.accessibilityCheck();
        cy.get('#residential-address-manual-link').click();
        cy.accessibilityCheck();
        addressPage.enterInvalidResidentialAddress(invalidCharacter);
        cy.get('#residential-address-container-continue').click();
        return this;
    }

    changeCountryOfResidence(country) {
        cy.get('#country-of-residence-container-change').click();
        cy.accessibilityCheck();
        cy.get('#CountryOfResidence').clear().type(country);
        cy.get('#country-of-residence-container-continue').click();
        return this;
    }

}

export default ChangeOfficerDetailsPage