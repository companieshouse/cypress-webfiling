import PscAppointment from "./generic/PscAppointment";

class PreFilingPSCPage extends PscAppointment {

    appointPsc() {
        cy.get('.button').click();
    }

    changePsc04Details() {
        cy.get('#psc04-prescreen-start').click();
    }

    changePsc05Details() {
        cy.get('#psc05-prescreen-start').click();
    }

    changePsc06Details() {
        cy.get('#psc06-prescreen-start').click();
    }

}

export default PreFilingPSCPage