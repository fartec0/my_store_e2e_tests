import AuthenticationPage from '../../page-objects/authentication-page'

const authenticationPage = new AuthenticationPage()

describe('The Search feature', () => {

    beforeEach( function () {
        cy.fixture('search').then((search) => {
            this.search = search
        })

        cy.visit('')
    })

    it('should display the search suggestions', function () {
        cy.get('#search_query_top').type('shoes')
        cy.get('div[class="ac_results"]').should('be.visible').then(($suggestions) => {
            cy.get($suggestions).find('li').then(($lis) => {
                cy.get($lis).each(($li) => {
                    console.log($li)
                    expect($li.prop('innerText')).not.to.be.empty
                    expect($li.prop('innerText')).to.have.length.within(4, 80)
                })
            })
        })
    })

    it.only('should display the search suggestions', function () {
        cy.get('#search_query_top').type('shoes')
        
        cy.get('#searchbox > .btn').click()
        
        cy.get('.page-heading').each(($heading) => {
            expect($heading.prop('innerText')).not.to.be.empty
            expect($heading.prop('innerText')).to.include('SHOES')
        })
        
        cy.get('.top-pagination-content > .product-count').then(($results_count) => {
            expect($results_count.prop('innerText')).to.eq('Showing 1 - 7 of 7 items')
        })
    })
})