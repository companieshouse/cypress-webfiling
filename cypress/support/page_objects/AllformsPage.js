class AllFormsPage {

    selectConfirmationStatementAndAccounts() {
        cy.contains('Confirmation statement and accounts').click();
        return this;
    }

    selectAR01() {
        cy.contains('Annual Return (£13 charge) - AR01').click();
    }

    selectAA01() {
        cy.contains('Change of accounting reference date - AA01').click();
    }

    selectAA02() {
        cy.contains('Dormant company accounts').click();
    }

    selectFullAccountsWithAbbreviatedOption() {
        cy.contains('Audit exempt full accounts (with abbreviated accounts option)').click();
    }

    selectDirectorAndSecretaries() {
        cy.contains('Directors and secretaries').click();
        return this;
    }

    selectTM01() {
        cy.contains('Termination of appointment of director - TM01').click();
    }

    selectTM02() {
        cy.contains('Termination of appointment of secretary - TM02').click();
    } 

    selectCH01() {
        cy.contains('Change of director\'s details - CH01').click();
    }

    selectCH02() {
        cy.contains('Change of corporate director\'s details - CH02').click();
    }

    selectCH03() {
        cy.contains('Change of secretary\'s details - CH03').click();
    }

    selectCH04() {
        cy.contains('Change of corporate secretary\'s details - CH04').click();
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

    selectPsc05() {
        cy.get('#psc05-form-link').click();
        return this;
    }

    selectPsc06() {
        cy.get('#psc06-form-link').click();
        return this;
    }
    
    selectPsc07() {
        cy.get('#psc07-form-link').click();
        return this;
    }

    selectStrikeOffAndDissolution() {
        cy.contains('Strike off and dissolution').click();
        return this;
    }

    selectDs02() {
        cy.contains('Withdrawal of application to strike off - DS02').click();
    }

    selectChangeRoAndCompanyRecords() {
        cy.contains('Change registered office and location of company records').click();
        return this;
    }

    selectAd02() {
        cy.contains('Notification of single alternative inspection location (SAIL) - AD02').click();
    }

    selectEh01() {
        cy.contains("Provide your directors' information on the public register - EH01").click();
    }

    selectMortgageForms() {
        cy.get('#mortgage-forms').click();
        return this;
    }

    selectMr01() {
        cy.contains("Register a charge - MR01").click();
    }

    selectMr02() {
        cy.contains('Register an acquisition - MR02').click();
    }

    selectMr04() {
        cy.contains('Satisfy a charge - MR04').click();
    }

    selectMr05() {
        cy.contains('Cease or release property from a charge - MR05').click();
    }

    selectShareCapitalForms() {
        cy.get('#allotment-of-shares-forms').click();
        return this;
    } 

    selectSh01() {
        cy.contains('Return of allotment of shares - SH01').click();
    }

    selectChangeOfName() {
        cy.contains('Change of name').click();
        return this;
    }
    
    selectNm01() {
        cy.contains('Change of name standard service').click();
    }

}

export default AllFormsPage
