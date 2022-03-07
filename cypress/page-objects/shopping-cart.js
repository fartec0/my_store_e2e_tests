class ShoppingCartPage {

    constructor() {
        this.layer_cart_product_h2 = ".layer_cart_product > h2"
        this.layer_cart_product_title  = "#layer_cart_product_title"
        this.layer_cart_product_attributes = "#layer_cart_product_attributes"
        this.layer_cart_product_quantity = "#layer_cart_product_quantity"
        this.layer_cart_product_text = "h2 > .ajax_cart_product_txt"
        this.layer_cart_products_total = ".ajax_block_products_total"
        this.layer_cart_continue_shopping_message = ".continue > span"
    }

    getCartModalH2() {
        return cy.get(this.layer_cart_product_h2)
    }

    getCartModalProductTitle() {
        return cy.get(this.layer_cart_product_title)
    }

    getCartModalProductAttributes() {
        return cy.get(this.layer_cart_product_attributes)
    }

    getCartModalProductQuantity() {
        return cy.get(this.layer_cart_product_quantity)
    }

    getCartModalProductText() {
        return cy.get(this.layer_cart_product_text)
    }

    getCartModalProductsTotal() {
        return cy.get(this.layer_cart_products_total)
    }

    getCartModalContinueShoppingMessage() {
        return cy.get(this.layer_cart_continue_shopping_message)
    }
}

export default ShoppingCartPage