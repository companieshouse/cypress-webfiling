import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import ManageRegistersPreFilingPage from '../../support/page_objects/ManageRegistersPreFilingPage'
import ChangeLocationOfRegisters from '../../support/page_objects/ChangeLocationOfRegisters'

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const manageRegistersPreFilingPage = new ManageRegistersPreFilingPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const changeLocationOfRegisters = new ChangeLocationOfRegisters();

describe('EH01/02/03, EW01/02/03 - Elect to Hold Registers on the Public Register or Registered Office Address', () => {
    beforeEach(() => {
        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
            .selectEh01();
    })

    it('EH01/EW01 - Move directors Registers check all screens and submit form', () => {
        //Select correct register
        manageRegistersPreFilingPage.selectDirectorsRegister();
        //Elect to hold directors register on public record or  hold at the registered office
        changeLocationOfRegisters.moveARegister();

        //Confirm submission page displayed and accessibility check
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();

    })

    it('EH01/EW01 SAIL Address Error Validation', () => {
        //Select correct register
        manageRegistersPreFilingPage.selectDirectorsRegister();
        //Select to move registers to SAIL address
        changeLocationOfRegisters.moveRegistersToSailAddress()
        .enterAddressManually()
        cy.accessibilityCheck();

        //Check after firing invalid SAIL address field errors
        changeLocationOfRegisters.invalidEntryforSAILAddressFields('`')
        .submitMoveRegisters();
        cy.accessibilityCheck();
    })

    it('EH02/EW02 - Directors URA registers check all screens and submit form', () => {
        //Select correct register to move
        manageRegistersPreFilingPage.selectDirectorsUraRegister();
        //Elect to hold directors URA register on public record or  hold at the registered office
        changeLocationOfRegisters.moveARegister();

        //Confirm submission page displayed and accessibility check
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();

    })

    it('EH03/EW03 - Secretaries registers check all screens and submit form', () => {
        //Select correct register
        manageRegistersPreFilingPage.selectSecretariesRegister()
        //Elect to hold secretaries register on public record or hold at the registered office
        changeLocationOfRegisters.moveARegister();

        //Confirm submission page displayed and accessibility check
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();

    })

    it('EH03/EW03 SAIL Address Error Validation', () => {
        //Select correct register
        manageRegistersPreFilingPage.selectSecretariesRegister();
        //Select to move registers to SAIL address
        changeLocationOfRegisters.moveRegistersToSailAddress()
        .enterAddressManually();
        cy.accessibilityCheck();

        //Check after firing invalid SAIL address field errors
        changeLocationOfRegisters.invalidEntryforSAILAddressFields('`')
        .submitMoveRegisters();
        cy.accessibilityCheck();
    })

})
