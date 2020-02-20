import BasePage from "./generic/BasePage";

class ChangeOfCompanyName extends BasePage {

    enterProposedName(name) {
        cy.get('input[type=text]').type(name);
        return this;
    }

    selectNameEnding(nameEnding) {
        cy.get('select[name="ChangeOfName.CONTabControl.sectionContent.proposedNameEnding"]').select(nameEnding);
        return this;
    }

    enterResolutionDate(date) {
        cy.get('input[type="text"]').type(date);
        return this;
    }

    giveNoticeOfProposedName() {
        cy.get('input[type="checkbox"]').check();
        return this;
    }

    continueButton() {
        cy.get('input[type="submit"][value="CONFIRM"]').click();
    }

    submitChangeOfName() {
        cy.get('input[type="submit"][class="button"]').click();
    }

}

export default ChangeOfCompanyName