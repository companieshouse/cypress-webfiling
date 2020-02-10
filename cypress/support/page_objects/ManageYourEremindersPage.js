class ManageYourEreminders {

    addEmailLink() {
        //wait for fields to be displayed
        cy.get('#addEmailLink').click().wait(2000);
    }

    useWebfilingEmailAddress() {
        cy.get('input[type="checkbox"]').check();
    }

    addEmailButton() {
        //cy.get('input[type="submit"][value="Add"]').click();
        cy.get('[name="eRemindersDetails.AddEmailCtrl.btnAdd"]').click();
    }

    viewTermsOfOperation() {
        // As this link opens in a new window, call cy.visit() in oder to test in isolation
        cy.visit('sframe?name=eRemindersTermsOfOperation');
    }
}

export default ManageYourEreminders