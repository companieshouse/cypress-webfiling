import OfficerAppointment from "./generic/OfficerAppointment";

class DirectorsAndSecretariesPage extends OfficerAppointment {

    checkTableContents() {
        // Check to ensure the labels are present and correct
        cy.get('.name').should('have.text', 'Name');
        cy.get('.role').should('have.text', 'Role');
        cy.get('.dob').should('have.text', 'Date of birth');
        
        // Check hidden columns
        cy.checkForHiddenLabel('thead > :nth-child(2) > :nth-child(4)', 'Edit Links');
        cy.checkForHiddenLabel('thead > :nth-child(2) > :nth-child(5)', 'Remove Links');
    }

    selectOfficerToRemove(officerName) {
        // This will select the Remove link of the named officer
        this.selectOfficer('tbody  tr td:nth-child(5)  a', officerName);
    }

    selectOfficerToEdit(officerName) {
        // This will select the Edit link of the named officer
        this.selectOfficer('tbody  tr td:nth-child(4)  a', officerName);
    }

    confirmTermination() {
        cy.get('#confirm-officer-resignation').check();
    }

    submitTermination() {
        cy.get('input[type="submit"]').click();
    }

}

export default DirectorsAndSecretariesPage