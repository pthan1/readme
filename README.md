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
The goal of this project was to implement at least one self though technology by creating an interactive web application, in this case the user can log in and create a reading list.

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

1. Clone down the Readme repo
2. Cd into `readme`
3. Run `npm install`
4. Run `npm start`
5. Your browser will open the website.

To run Cypress tests:

1. In a separate terminal, run `npx cypress open`
2. Cypress browser will load, choose a test and see the results

## Code Architecture

The React architecture is based on 18 functional components, we used 2 context to manage state globally using local storage and reducer functions to make these more readable and to pass two class components and three functional components. The class components holds state and are in charge of the network requests, while the functional components just render information passed down as props.

## Illustrations

## Wins

- Great team collaboration

## Challenges & Improvements

- Had trouble intercepting API requests during Cypress testing

## Future Features

## Contributors

- [Carlos Gomez](https://github.com/karmacarlos)

## Project Specs

- The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)