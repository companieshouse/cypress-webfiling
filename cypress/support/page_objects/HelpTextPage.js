class HelpTextPage {

    openAndCheckSections() {
        cy.contains("The WebFiling Service").click();
        cy.accessibilityCheck();
        cy.contains("Annual Requirements").click();
        cy.accessibilityCheck();
        cy.contains("Update Company Details").click();
        cy.accessibilityCheck();
        cy.contains("Other Services").click();
        cy.accessibilityCheck();
        return this;
    }

    openAndCheckFirstLink() {
        // This clicks the first link to open it's explanation and checks acessibility. Other
        // links have the same formatting and similar text so it is not necessary to check those
        // at this time
        cy.get('#mainContent > :nth-child(9) > a').click();
        return this;
    }

}

export default HelpTextPage