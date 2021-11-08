describe('Reading List flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to login from the landing page', () => {
    cy.get('.link-to-login')
    .click()
    .get('.select')
    .select('a2')
    .get('.login-btn')
    .click()
    .get('.loggedin')
    .contains('Hello, Phil')

  })

    it('should be able to login from the first search results page', () => {
cy.get('input[type="text"]')
    .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'} )
    .as('first-search')
    .get('.search-form').submit();

        cy.get('.link-to-login')
    .click()
    .get('.select')
    .select('a2')
    .get('.login-btn')
    .click()
    .get('.loggedin')
    .contains('Hello, Phil')
  })


    it('should be able to login from the recommedations page', () => {
cy.get('input[type="text"]')
    .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'} )
    .get('.search-form').submit();
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
    .get('.book-card').first()
    .click();

        cy.get('.link-to-login')
    .click()
    .get('.select')
    .select('a2')
    .get('.login-btn')
    .click()
    .get('.loggedin')
    .contains('Hello, Phil');
  })

    it('should be able to login from the book details page', () => {
cy.get('input[type="text"]')
    .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'})
    .get('.search-form').submit();

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
    .get('.book-card').first()
    .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
    .get('.recommendation-card').first()
    .click();
    
        cy.get('.link-to-login')
    .click()
    .get('.select')
    .select('a2')
    .get('.login-btn')
    .click()
    .get('.loggedin')
    .contains('Hello, Phil')
  })
 
  it('A user shoud be redirected to an error page if they visit an invalid url', () => {
    cy.visit('http://localhost:3000/potatoes')
    .get('.prompt-error')
    .contains('We are sorry, something went wrong, please try searching again...')
  })
})