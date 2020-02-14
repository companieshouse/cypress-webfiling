import AddressPage from "./generic/Address"

//const addressPage = new AddressPage();

class NotificationOfSailAndRegisterLocationPage extends AddressPage {

    enterSailAddress(buildingNameNumber, postcode) {
        this.lookUpROAddress(buildingNameNumber, postcode);
        cy.accessibilityCheck();
        cy.get('#company-address-container-continue').click();
    }

    changeLocationOfRegisters() {
        cy.get('#sail-registers-container-change').click();
        cy.get('#checkRegsAll').click();
        cy.accessibilityCheck();
        cy.get('li[id*=D_I_R_I_N_D_E_M__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=M_E_M_B_E_R__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=D_I_R_C_O_N_T_R_A_C_T__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=O_W_N_S_H_R_C_A_P__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=S_E_C__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=R_E_S_M_E_E_T__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=D_E_B__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=C_H_A_R_G_E_E_W_N_I__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=O_W_N_S_H_R_P_U_R_C_H__d_i_s_p_l_a_y_-selection').click();
        cy.get('li[id*=P_S_C__d_i_s_p_l_a_y_-selection').click();
        cy.accessibilityCheck();
        cy.get('#sail-registers-container-continue').click();    
    }

}

export default NotificationOfSailAndRegisterLocationPage