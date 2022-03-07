import ShoppingCartPage from '../../page-objects/shopping-cart'

const shoppingCartPage = new ShoppingCartPage()

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
        shoppingCartPage.getCartModalH2()
            .should('include.text', this.cart.modal.added_ok_message )

        shoppingCartPage.getCartModalProductTitle()
            .should('have.text', this.cart.product.t_shirt.title)

        shoppingCartPage.getCartModalProductAttributes()
            .should('have.text', this.cart.product.t_shirt.color_and_size)

        shoppingCartPage.getCartModalProductQuantity()        
            .should('have.text', this.cart.product.t_shirt.quantity)

        shoppingCartPage.getCartModalProductText()
            .should('include.text', this.cart.modal.content_message)

        shoppingCartPage.getCartModalProductsTotal()
            .should('have.text', this.cart.product.t_shirt.price)

        shoppingCartPage.getCartModalContinueShoppingMessage()
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
