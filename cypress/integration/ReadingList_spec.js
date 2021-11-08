describe('Reading List flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('A user should not be able to add a book to their reading list if not logged on', () => {
    
    cy.get('input[type="text"]')
      .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'})
      .get('.search-form')
      .submit();

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
      .get('.book-card')
      .first()
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.recommendation-card')
      .first()
      .click();

    cy.get('.add-readlist-btn')
      .should('not.exist')
  })

  it('A user should be able to view reading list once logged on', () => {
    cy.intercept('GET', 'http://localhost:5000/api/v1/users', { fixture: 'users' }
    )
    .get('.link-to-login')
    .click()
    .get('.select')
    .select('a2')
    .get('.login-btn')
    .click()
    .get('.reading-list-link')
    .click()
    .get('.p-prompt-reading-list')
    .contains('Your Reading List');
  })

  it('A user should be able to see a message if the reading list is empty', () => {
    cy.intercept('GET', 'http://localhost:5000/api/v1/users', { fixture: 'users' }
    )
    .get('.link-to-login')
    .click()
    .get('.select')
    .select('a2')
    .get('.login-btn')
    .click()
    .get('.reading-list-link')
    .click()
    .get('.card-container-reading-list')
    .contains('Your Reading List is empty.');
  })

  it('A user should have the option to add a book to their reading list', () => {
    cy.intercept('GET', 'http://localhost:5000/api/v1/users', { fixture: 'users' }
    )
    .get('.link-to-login')
    .click()
    .get('.select')
    .select('a2')
    .get('.login-btn')
    .click()
    .get('input[type="text"]')
    .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'})
      .get('.search-form')
      .submit();

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
      .get('.book-card')
      .first()
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.recommendation-card')
      .first()
      .click()

    cy.intercept('PATCH', 'http://localhost:5000/api/v1/users/add/a2', { fixture: 'bookToPost' })
      .get('.add-readlist-btn')
      .should('exist')
  })

  it('A user should be able to see that a message that book has been added to their reading list', () => {
    cy.intercept('GET', 'http://localhost:5000/api/v1/users', { fixture: 'users' }
    )
      .get('.link-to-login')
      .click()
      .get('.select')
      .select('a2')
      .get('.login-btn')
      .click()
      .get('input[type="text"]')
      .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'})
      .get('.search-form')
      .submit();

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
      .get('.book-card')
      .first()
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.recommendation-card')
      .first()
      .click()

    cy.intercept('PATCH', 'http://localhost:5000/api/v1/users/add/a2', { fixture: 'bookToPost' })
      .get('.add-readlist-btn')
      .click()
      .get('.overview-display')
      .contains('Added to Reading List')
  })

  it('A user should be able to see a book that\'s been added on their Reading lList', () => {
    cy.intercept('GET', 'http://localhost:5000/api/v1/users', { fixture: 'users' }
    )
      .get('.link-to-login')
      .click()
      .get('.select')
      .select('a2')
      .get('.login-btn')
      .click()
      .get('input[type="text"]')
      .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'})
      .get('.search-form')
      .submit();

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
      .get('.book-card')
      .first()
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.recommendation-card')
      .first()
      .click()

    cy.intercept('PATCH', 'http://localhost:5000/api/v1/users/add/a2', { fixture: 'bookToPost' })
      .get('.add-readlist-btn')
      .click()
      .get('.reading-list-link')
      .click()
      .get('.rl-book-card')
      .contains('Simple');
  })

  it('A user should be able to view a book\'s details when clicked on from the reading list', () => {
    cy.intercept('GET', 'http://localhost:5000/api/v1/users', { fixture: 'users' }
    )
      .get('.link-to-login')
      .click()
      .get('.select')
      .select('a2')
      .get('.login-btn')
      .click()
      .get('input[type="text"]')
      .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'})
      .get('.search-form')
      .submit();

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
      .get('.book-card')
      .first()
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.recommendation-card')
      .first()
      .click()

    cy.intercept('PATCH', 'http://localhost:5000/api/v1/users/add/a2', { fixture: 'bookToPost' })
      .get('.add-readlist-btn')
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.reading-list-link')
      .click()
      .get('.rl-book-card')
      .click()
      .get('.detail-title')
      .contains('Slightly South of Simple');
  })

  it('A user should be able to delete a book from the reading list', () => {
    cy.intercept('GET', 'http://localhost:5000/api/v1/users', { fixture: 'users' }
      )
      .get('.link-to-login')
      .click()
      .get('.select')
      .select('a2')
      .get('.login-btn')
      .click()
      .get('input[type="text"]')
      .type('Dune');

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book1'})
      .get('.search-form')
      .submit();

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'book2'})
      .get('.book-card')
      .first()
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.recommendation-card')
      .first()
      .click()

    cy.intercept('PATCH', 'http://localhost:5000/api/v1/users/add/a2', { fixture: 'bookToPost' })
      .get('.add-readlist-btn')
      .click()

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', { fixture: 'singleBook'})
      .get('.reading-list-link')
      .click()

    cy.intercept('PATCH', 'http://localhost:5000/api/v1/users/delete/a2', [])
      .get('.rl-delete-btn')
      .click()
      .get('.card-container-reading-list')
      .contains('Your Reading List is empty.');
  })
})