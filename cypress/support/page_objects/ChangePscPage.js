import PscAppointment from "./generic/PscAppointment";

class ChangePscPage extends PscAppointment {

    changePscName() {
        cy.get('a[id$="name-container-change"]').click();
    }
    
    cancelPscNameChange() {
        cy.get('a[id$="name-container-cancel"]').click();
    }

    changePscNationality() {
        cy.get('#nationality-container-change').click();
    }

    cancelPscNationalityChange() {
        cy.get('#nationality-container-cancel').click();
    }

    changeCountryOfResidence() {
        cy.get('#country-of-residence-container-change').click();
    }

    enterCountryOfResidence(country) {
        cy.get('#CountryOfResidence').clear().type(country);
        return this;
    }

    cancelCountryOfResidenceChange() {
        cy.get('#country-of-residence-container-cancel').click();
    }

    changeNatureOfControl() {
        cy.get('#nature-of-control-container-change').click();
    }

    cancelNatureOfControlChange() {
        cy.get('#nature-of-control-container-cancel').click();
    }
    

    selectInvalidNatureOfControlCombination() {
        cy.get('#appoint-remove-directors').click();
        cy.get('input[id^="appoint-remove-directors-person"]').click();
        cy.get('input[id^="appoint-remove-directors-member"]').click();
        cy.get('input[id^="appoint-remove-directors-trustee"]').click();
        cy.get('#significant-influence-control').click();
        cy.get('input[id^="significant-influence-control-member"]').click();
        cy.get('input[id^="significant-influence-control-trustee"]').click();
        cy.get('input[id^="nature-of-control-container-continue"]').click();
        cy.get('#nature-of-control-container-continue').click();
        return this;
    }

    expandEntityDetailsSection() {
        cy.get('#psc-eea-container-change').click();
    }

    

    closeEntityDetailsSection() {
        cy.get('#psc-eea-container-cancel').click();
    }
    
}

export default ChangePscPage