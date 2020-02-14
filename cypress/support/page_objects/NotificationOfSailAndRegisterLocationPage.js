import AddressPage from "./generic/Address"

//const addressPage = new AddressPage();

class NotificationOfSailAndRegisterLocationPage extends AddressPage {

    enterSailAddress(buildingNameNumber, postcode) {
        this.lookUpROAddress(buildingNameNumber, postcode);
        //cy.accessibilityCheck();
        cy.get('#company-address-container-continue').click();
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