import PreFilingPage from "./generic/PreFilingPage";

class CorporateDirectorChangeDetailsPreFilingPage extends PreFilingPage {

    changeCorporateDirectorDetails() {
        cy.get('#ch02-prescreen-start').click();
    }

}

export default CorporateDirectorChangeDetailsPreFilingPage