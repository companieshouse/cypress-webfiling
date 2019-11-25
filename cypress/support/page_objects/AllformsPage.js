class AllFormsPage {

    selectDirectorAndSecretaries() {
        cy.contains('Directors and secretaries').click();
        return this;
    }

    selectTM01() {
        cy.contains('Termination of appointment of director - TM01').click();
    }

    selectCH01() {
        cy.contains('Change of director\'s details - CH01').click();
    }

    selectCH03() {
        cy.contains('Change of secretary\'s details - CH03').click();
    }

    selectPscs() {
        cy.contains('Persons with significant control').click();
        return this;
    }

    selectPsc01() {
        cy.contains('Notification of a person with significant control (PSC) - PSC01').click();
        return this;
    }

    selectPsc04() {
        cy.get('#psc04-form-link').click();
        return this;
    }
    
}

export default AllFormsPage