describe('Finding Book Recommendations flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to see a welcome message displayed', () => {
cy.get('.prompt').contains('Welcome to readME!')
  })

  it('Should be able to select the book search input and fill it out with a title of a book', () => {
    cy.get('input[type="text"]')
    .type('Dune')
    .should('have.value', 'Dune')
  })

  it('Should be able to submit a search and see search results', () => {
    cy.get('input[type="text"]')
    .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'} )
    .as('first-search')
    .get('.search-form').submit();

    cy.get('.book-card').contains('Dune');
  })

  it('Should choose a book and see a book recommendations', () => {
    cy.get('input[type="text"]')
    .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'} )
    .get('.search-form').submit();
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
    .get('.book-card').first()
    .click()
    cy.get('.recommendation-card')
    .contains('Slightly South of Simple')
  })

  it('Should show a recommended book\'s details when clicked on', () => {
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

    cy.get('.detail-title').contains('Slightly South of Simple');
  })

  it('Should be able to get return to the book recommendations view from the book details page', () => {
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

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
    .get('.overview-display')
    .get('.left-container')
    .get('.go-back-arrow').click();

    cy.get('.recommendation-card')
    .contains('Slightly South of Simple')
})

it('The user should see a message if there are no recommenations to display') {
  
}

})