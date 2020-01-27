import BasePage from "./generic/BasePage";

class AllotmentOfSharesPreFilingPage extends BasePage {

    startShareAllotment() {
        cy.get('#btn_start_form').click();
    }

}

export default AllotmentOfSharesPreFilingPage