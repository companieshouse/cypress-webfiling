import BasePage from "./generic/BasePage";

class WithdrawApplicationToStrikeOffPage extends BasePage {

    confirmApplicationWithdrawal() {
        cy.get('input[type="checkbox"][id="withdrawConfirmation"]').check();
        return this;
    }

}

export default WithdrawApplicationToStrikeOffPage