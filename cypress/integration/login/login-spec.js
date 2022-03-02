describe('The User Login', () => {

    before(function () {
        cy.fixture('cart').then((cart) => {
            this.cart = cart
        })
    })

    beforeEach( () => {
        cy.visit('')
    })

    // Work in Progress
    it.skip('should sucessfully login a registered user', function () {
        cy.get('.login')
        .click()
     })
})
