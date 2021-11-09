# Readme App

Mod 3 Project

## Table of Contents

- [Abstract](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Technologies](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Code Architecture](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Install and Set Up](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Illustrations](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Wins](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Challenges](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Contributors](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)
- [Project Specs](https://www.notion.so/Readme-md-033c5db170ef438f9323768888e58ee8)

## Abstract

Web application that helps the user choose the next book to read based on a book the user likes.
The goal of this project was to implement at least one self taught technology by creating an interactive web application, in this case the user can log in, search a book by title, see recommendations and create a reading list.

## Technologies

- Javascript
- HTML
- CSS
- React
- React Router
- ContextAPI
- Hooks
- Cypress
- Express.js

## Install and Set Up

To run the application:

You can see this application on the following link:

[Readme](https://readme-2107.herokuapp.com/)

To run Cypress tests:

1. Clone down the Readme repo
2. Cd into `readme`
3. Run `npm install`
4. Run `npm start`
5. Your browser will open the website.
6. In a separate terminal, run `npx cypress open`
7. Cypress browser will load, choose a test and see the results


## Code Architecture

The React architecture is based on 18 functional components, we used 2 context to manage state globally using local storage and reducer functions to make these more readable and to pass just two values as props to any of our child components.

## Illustrations
![readme-screen-shots](https://user-images.githubusercontent.com/82873669/140862033-31ad423c-a0a9-4ba2-96ea-a93682b9b385.gif)


## Wins

- Great team collaboration
- Implementation of contextAPI
- Implementation of React hooks 
- Implementation of reducer functions to manage the interaction of our context with the rest of the components
- We were able to meet the deadlines that we set for ourselves

## Challenges & Improvements

- We had challenges cleaning the data
- We had challenges making our state persist after refreshing the browser
- We had challenges implementing a patch request to add and remove books from the reading list in our server

## Future Features

- Improve the recommendation algorithm 

## Contributors

- [Carlos Gomez](https://github.com/karmacarlos)
- [Bei Zhang](https://github.com/beizy)
- [Phil Than](https://github.com/pthan1)

## Project Specs

- The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)
