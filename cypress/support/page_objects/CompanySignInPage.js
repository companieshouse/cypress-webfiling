import BasePage from "./generic/BasePage";

class CompanySignInPage extends BasePage {

    enterCompanyDetails(companyNumber, authcode) {
        cy.get("input[id='companySignInPage.coNum']").type(companyNumber);
        cy.get("input[id='companySignInPage.authCode']").type(authcode);
        cy.get('form > .button').click();
        return this;
    }

    dismissPreviousFilingsIfPresent() {
        cy.get('h1').then(($heading) => {
            if ($heading.text().includes("Resume")) {
                // Screen asking the user whether they want to continue with a previous filing is displayed
                // Dismiss the original filing in order to proceed to company overview
                cy.get("label[for$='.resume_N']").click();
                cy.get("input[value='submit']").click();
            } else {
                // Do nothing. Test has progressed to Company Overview as expected
            }
        })
        return this;

    }

}
export default CompanySignInPage