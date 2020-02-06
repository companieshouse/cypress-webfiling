import PscAppointment from "./generic/PscAppointment";

class ChangeLegalPersonPsc extends PscAppointment {

    expandPscNameSection() {
        cy.get('#corporate-name-container-change').click();
    }

    closePscNameSection() {
        cy.get('#corporate-name-container-cancel')
    }

    expandPscAddressSection() {
        cy.get('#service-address-container-change').click();
    }

    expandPscManualAddress() {
        cy.get('#service-address-manual-link').click();
    }

    closePscAddressSection() {
        cy.get('#service-address-manual-link').click();
    }

    cancelPscAddressChange() {
        cy.get('#service-address-container-cancel').click();
    }

    expandLegalPersonsDetailsSection() {
        cy.get('#psc-eea-container-change').click();
    }

    expandNatureOfControlSection() {
        cy.get('#nature-of-control-container-change').click();
    }

    closeNatureOfControlSection() {
        cy.get('#nature-of-control-container-cancel').click();
    }

}

export default ChangeLegalPersonPsc