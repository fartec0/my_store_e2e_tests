import AuthenticationPage from '../../page-objects/authentication-page'

const authenticationPage = new AuthenticationPage()

describe('The Sign Up process', () => {

    beforeEach( function () {
        cy.fixture('signup').then((signup) => {
            this.signup = signup
        })

        cy.visit('')
    })

    // Positive tests
    it('should be completed when all the entered information is correct', function () {
        cy.get('.login')
        .click()

        cy.get('#email_create')
        .type((Math.random() + 1).toString(36).substring(7) + '@bit-test.com')

        cy.get('#SubmitCreate > span')
        .click()
        
        cy.get('.page-heading').should('be.visible').then(() => {
            cy.log("Fill in the user registration form")
            authenticationPage.getGenderFormField().should('not.to.be.selected').click()
            authenticationPage.getCustomerFirstnameFormField().should('be.empty').type(this.signup.user.firstname)
            authenticationPage.getCustomerLastnameFormField().should('be.empty').type(this.signup.user.lastname)
            authenticationPage.getEmailFormField().should('be.empty')
            authenticationPage.getPasswordFormField().should('be.empty').type(this.signup.user.password)
            authenticationPage.getDaysFormField().should('contain', '-').select(this.signup.user.birth_day)
            authenticationPage.getMonhtsFormField().should('contain', '-').select(this.signup.user.birth_month)
            authenticationPage.getYearsFormField().should('contain', '-').select(this.signup.user.birth_year)
            authenticationPage.getNewsletterFormField().should('not.to.be.selected').click()
            authenticationPage.getOptInFormField().should('not.to.be.selected').click()
            authenticationPage.getCompanyFormField().should('be.empty').type('Test Co.')
            authenticationPage.getAddress1FormField().should('be.empty').type(this.signup.user.address_1)
            authenticationPage.getAddress2FormField().should('be.empty').type(this.signup.user.address_2)
            authenticationPage.getCityFormField().should('be.empty').type(this.signup.user.city)
            authenticationPage.getStateFormField().should('contain', '-').select(this.signup.user.state)
            authenticationPage.getPostCodeFormField().should('be.empty').type(this.signup.user.post_code)
            authenticationPage.getCountryFormField().should('contain', '-').select(this.signup.user.country)
            authenticationPage.getAdditionalInfoFormField().should('be.empty').type(this.signup.user.additional_info)
            authenticationPage.getHomePhoneFormField().should('be.empty').type(this.signup.user.home_phone)
            authenticationPage.getMobilePhoneFormField().should('be.empty').type(this.signup.user.mobile_phone)
            authenticationPage.getAliasFormField().should('be.empty')
            authenticationPage.getRegisterButton().click().then(() => {
                // My Account page
                cy.get('#account-creation_form').should('not.exist')
                cy.get('.info-account').should('be.visible')
            })
        })
     })

    // Negative tests
    it('should not be initiated for an already existing e-mail account', function () {
        cy.get('.login')
        .click()

        cy.get('#email_create')
        .type('test@test.com')

        cy.get('#SubmitCreate > span')
        .click()

        cy.get('#create_account_error').then(($create_account_error) => {
            expect($create_account_error).to.have.class('alert alert-danger')
            expect($create_account_error).to.have.css('text-shadow','rgba(0, 0, 0, 0.1) 1px 1px 0px')
            expect($create_account_error).to.have.css('background-color', 'rgb(243, 81, 92)')
        })
     })

    it('should not be completed with an invalid Post Code', function () {
        cy.get('.login')
        .click()

        cy.get('#email_create')
        .type((Math.random() + 1).toString(36).substring(7) + '@bit-test.com')

        cy.get('#SubmitCreate > span')
        .click()
        
        cy.get('.page-heading').should('be.visible').then(() => {
            cy.log("Fill in the user registration form")
            authenticationPage.getGenderFormField().should('not.to.be.selected').click()
            authenticationPage.getCustomerFirstnameFormField().should('be.empty').type(this.signup.user.firstname)
            authenticationPage.getCustomerLastnameFormField().should('be.empty').type(this.signup.user.lastname)
            authenticationPage.getEmailFormField().should('be.empty')
            authenticationPage.getPasswordFormField().should('be.empty').type(this.signup.user.password)
            authenticationPage.getDaysFormField().should('contain', '-').select(this.signup.user.birth_day)
            authenticationPage.getMonhtsFormField().should('contain', '-').select(this.signup.user.birth_month)
            authenticationPage.getYearsFormField().should('contain', '-').select(this.signup.user.birth_year)
            authenticationPage.getNewsletterFormField().should('not.to.be.selected').click()
            authenticationPage.getOptInFormField().should('not.to.be.selected').click()
            authenticationPage.getFirstnameFormField().then(($firstname) => {
                console.log($firstname)
            })
            // authenticationPage.getCustomerLastnameFormField().should('contain', 'Lastname test')
            authenticationPage.getCompanyFormField().should('be.empty').type('Test Co.')
            authenticationPage.getAddress1FormField().should('be.empty').type(this.signup.user.address_1)
            authenticationPage.getAddress2FormField().should('be.empty').type(this.signup.user.address_2)
            authenticationPage.getCityFormField().should('be.empty').type(this.signup.user.city)
            authenticationPage.getStateFormField().should('contain', '-').select(this.signup.user.state)
            authenticationPage.getPostCodeFormField().should('be.empty').type(this.signup.invalid_input.invalid_post_code)
            authenticationPage.getCountryFormField().should('contain', '-').select(this.signup.user.country)
            authenticationPage.getAdditionalInfoFormField().should('be.empty').type(this.signup.user.additional_info)
            authenticationPage.getHomePhoneFormField().should('be.empty').type(this.signup.user.home_phone)
            authenticationPage.getMobilePhoneFormField().should('be.empty').type(this.signup.user.mobile_phone)
            authenticationPage.getAliasFormField().should('be.empty')
            authenticationPage.getRegisterButton().click().then(() => {
                cy.get('#account-creation_form')
                .should('exist')
                
                cy.get('.alert')
                .should('be.visible')
                .and('contain', 'There is 1 error')
                .and('contain', "The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
            })
        })
    })


    it('should not be completed to sign-up without entering an address', function () {
        cy.get('.login')
        .click()

        cy.get('#email_create')
        .type((Math.random() + 1).toString(36).substring(7) + '@bit-test.com')

        cy.get('#SubmitCreate > span')
        .click()
        
        cy.get('.page-heading').should('be.visible').then(() => {
            cy.log("Fill in the user registration form")
            authenticationPage.getGenderFormField().should('not.to.be.selected').click()
            authenticationPage.getCustomerFirstnameFormField().should('be.empty').type(this.signup.user.firstname)
            authenticationPage.getCustomerLastnameFormField().should('be.empty').type(this.signup.user.lastname)
            authenticationPage.getEmailFormField().should('be.empty')
            authenticationPage.getPasswordFormField().should('be.empty').type(this.signup.user.password)
            authenticationPage.getDaysFormField().should('contain', '-').select(this.signup.user.birth_day)
            authenticationPage.getMonhtsFormField().should('contain', '-').select(this.signup.user.birth_month)
            authenticationPage.getYearsFormField().should('contain', '-').select(this.signup.user.birth_year)
            authenticationPage.getNewsletterFormField().should('not.to.be.selected').click()
            authenticationPage.getOptInFormField().should('not.to.be.selected').click()
            authenticationPage.getFirstnameFormField().then(($firstname) => {
                console.log($firstname)
            })
            authenticationPage.getCompanyFormField().should('be.empty').type('Test Co.')
            authenticationPage.getAddress2FormField().should('be.empty').type(this.signup.user.address_2)
            authenticationPage.getCityFormField().should('be.empty').type(this.signup.user.city)
            authenticationPage.getStateFormField().should('contain', '-').select(this.signup.user.state)
            authenticationPage.getPostCodeFormField().should('be.empty').type(this.signup.user.post_code)
            authenticationPage.getCountryFormField().should('contain', '-').select(this.signup.user.country)
            authenticationPage.getAdditionalInfoFormField().should('be.empty').type(this.signup.user.additional_info)
            authenticationPage.getHomePhoneFormField().should('be.empty').type(this.signup.user.home_phone)
            authenticationPage.getMobilePhoneFormField().should('be.empty').type(this.signup.user.mobile_phone)
            authenticationPage.getAliasFormField().should('be.empty')
            authenticationPage.getRegisterButton().click().then(() => {
                cy.get('#account-creation_form')
                .should('exist')
                
                cy.get('.alert')
                .should('be.visible')
                .and('contain', 'There is 1 error')
                .and('contain', "address1 is required.")
            })
        })
    })

    it('should not be completed without entering an address and with an invalid post code', function () {
        cy.get('.login')
        .click()

        cy.get('#email_create')
        .type((Math.random() + 1).toString(36).substring(7) + '@bit-test.com')

        cy.get('#SubmitCreate > span')
        .click()
        
        cy.get('.page-heading').should('be.visible').then(() => {
            cy.log("Fill in the user registration form")
            authenticationPage.getGenderFormField().should('not.to.be.selected').click()
            authenticationPage.getCustomerFirstnameFormField().should('be.empty').type(this.signup.user.firstname)
            authenticationPage.getCustomerLastnameFormField().should('be.empty').type(this.signup.user.lastname)
            authenticationPage.getEmailFormField().should('be.empty')
            authenticationPage.getPasswordFormField().should('be.empty').type(this.signup.user.password)
            authenticationPage.getDaysFormField().should('contain', '-').select(this.signup.user.birth_day)
            authenticationPage.getMonhtsFormField().should('contain', '-').select(this.signup.user.birth_month)
            authenticationPage.getYearsFormField().should('contain', '-').select(this.signup.user.birth_year)
            authenticationPage.getNewsletterFormField().should('not.to.be.selected').click()
            authenticationPage.getOptInFormField().should('not.to.be.selected').click()
            authenticationPage.getFirstnameFormField().then(($firstname) => {
                console.log($firstname)
            })
            authenticationPage.getCompanyFormField().should('be.empty').type('Test Co.')
            authenticationPage.getAddress2FormField().should('be.empty').type(this.signup.user.address_2)
            authenticationPage.getCityFormField().should('be.empty').type(this.signup.user.city)
            authenticationPage.getStateFormField().should('contain', '-').select(this.signup.user.state)
            authenticationPage.getPostCodeFormField().should('be.empty').type(this.signup.invalid_input.invalid_post_code)
            authenticationPage.getCountryFormField().should('contain', '-').select(this.signup.user.country)
            authenticationPage.getAdditionalInfoFormField().should('be.empty').type(this.signup.user.additional_info)
            authenticationPage.getHomePhoneFormField().should('be.empty').type(this.signup.user.home_phone)
            authenticationPage.getMobilePhoneFormField().should('be.empty').type(this.signup.user.mobile_phone)
            authenticationPage.getAliasFormField().should('be.empty')
            authenticationPage.getRegisterButton().click().then(() => {
                cy.get('#account-creation_form')
                .should('exist')
                
                cy.get('.alert')
                .should('be.visible')
                .and('contain', 'There are 2 errors')
                .and('contain', "address1 is required.")
                .and('contain', "The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
            })
        })
    })
})
