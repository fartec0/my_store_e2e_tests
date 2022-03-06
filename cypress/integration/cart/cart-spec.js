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
            .should('include.text', this.cart.modal.added_ok_message )

        cy.get('#layer_cart_product_title')
            .should('have.text', this.cart.product.t_shirt.title)

        cy.get('#layer_cart_product_attributes')
            .should('have.text', this.cart.product.t_shirt.color_and_size)

        cy.get('#layer_cart_product_quantity')
            .should('have.text', this.cart.product.t_shirt.quantity)

        cy.get('h2 > .ajax_cart_product_txt')
            .should('include.text', this.cart.modal.content_message)

        cy.get('.ajax_block_products_total')
            .should('have.text', this.cart.product.t_shirt.price)

        cy.get('.continue > span')
            .should('include.text', this.cart.modal.continue_shopping_message)

        cy.get('.button-medium > span')
            .should('include.text', this.cart.modal.proceed_to_checkout_message)
            .and('have.css', 'display', this.cart.modal.css_display)
            .and('have.css', 'border-color', this.cart.modal.css_border_color)

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
