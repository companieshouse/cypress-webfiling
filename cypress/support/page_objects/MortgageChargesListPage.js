
class MortgageChargesListPage {

    selectFirstCharge() {
        cy.get(':nth-child(3) > .info-line > .button').click();
    }

}

export default MortgageChargesListPage