/**
  Author : Yeasin Muhammad Nur
  Implemented a End to End testing flow using cypress 
  Application Type : Ecommerce
  Reporting : HTML (mochawesome-reporter) 
**/


describe('e2e_Suite', () => {


  it('TC1-Verify Title', function() {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //Verifing Page title
    cy.title().should('eq','GreenKart - veg and fruits kart')
   

  })


  it('TC2-Validate searching with an existing product', function() {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    // search existing item/product in the search box ex-'Cucumber'
    cy.get('.search-keyword').type('Cucumber')
    cy.wait(2000)
    //Validate searched item
    cy.get('h4.product-name').contains("Cucumber")

  })

  it('TC3-Validate the item in Cart after ADD to CART', function() {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    // search existing item/product in the search box ex-'Cucumber'
    cy.get('.search-keyword').type('Cucumber')
    cy.wait(2000)
    //Validate searched item
    cy.get('h4.product-name').contains("Cucumber")
    // Addind searched item into the cart 
    cy.get('.product-action > button').click()
    // Open the Cart 
    cy.get('.cart-icon > img').click()
    cy.wait(2000)
    //Validate item in the cart 
    cy.get('.cart-item ').find('.product-name').contains("Cucumber")

  })

  it('TC4-Validate the item from Checkout page after PROCEED TO CHECKOUT from CART', function() {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    // search existing item/product in the search box ex-'Cucumber'
    cy.get('.search-keyword').type('Cucumber')
    cy.wait(2000)
    //Validate searched item
    cy.get('h4.product-name').contains("Cucumber")
    // Addind searched item into the cart 
    cy.get('.product-action > button').click()
    // Open Cart 
    cy.get('.cart-icon > img').click()
    cy.wait(2000)
    //Validate item in the cart 
    cy.get('.cart-item ').find('.product-name').contains("Cucumber")
    // Navigate Checkout page from cart by clicking proceed
    cy.get('.action-block button[type="button"]').contains("PROCEED TO CHECKOUT").click()
    //Validate item in the checkout page from item table
    cy.get('tr td:nth-child(2) p.product-name').should('have.text', 'Cucumber - 1 Kg')

  })

  it('TC5-Validate Place Order of the item from Checkout page ', function() {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    // search existing item/product in the search box ex-'Cucumber'
    cy.get('.search-keyword').type('Cucumber')
    cy.wait(2000)
    //Validate searched item
    cy.get('h4.product-name').contains("Cucumber")
    // Addind searched item into the cart 
    cy.get('.product-action > button').click()
    // Open Cart 
    cy.get('.cart-icon > img').click()
    cy.wait(2000)
    //Validate item in the cart 
    cy.get('.cart-item ').find('.product-name').contains("Cucumber")
    // Navigate Checkout page from cart by clicking proceed
    cy.get('.action-block button[type="button"]').contains("PROCEED TO CHECKOUT").click()
    //Validate item in the checkout page from item table
    cy.get('tr td:nth-child(2) p.product-name').should('have.text', 'Cucumber - 1 Kg')
    cy.wait(2000)
    
    cy.get('.discountAmt').siblings()
    // Place order from checkout page
    cy.get('button').contains("Place Order").click()
    //Select Country from statice dropdown 
    cy.get('select').select('Bangladesh').should('have.value','Bangladesh')
    cy.get('.chkAgree').click()
    cy.wait(2000)
    cy.get('button').click()
    // Validate success messege after successfully Placing order 
    cy.get('[style="color:green;font-size:25px"]').
    contains("Thank you, your order has been placed successfully")


  })

})


