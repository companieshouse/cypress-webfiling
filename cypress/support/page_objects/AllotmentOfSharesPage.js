import BasePage from "./generic/BasePage";

class AllotmentOfSharesPage extends BasePage {

    selectPeriodStartDate() {
        const dayElement = "#day-select-1";
        const monthElement = "#month-select-1";
        const yearElement = "#year-select-1";
        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        return this;
    }

    goToAllotmentOfSharesTab() {
        cy.contains('Go to allotment of shares').click();
    }

    addAllotmentLink() {
        cy.contains('Add allotment').click();
    }

    goToStatementOfCapitalTab() {
        cy.contains('Go to Statement of Capital').click();
    }

    updateAmendCapitalLink() {
        cy.get('.edit').click();
    }

    addNewShareClassToCurrency() {
        cy.contains('Add new share class to this currency').click();
    }

    addNewCurrencyAndShareClass() {
        cy.contains('Add new currency and share class').click();
    }

    goToAmountUnpaidTab() {
        cy.get("input[type='Submit'][value='Go to amount unpaid']").click();
    }

    enterTotalAggregateAmountUnpaid(totalUnpaid) {
        cy.get('#TotalAggregateAmountUnpaid').clear().type(totalUnpaid);
        return this;
    }

    submitShareAllotment() {
        cy.contains('Submit allotments and statement of capital').click();
    }

}

export default AllotmentOfSharesPage