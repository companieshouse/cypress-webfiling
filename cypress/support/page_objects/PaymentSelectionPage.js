import { presenter_id, presenter_auth_code } from '../../fixtures/presenter.json';

class PaymentSelectionPage {

    selectPaymentByAccount() {
        cy.get('#paytype_account').click();
        return this;

    }
        
    enterPresenterID() {
        cy.get('#presenterId').type(presenter_id);
        return this;
    }

    enterPresenterAuthcode() {
        cy.get('#presenterCode').type(presenter_auth_code);
        return this;
    }

    continue() {
        cy.get('.container-button > .button').click();
        return this;
    }

}

export default PaymentSelectionPage