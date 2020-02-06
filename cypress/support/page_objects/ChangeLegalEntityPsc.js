import PscAppointment from "./generic/PscAppointment";

class ChangeLegalEntityPsc extends PscAppointment {

    expandPscNameSection() {
        cy.get('#corporate-name-container-change').click();
    }

    closePscNameSection() {
        cy.get('#corporate-name-container-cancel').click();
    }

    expandPscAddressSection() {
        cy.get('#service-address-container-change').click();
    }

    expandPscManualEntryAddressSection() {
        cy.get('#service-address-manual-link').click();
    }

    closePscAddressSection() {
        cy.get('#service-address-container-cancel').click();
    }

    expandEntityDetailsSection() {
        cy.get('#psc-eea-container-change').click();
    }

    closeEntityDetailsSection() {
        cy.get('#psc-eea-container-cancel').click();
    }

    expandNatureOfControlSection() {
        cy.get('#nature-of-control-container-change').click();
    }

    closeNatureOfControlSection() {
        cy.get('#nature-of-control-container-cancel').click();
    }

}

export default ChangeLegalEntityPsc