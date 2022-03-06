class AuthenticationPage {

    constructor() {
        this.gender = '#id_gender1'
        this.customer_firstname = '#customer_firstname'
        this.customer_lastname = '#customer_lastname'
        this.email = '#email'
        this.passwd = '#passwd'
        this.days = '#days'
        this.months = '#months'
        this.years = '#years'
        this.newsletter = '#newsletter'
        this.optin = '#optin'
        this.firstname = '#firstname'
        this.company = '#company'
        this.address1 = '#address1'
        this.address2 = '#address2'
        this.city = '#city'
        this.id_state = '#id_state'
        this.postcode = '#postcode'
        this.id_country = '#id_country'
        this.other = '#other'
        this.phone = '#phone'
        this.phone_mobile = '#phone_mobile'
        this.alias = '#alias'
    }

    getGenderFormField() {
        return cy.get(this.gender)
    }

    getCustomerFirstnameFormField() {
        return cy.get(this.customer_firstname)
    }

    getCustomerLastnameFormField() {
        return cy.get(this.customer_lastname)
    }

    getEmailFormField() {
        return cy.get(this.email)
    }

    getPasswordFormField() {
        return cy.get(this.passwd)
    }
    
    getDaysFormField() {
        return cy.get(this.days)
    }

    getMonhtsFormField() {
        return cy.get(this.months)
    }

    getYearsFormField() {
        return cy.get(this.years)
    }

    getNewsletterFormField() {
        return cy.get(this.newsletter)
    }

    getOptInFormField() {
        return cy.get(this.optin)
    }

    getFirstnameFormField() {
        return cy.get(this.firstname)
    }

    getCompanyFormField() {
        return cy.get(this.company)
    }

    getAddress1FormField() {
        return cy.get(this.address1)
    }

    getAddress2FormField() {
        return cy.get(this.address2)
    }

    getCityFormField() {
        return cy.get(this.city)
    }

    getStateFormField() {
        return cy.get(this.id_state)
    }

    getPostCodeFormField() {
        return cy.get(this.postcode)
    }

    getCountryFormField() {
        return cy.get(this.id_country)
    }

    getAdditionalInfoFormField() {
        return cy.get(this.other)
    }

    getHomePhoneFormField() {
        return cy.get(this.phone)
    }

    getMobilePhoneFormField() {
        return cy.get(this.phone_mobile)
    }

    getAliasFormField() {
        return cy.get(this.alias)
    }

    getRegisterButton() {
        return cy.contains('Register')
    }
}

export default AuthenticationPage
