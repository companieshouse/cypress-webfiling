import PscAppointment from "./generic/PscAppointment";

class ChangeIndividualPscPage extends PscAppointment {

    changePscName() {
        cy.get('#name-container-change').click();
    }
    
    cancelPscNameChange() {
        cy.get('#name-container-cancel').click();
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
        cy.get('#appoint-remove-directors-person').click();
        cy.get('#appoint-remove-directors-member').click();
        cy.get('#appoint-remove-directors-trustee').click();
        cy.get('#significant-influence-control').click();
        cy.get('#significant-influence-control-member').click();
        cy.get('#significant-influence-control-trustee').click();
        cy.get('#nature-of-control-container-continue').click();
        return this;
    }

    
}

export default ChangeIndividualPscPage