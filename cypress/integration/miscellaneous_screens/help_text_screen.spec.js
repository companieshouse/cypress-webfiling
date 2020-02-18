import HelpTextPage from "../../support/page_objects/HelpTextPage";

const helpTextPage = new HelpTextPage();

describe("Help text screen", () => {
    it('Check accessibility of the help text and glossary help screen', () => {
        //Open the help text screen
        cy.visit('/help/en/stdwf/faqHelp.html');
        cy.accessibilityCheck();

        // Opens sections of right hand side of page and checks their accessibility
        helpTextPage.openAndCheckSections()
            // Clicks links in the body of text and checks the accessibility of the sections opened
            .openAndCheckFirstLink();

        // Open the glossary page link and check the accessibility of the page
        cy.visit('/help/en/stdwf/glossaryHelp.html');
        cy.accessibilityCheck();

        // Go back to company overview screen to exit the test
        cy.visit('//profile');
    })
})