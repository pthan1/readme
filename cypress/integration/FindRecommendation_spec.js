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

    cy
			.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', {
				statusCode: 200,
				body: {items: [{
    id: "B1hSG45JCX4C",
    volumeInfo: {
        title: "Dune",
        authors: [
            "Frank Herbert"
        ],
        categories: [
            "Fiction"
        ],
        averageRating: 4.5,
        imageLinks: {
            "smallThumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
        
        }}]}}).
    get('.search-form').submit();

    cy.get('.book-card').contains('Dune');
  })

  it('Should choose a book and see a book recommendations', () => {
    cy.get('input[type="text"]')
    .type('Dune');

    cy
						.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', {
				statusCode: 200,
				body: {items: [{
    id: "B1hSG45JCX4C",
    volumeInfo: {
        title: "Dune",
        authors: [
            "Frank Herbert"
        ],
        categories: [
            "Fiction"
        ],
        averageRating: 4.5,
        imageLinks: {
            "smallThumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
        
        }}]}}).
    get('.search-form').submit();

    cy
			.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', {
				statusCode: 200,
				body: { items: [{
    id: "9fyxDgAAQBAJ",
    volumeInfo: {
        title: "Slightly South of Simple",
        subtitle: "A Novel",
        authors: [
            "Kristy Woodson Harvey"
        ],
        description: "<b>NATIONAL BESTSELLER<br> *<i>Glitter Guide</i>’s “Must Reads for April”<br> *<i>PopSugar</i>’s “Ultimate Summer Reading”<br> *<i>Bustle</i>’s Books to Read and Discuss With Your Mom and Grandma<br> *<i>New York Live’</i>s “Ashley’s A-List” Pick</b><br> <br><b>“One of the hottest new Southern writers.” —<i>Parade</i></b><br> <br>From the next “major voice in Southern fiction” (Elin Hilderbrand, <i>New York Times</i> bestselling author) comes the first in an all-new series chronicling the journeys of three sisters and their mother—and a secret from their past that has the potential to tear them apart and reshape their very definition of what it means to be a family.<br><br>Caroline Murphy swore she’d never set foot back in the small Southern town of Peachtree Bluff; she was a New York girl born and bred and the worst day of her life was when, in the wake of her father’s death, her mother selfishly forced her to move—during her senior year of high school, no less—back to that hick-infested rat trap where she'd spent her childhood summers. But now that her marriage to a New York high society heir has fallen apart in a very public, very embarrassing fashion, a pregnant Caroline decides to escape the gossipmongers with her nine-year-old daughter and head home to her mother, Ansley.<br> <br>Ansley has always put her three daughters first, especially when she found out that her late husband, despite what he had always promised, left her with next to nothing. Now the proud owner of a charming waterfront design business and finally standing on her own two feet, Ansley welcomes Caroline and her brood back with open arms. But when her second daughter Sloane, whose military husband is overseas, and youngest daughter and successful actress Emerson join the fray, Ansley begins to feel like the piece of herself she had finally found might be slipping from her grasp. Even more discomfiting, when someone from her past reappears in Ansley's life, the secret she’s harbored from her daughters their entire lives might finally be forced into the open.<br> <br>Exploring the powerful bonds between sisters and mothers and daughters, this engaging novel is filled with Southern charm, emotional drama, and plenty of heart.",
        "categories": [
            "Fiction / Romance / Contemporary",
            "Fiction / Women",
            "Fiction / Family Life / General"
        ],
        "averageRating": 4.5,
        "ratingsCount": 11,
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71RHrcdBUeG-yF3Dq2sSkTg-h04XbL-0YvSagzY7FDC5IBBR-DIXuslPhVM28sKpcUZhLjbsXluSbN5GRgwxvJCubAy9gnHVHgCJZU3xcI9_honfD-n0DeXQ5EKEob1hgdgIog7&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73-FdmcAgyocMWI9CVqHHUEiEUeC9iOESI7cRLWiSWkELetegP526AHFHPxUVI7jb7ypVQASxMc6AbLathUEMBCXQG99I8yPxL017iumjXo1rdW3nowQH7lT0YAP-ILnRYMQE2V&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72j-5R2yLZZXa8PtB8wRFNBdXygzEFBPMG8llWsPfj5oSelgSS7V4Q6upnzO-dqPufL8qQFAzipNVlt85YQ1x2fxPgyiQNFIUFnk3NSWobtU6zjCy8BREtAdseURiH6GL0c_a5O&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71C7DdvlRelJAa9UqBeSr2t4yI9pRZFhEyfmi6KivFfoiSQavgK021l-cWkMxdYEsIv_sLaxytoVBE4QvqDlP3ATh8Zzr3PaG8352HkiLyXiy1-6kJft7Y0bAPT27OAQrI9yIzU&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73Y-tpt1OcgW6RbOknbiUIDF1UduscSIzkQL9IE7gMkk93tVEqWplzTDxdtPZYefdi8IGD-kenDdphaXA3sleLP7jPWRuKvUlXJMg5P9Isw-nGg4-xwjWe1TWPBmUN0UlaHeBJ8&source=gbs_api",
            "extraLarge": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE71gs3BKQEWuDo0uiXDBNzX-7HbhjJY2tJ4TvXLFtQfMS9MmK0cBccCPuvWoOsOQn6kIe8dPhXNdHkFTWUBI0QueLxB4oH3Q9smX49mw_82Ar3Htw9HctsRxTQgkoXXTa1c-aHzA&source=gbs_api"
        }
       
    }
            }]}}).get('.book-card').click()
        
        cy.get('.book-card').contains('Slightly South of Simple')

  })

  it('Should show a recommended book\'s details when clicked on', () => {
       cy.get('input[type="text"]')
    .type('Dune');

    cy
    .intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=Dune&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', {
				statusCode: 200,
				body: {items: [{
    id: "B1hSG45JCX4C",
    volumeInfo: {
        title: "Dune",
        authors: [
            "Frank Herbert"
        ],
        categories: [
            "Fiction"
        ],
        averageRating: 4.5,
        imageLinks: {
            "smallThumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
        
        }}]}}).
    get('.search-form').submit();

    cy
    .intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', {
        statusCode: 200,
        body: { items: [{
    id: "9fyxDgAAQBAJ",
    volumeInfo: {
        title: "Slightly South of Simple",
        subtitle: "A Novel",
        authors: [
            "Kristy Woodson Harvey"
        ],
        description: "<b>NATIONAL BESTSELLER<br> *<i>Glitter Guide</i>’s “Must Reads for April”<br> *<i>PopSugar</i>’s “Ultimate Summer Reading”<br> *<i>Bustle</i>’s Books to Read and Discuss With Your Mom and Grandma<br> *<i>New York Live’</i>s “Ashley’s A-List” Pick</b><br> <br><b>“One of the hottest new Southern writers.” —<i>Parade</i></b><br> <br>From the next “major voice in Southern fiction” (Elin Hilderbrand, <i>New York Times</i> bestselling author) comes the first in an all-new series chronicling the journeys of three sisters and their mother—and a secret from their past that has the potential to tear them apart and reshape their very definition of what it means to be a family.<br><br>Caroline Murphy swore she’d never set foot back in the small Southern town of Peachtree Bluff; she was a New York girl born and bred and the worst day of her life was when, in the wake of her father’s death, her mother selfishly forced her to move—during her senior year of high school, no less—back to that hick-infested rat trap where she'd spent her childhood summers. But now that her marriage to a New York high society heir has fallen apart in a very public, very embarrassing fashion, a pregnant Caroline decides to escape the gossipmongers with her nine-year-old daughter and head home to her mother, Ansley.<br> <br>Ansley has always put her three daughters first, especially when she found out that her late husband, despite what he had always promised, left her with next to nothing. Now the proud owner of a charming waterfront design business and finally standing on her own two feet, Ansley welcomes Caroline and her brood back with open arms. But when her second daughter Sloane, whose military husband is overseas, and youngest daughter and successful actress Emerson join the fray, Ansley begins to feel like the piece of herself she had finally found might be slipping from her grasp. Even more discomfiting, when someone from her past reappears in Ansley's life, the secret she’s harbored from her daughters their entire lives might finally be forced into the open.<br> <br>Exploring the powerful bonds between sisters and mothers and daughters, this engaging novel is filled with Southern charm, emotional drama, and plenty of heart.",
        "categories": [
            "Fiction / Romance / Contemporary",
            "Fiction / Women",
            "Fiction / Family Life / General"
        ],
        "averageRating": 4.5,
        "ratingsCount": 11,
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71RHrcdBUeG-yF3Dq2sSkTg-h04XbL-0YvSagzY7FDC5IBBR-DIXuslPhVM28sKpcUZhLjbsXluSbN5GRgwxvJCubAy9gnHVHgCJZU3xcI9_honfD-n0DeXQ5EKEob1hgdgIog7&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73-FdmcAgyocMWI9CVqHHUEiEUeC9iOESI7cRLWiSWkELetegP526AHFHPxUVI7jb7ypVQASxMc6AbLathUEMBCXQG99I8yPxL017iumjXo1rdW3nowQH7lT0YAP-ILnRYMQE2V&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72j-5R2yLZZXa8PtB8wRFNBdXygzEFBPMG8llWsPfj5oSelgSS7V4Q6upnzO-dqPufL8qQFAzipNVlt85YQ1x2fxPgyiQNFIUFnk3NSWobtU6zjCy8BREtAdseURiH6GL0c_a5O&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71C7DdvlRelJAa9UqBeSr2t4yI9pRZFhEyfmi6KivFfoiSQavgK021l-cWkMxdYEsIv_sLaxytoVBE4QvqDlP3ATh8Zzr3PaG8352HkiLyXiy1-6kJft7Y0bAPT27OAQrI9yIzU&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73Y-tpt1OcgW6RbOknbiUIDF1UduscSIzkQL9IE7gMkk93tVEqWplzTDxdtPZYefdi8IGD-kenDdphaXA3sleLP7jPWRuKvUlXJMg5P9Isw-nGg4-xwjWe1TWPBmUN0UlaHeBJ8&source=gbs_api",
            "extraLarge": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE71gs3BKQEWuDo0uiXDBNzX-7HbhjJY2tJ4TvXLFtQfMS9MmK0cBccCPuvWoOsOQn6kIe8dPhXNdHkFTWUBI0QueLxB4oH3Q9smX49mw_82Ar3Htw9HctsRxTQgkoXXTa1c-aHzA&source=gbs_api"
        }
       
    }
            }]}}).get('.book-card').click()

    cy.
    intercept('GET', 'https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w', {
        statusCode: 200,
        body: {
    volumeInfo: {
        title: "Slightly South of Simple",
        subtitle: "A Novel",
        authors: [
            "Kristy Woodson Harvey"
        ],
        description: "<b>NATIONAL BESTSELLER<br> *<i>Glitter Guide</i>’s “Must Reads for April”<br> *<i>PopSugar</i>’s “Ultimate Summer Reading”<br> *<i>Bustle</i>’s Books to Read and Discuss With Your Mom and Grandma<br> *<i>New York Live’</i>s “Ashley’s A-List” Pick</b><br> <br><b>“One of the hottest new Southern writers.” —<i>Parade</i></b><br> <br>From the next “major voice in Southern fiction” (Elin Hilderbrand, <i>New York Times</i> bestselling author) comes the first in an all-new series chronicling the journeys of three sisters and their mother—and a secret from their past that has the potential to tear them apart and reshape their very definition of what it means to be a family.<br><br>Caroline Murphy swore she’d never set foot back in the small Southern town of Peachtree Bluff; she was a New York girl born and bred and the worst day of her life was when, in the wake of her father’s death, her mother selfishly forced her to move—during her senior year of high school, no less—back to that hick-infested rat trap where she'd spent her childhood summers. But now that her marriage to a New York high society heir has fallen apart in a very public, very embarrassing fashion, a pregnant Caroline decides to escape the gossipmongers with her nine-year-old daughter and head home to her mother, Ansley.<br> <br>Ansley has always put her three daughters first, especially when she found out that her late husband, despite what he had always promised, left her with next to nothing. Now the proud owner of a charming waterfront design business and finally standing on her own two feet, Ansley welcomes Caroline and her brood back with open arms. But when her second daughter Sloane, whose military husband is overseas, and youngest daughter and successful actress Emerson join the fray, Ansley begins to feel like the piece of herself she had finally found might be slipping from her grasp. Even more discomfiting, when someone from her past reappears in Ansley's life, the secret she’s harbored from her daughters their entire lives might finally be forced into the open.<br> <br>Exploring the powerful bonds between sisters and mothers and daughters, this engaging novel is filled with Southern charm, emotional drama, and plenty of heart.",
        categories: [
            "Fiction / Romance / Contemporary",
            "Fiction / Women",
            "Fiction / Family Life / General"
        ],
        averageRating: 4.5,
        imageLinks: {
            smallThumbnail: "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70hIOV9HOl5x4enrLET5DM3Vq3_qE54EJK5_xGdOMNQ1FixZX50TTWXwn1E1fjLIFLiKxJQCJ101XsahelPtaY1Q9DA-pyZtxiAPWVh3SG66ACjHtrVrxmtv_Dfj7NJDjmDfuC-&source=gbs_api",
            thumbnail: "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70tVGqf06M_3DOUZmPZcxoQQ6K1nuzxNdN4KVFy7QpvuIcJ9gWpnbDtFH2UeIoQKTLjjtpQtZgR0xrXpAk31nrZo8j7W6hG1tjvuv4V5PA3gJwrJON4kkwdsmiZzOpkd5rJ7fY3&source=gbs_api",
            small: "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73vMgNOVRi8U5s8bIPIXOmWYPqmlBtQj4JRLmEYVtku8q2eGwviyO_9TBwibNSInc1Hwr5BuHnZg9hNj8wtHOjJGcXu8CvP6upou8_Yluj6tjrcc7R4MXxW4YvPB4M5dKTrh6HE&source=gbs_api",
            medium: "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72xfp_NeD-hMWwJRbgFhoE44NVWfaOibz-AubJwFjny-_xMyECIQbAZuUYY0K5qE_e0Ys5sN4tX7f1fydmufjcBbyQb_wi1v5mqpSK6pZ8LMmR08FqOdwJYniv1IwUinnBOLAsT&source=gbs_api",
            large: "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71yHalNeQ1QuKXeIgrKITcnWRtlOmXm03EhTSP7kjFPDGJ3QA-dC7EJzHKmMvvEAInUDx5VRcE0SacWeTwNABwv2VHNIlgtrcEwTL4qdMvOk-SE3bxvgetAb1kCenbT9AF_uGdf&source=gbs_api",
            extraLarge: "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70KBy-COGY9PfSnOePOsWjh1K4cGJ3iCBDCgzYHRLwqspGQAIJ4TMmBhVqM6tEGb5BoLsIi8aEO38G1_ZrfPkoKQEguCrXz6H61OjpxGz7WU-teK0hXjjB-HHUK1o-ROy-7lS9Z&source=gbs_api"
        }
    }
    }}
    ).get('.book-card').click();

    cy.get('.detail-title').contains('Slightly South of Simple');

  })

})

