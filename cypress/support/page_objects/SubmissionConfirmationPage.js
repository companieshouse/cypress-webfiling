import BasePage from "./generic/BasePage";

class SubmissionConfirmationPage extends BasePage{

    continue() {
        cy.get('a[class*="positive"]').click();
        return this;
    }

    done() {
        cy.get('input[class="button"][name="confirm"]').click();
    }

}

export default SubmissionConfirmationPage