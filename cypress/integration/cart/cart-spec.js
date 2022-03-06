describe('The Shopping Cart', () => {

    beforeEach( function () {
        cy.fixture('cart').then((cart) => {
            this.cart = cart
        })

        cy.visit('')
    })

    it('should correctly add a product', function () {
        // Add first highlighted product to cart
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
        .click()

        // Added to cart modal
        cy.get('.layer_cart_product > h2')
            .should('include.text', 'Product successfully added to your shopping cart')

        cy.get('#layer_cart_product_title')
            .should('have.text','Faded Short Sleeve T-shirts')

        cy.get('#layer_cart_product_attributes')
            .should('have.text', 'Orange, S')

        cy.get('#layer_cart_product_quantity')
            .should('have.text', '1')

        cy.get('h2 > .ajax_cart_product_txt')
            .should('include.text', 'There is 1 item in your cart.')

        cy.get('.ajax_block_products_total')
            .should('have.text', '$16.51')

        cy.get('.continue > span')
            .should('include.text', 'Continue shopping')

        cy.get('.button-medium > span')
            .should('include.text' ,'Proceed to checkout')
            .and('have.css', 'display', 'block')
            .and('have.css', 'border-color', 'rgb(116, 213, 120)')

        // Close the modal
        cy.get('.cross').click().then(() => {
            // Verify that the modal has been closed
            cy.get('.layer_cart_product')
                .should('not.to.be.visible')
            cy.get('.layer_cart_cart')
                .should('not.to.be.visible')
        })
    })
})
