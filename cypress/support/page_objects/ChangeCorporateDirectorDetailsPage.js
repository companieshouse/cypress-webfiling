import CorporateOfficerAppointment from "./generic/CorporateOfficerAppointment";
import BasePage from "./generic/BasePage";

class ChangeCorporateDirectorDetailsPage extends BasePage {

    enterDateOfChangeAsToday() {
        cy.selectTodaysDate('#day-select-4', '#month-select-4', '#year-select-4');
        return this;
    }

    changeCorporateDirectorName(newName) {
        cy.get('#corporate-name-container-change').click();
        //Check after opening the section
        cy.accessibilityCheck();
        cy.get('#corporateName').clear().type(newName);
        cy.get('#corporate-name-container-continue').click();
        return this;
    }

}

export default ChangeCorporateDirectorDetailsPage