class AuthenticationPage {

    constructor() {
        this.gender = '#id_gender1'
    }

    getGenderFormField() {
        return cy.get('#id_gender1')
    }

    getCustomerFirstnameFormField() {
        return cy.get('#customer_firstname')
    }

    getCustomerLastnameFormField() {
        return cy.get('#customer_lastname')
    }

    getEmailFormField() {
        return cy.get('#email')
    }

    getPasswordFormField() {
        return cy.get('#passwd')
    }
    
    getDaysFormField() {
        return cy.get('#days')
    }

    getMonhtsFormField() {
        return cy.get('#months')
    }

    getYearsFormField() {
        return cy.get('#years')
    }

    getNewsletterFormField() {
        return cy.get('#newsletter')
    }

    getOptInFormField() {
        return cy.get('#optin')
    }

    getFirstnameFormField() {
        return cy.get('#firstname')
    }

    getCompanyFormField() {
        return cy.get('#company')
    }

    getAddress1FormField() {
        return cy.get('#address1')
    }

    getAddress2FormField() {
        return cy.get('#address2')
    }

    getCityFormField() {
        return cy.get('#city')
    }

    getStateFormField() {
        return cy.get('#id_state')
    }

    getPostCodeFormField() {
        return cy.get('#postcode')
    }

    getCountryFormField() {
        return cy.get('#id_country')
    }

    getAdditionalInfoFormField() {
        return cy.get('#other')
    }

    getHomePhoneFormField() {
        return cy.get('#phone')
    }

    getMobilePhoneFormField() {
        return cy.get('#phone_mobile')
    }

    getAliasFormField() {
        return cy.get('#alias')
    }

    getRegisterButton() {
        return cy.contains('Register')
    }
    

    
}

export default AuthenticationPage
