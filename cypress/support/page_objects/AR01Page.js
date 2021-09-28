import BasePage from "./generic/BasePage";

class AR01Page extends BasePage {

    proceedToFilingScreen() {
        cy.get('input[type="submit"]').click();
        // Get the heading of the current page. 
        if (this.confirmHeadingContains("Annual Return")) {
            // A MUD warning is fired meaning we've stayed on the same page 
            // and an additional submit is necessary
            cy.get('input[type="submit"]').click();
        } else {
            // The next screen is displayed so do nothing
        }
        return this;
    }

    enterDateOfReturn(date) {
        cy.get('input[id$="MUD.date"]').clear().type(date);
        return this;
    }

    confirmUpdates() {
        cy.get('input[name$="sectionContent.continue"]').click();
        return this;
    }

    goToAmountUnpaidSection() {
        cy.get('#statementOfCapitalConfirmTab').click();
        return this;
    }

    enterTotalAggAmountUnpaid(amount) {
        cy.get('#TotalAggregateAmountUnpaid').clear().type(amount);
        return this;
    }

    removeSicCode() {
        cy.contains('REMOVE').click();
        return this;
    }

    addNewSicCode(groupHeading, sicCode) {
        cy.get(':nth-child(5) > .button').click();
        cy.get('select[id$=".sicClass"]').select(groupHeading);
        cy.get('input[value=' + "'" + sicCode + "']").click();
        cy.get('.buttonLeft').click();
        return this;
    }

    submitAr01() {
        cy.get('input[name$="sectionContent.submit"]').click();
    }

}

export default AR01Page