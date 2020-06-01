import AddressPage from "./generic/Address"

class NotificationOfSailAndRegisterLocationPage extends AddressPage {

    sailAddressManualEntryLink() {
        cy.get('#address-manual-link').click()
        return this;
    }

    enterSailAddress(buildingNameNumber, postcode) {
        //this.changeCompanyAddressLink();
        this.lookUpROAddress(buildingNameNumber, postcode);
        cy.accessibilityCheck();
        this.companyAddressContinue();
    }

    changeLocationOfRegisters() {
        cy.get('#sail-registers-container-change').click();
        cy.get('#checkRegsAll').click();
        cy.accessibilityCheck();
        //select to move all registers
        cy.get('li[id$=selection]').click({multiple: true});
        cy.accessibilityCheck();
        cy.get('#sail-registers-container-continue').click();    
    }

}

export default NotificationOfSailAndRegisterLocationPage
