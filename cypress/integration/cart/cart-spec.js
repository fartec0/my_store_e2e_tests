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
        cy.get('.layer_cart_product > h2').then(($modal_h2) => {
           expect($modal_h2.prop('innerText')).to.include(('Product successfully added to your shopping cart'))
        })

        cy.get('#layer_cart_product_title').then(($modal_product_title) => {
            cy.get($modal_product_title).should('have.text','Faded Short Sleeve T-shirts')
            expect($modal_product_title.prop('spellcheck')).to.eq(true)
        })

        cy.get('#layer_cart_product_attributes').then(($modal_product_attributes) => {
            cy.get($modal_product_attributes).should('have.text', 'Orange, S')
        })

        cy.get('#layer_cart_product_quantity').then(($modal_cart_product_quantity) => {
            expect($modal_cart_product_quantity.prop('innerText')).to.eq(('1'))
        })

        cy.get('h2 > .ajax_cart_product_txt').then(($ajax_cart_product_txt) => {
            expect($ajax_cart_product_txt.prop('innerText')).to.include(('There is 1 item in your cart.'))
        })

        cy.get('.ajax_block_products_total').then(($ajax_block_products_total) => {
            cy.get($ajax_block_products_total).should('have.text', '$16.51')
        })

        cy.get('.continue > span').then(($continue_button) => {
            expect($continue_button.prop('innerText')).to.include(('Continue shopping'))
        })

        cy.get('.button-medium > span').then(($checkout_button) => {
            expect($checkout_button.prop('innerText')).to.include(('Proceed to checkout'))
            expect($checkout_button).to.have.css('display', 'block')
            expect($checkout_button).to.have.css('border-color', 'rgb(116, 213, 120)')
        })

        // Close the modal
        cy.get('.cross').click().then(() => {
            // Verify that the modal has been closed
            cy.get('.layer_cart_product').should('not.to.be.visible')
            cy.get('.layer_cart_cart').should('not.to.be.visible')
        })
    })
})
