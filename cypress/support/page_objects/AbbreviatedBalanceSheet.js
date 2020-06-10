import AccountsBalanceSheet from "./generic/AccountsBalanceSheet";
import { invalid_character } from "../../fixtures/test_inputs.json";


class AbbreviatedBalanceSheet extends AccountsBalanceSheet {

    // Inputs populate the "Total fixed assets" calculation fields
    enterFixedAssets(previousIntangibleAssets, currentIntangibleAssets, previousTangibleAssets,
        currentTangibleAssets, currentInvestments, previousInvestments) {
        cy.get('input[id$="currentIntangible"]').clear().type(currentIntangibleAssets);
        cy.get('input[id$="previousIntangible"]').clear().type(previousIntangibleAssets);
        cy.get('input[id$="currentTangible"]').clear().type(currentTangibleAssets);
        cy.get('input[id$="previousTangible"]').clear().type(previousTangibleAssets);
        cy.get('input[id$="fixedAssetsControl.currentInvestments"]').clear().type(currentInvestments);
        cy.get('input[id$="fixedAssetsControl.previousInvestments"]').clear().type(previousInvestments);
        return this;
    }

    enterInvalidFixedAssets() {
        this.enterFixedAssets(invalid_character, invalid_character, invalid_character, invalid_character,
            invalid_character, invalid_character);
        return this;
    }

    // Inputs populate the "Total current assets" calculation fields
    enterCurrentAssets(currentStocks, previousStocks, currentDebtors, previousDebtors, currentInvestments,
        previousInvestments, currentCashInBank, previousCashInBank) {
        cy.get('input[id$="currentStocks"]').clear().type(currentStocks);
        cy.get('input[id$="previousStocks"]').clear().type(previousStocks);
        cy.get('input[id$="currentDebtors"]').clear().type(currentDebtors);
        cy.get('input[id$="previousDebtors"]').clear().type(previousDebtors);
        cy.get('input[id$="currentAssetsControl.currentInvestments"]').clear().type(currentInvestments);
        cy.get('input[id$="currentAssetsControl.previousInvestments"]').clear().type(previousInvestments);
        cy.get('input[id$="currentCash"]').clear().type(currentCashInBank);
        cy.get('input[id$="previousCash"]').clear().type(previousCashInBank);
        return this;
    }

    enterInvalidCurrentAssets() {
        this.enterCurrentAssets(invalid_character, invalid_character, invalid_character, invalid_character,
            invalid_character, invalid_character, invalid_character, invalid_character);
        return this;
    }

    // Input values into the "Prepayments and accrued income" and "Creditors: amounts falling due within one year" 
    // fields. Calculates a value for "Net current assets (liabilities)" and "Total assets less current liabilities"
    enterCurrentAssetsLiabilities(currentPrepayments, previousPrepayments, currentCreditors, previousCreditors) {
        cy.get('input[id$="currentPrepaymentsAndAccruedIncome"]').clear().type(currentPrepayments);
        cy.get('input[id$="previousPrepaymentsAndAccruedIncome"]').clear().type(previousPrepayments);
        cy.get('input[id$="currentCreditorsDueWithinOneYear"]').clear().type(currentCreditors);
        cy.get('input[id$="previousCreditorsDueWithinOneYear"]').clear().type(previousCreditors);
        return this;
    }
    enterInvalidCurrentAssetsLiabilities() {
        this.enterCurrentAssetsLiabilities(invalid_character, invalid_character, invalid_character, invalid_character);
        return this;
    }

    // Input values into the "Creditors: amounts falling due after more than one year", "Provisions for liabilities" 
    // and "Accruals and deferred income" fields. Calculates a value for "Total net assets (liabilities)"    
    enterTotalNetAssets(currentCreditors, previousCreditors, currentProvisionsForLiabilities, previousProvisionsForLiabilities,
        currentAccrualsAndDeferredIncome, previousAccrualsAndDeferredIncome) {
        cy.get('input[id$="currentCreditorsDueAfterOneYear"').clear().type(currentCreditors);
        cy.get('input[id$="previousCreditorsDueAfterOneYear"').clear().type(previousCreditors);
        cy.get('input[id$="currentProvisionsForLiabilities"]').clear().type(currentProvisionsForLiabilities);
        cy.get('input[id$="previousProvisionsForLiabilities"]').clear().type(previousProvisionsForLiabilities);
        cy.get('input[id$="currentAccrualsAndDeferredIncome"]').clear().type(currentAccrualsAndDeferredIncome);
        cy.get('input[id$="previousAccrualsAndDeferredIncome"]').clear().type(previousAccrualsAndDeferredIncome);
        return this;
    }

    enterInvalidTotalNetAssets() {
        this.enterTotalNetAssets(invalid_character, invalid_character, invalid_character, invalid_character,
            invalid_character, invalid_character);
        return this;
    }

    enterCapitalAndReserves(currentCalledUpShareCapital, previousCalledUpShareCapital, currentSharePremiumAccount,
        previousSharePremiumAccount, currentRevaluationReserve, previousRevaluationReserve, currentOtherReserves,
        previousOtherReserves, currentProfitAndLossAccount, previousProfitAndLossAccount) {
        cy.get('input[id$="currentCalledUpShareCapital"]').clear().type(currentCalledUpShareCapital);
        cy.get('input[id$="previousCalledUpShareCapital"]').clear().type(previousCalledUpShareCapital);
        cy.get('input[id$="currentSharePremiumAccount"]').clear().type(currentSharePremiumAccount);
        cy.get('input[id$="previousSharePremiumAccount"]').clear().type(previousSharePremiumAccount);
        cy.get('input[id$="currentRevaluationReserve"]').clear().type(currentRevaluationReserve);
        cy.get('input[id$="previousRevaluationReserve"]').clear().type(previousRevaluationReserve);
        cy.get('input[id$="currentOtherReserves"]').clear().type(currentOtherReserves);
        cy.get('input[id$="previousOtherReserves"]').clear().type(previousOtherReserves);
        cy.get('input[id$="currentProfitAndLossAccount"]').clear().type(currentProfitAndLossAccount);
        cy.get('input[id$="previousProfitAndLossAccount"]').clear().type(previousProfitAndLossAccount);
        return this;
    }

    enterInvalidCapitalAndReserves() {
        this.enterCapitalAndReserves(invalid_character, invalid_character, invalid_character, invalid_character,
            invalid_character, invalid_character, invalid_character, invalid_character, invalid_character, invalid_character);
        return this;
    }

    openIntangibleAssetsNote() {
        cy.get('button[id$="intangibleNote"]').click().wait(5000);
        return this;
    }

    openTangibleAssetsNote() {
        cy.get('button[id$=".tangibleNote"]').click().wait(5000);
        return this;
    }

    openInvestmentsNote() {
        cy.get('button[id$="investmentsNote"]').click().wait(5000);
    }

    openDebtorsNote() {
        cy.get('button[id$="debtorsNote"]').click().wait(5000);
    }

    openCalledUpShareCapitalNote() {
        cy.get('button[id$="calledUpShareCapitalNote"]').click().wait(5000);
    }

    openAccountingPoliciesNote() {
        cy.get('button[id$="accountingPoliciesNote"]').click();
    }

    openTransactionsWithDirectorsNote() {
        cy.get('button[id$="transactionsWithDirectorsNote"]').click();
    }

}

export default AbbreviatedBalanceSheet
