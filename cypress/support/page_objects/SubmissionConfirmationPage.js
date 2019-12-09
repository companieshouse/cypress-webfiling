class SubmissionConfirmationPage {

    confirmHeadingContains(text) {
        cy.get('h1').should('have.text', text);
        return this;
    }

    continue() {
        cy.get('a[class*="positive"]').click();
        return this;
    }

}

export default SubmissionConfirmationPage