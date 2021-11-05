describe('Sad paths', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    .get('input[type="text"]')
    .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'} )
    .as('first-search')
    .get('.search-form').submit();
  })

  it('Should show an error page if a there\'s an error searching for books', () => {
    cy.reload()
    .get('.prompt').contains('We are sorry, something went wrong, please try searching again...');
  })

  it('should show an error page if there\'s an error finding recommendations', () => {
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
    .get('.book-card').first()
    .click();

    cy.reload()
    .get('.prompt').contains('We are sorry, something went wrong, please try searching again...');
  })

  it('Should show an error page if there\'s a problem displaying a book\'s details', () => {
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
    .get('.book-card').first()
    .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
    .get('.book-card').first()
    .click();

    cy.reload()
    .get('.prompt').contains('We are sorry, something went wrong, please try searching again...');
    })

    it('Should show an error if a book doesn\'t have a cover', () => {
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
    .get('.book-card').first()
    .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBookNoCover'})
    .get('.book-card').first()
    .click();

    cy.get('.right-container').contains('We don\'t have a cover for this book but it is a good one :)');
    })
})