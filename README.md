## Mobile Flashcards Project
This project was developed for the final assessment of Udacity's React Native course. This project can be executed on devices running Android or iOS but it was tested only using an Android device due to a lack of resource. Unfortunately, there is no iOS simulator for Linux OS which was used to build this application.

### Overview
Build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Why this project?
This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. Understand how to use React Native to build an iOS and Android application.

## Get Started

* Clone this repository
```
git clone https://github.com/emrachid/UdaciCards
```
* Enter into project root path
```
cd UdaciCards
```
* Download dependencies using `yarn` or `npm`
```
yarn install
```
* Start application using `yarn` or `npm`
```
yarn start
```
* Download and install [Expo](https://expo.io/tools#client) client application in your device for testing purpose
* Open Expo application and scan QR code that appears on the terminal after executing `yarn start`
* This project will execute on your device

## Specification
Create project using `create-react-native-app`. There will be no starter code.

### Specific Requirements
* Allow users to create a deck which can hold an unlimited number of cards.
* Allow users to add a card to a specific deck.
* The front of the card should display the question.
* The back of the card should display the answer.
* Users should be able to quiz themselves on a specific deck and receive a score once they're done.
* Users should receive a notification to remind themselves to study if they haven't already for that day.

### Views
Your application should have, at a minimum, five views as the following.

#### Deck List View (Default View)
* displays the title of each Deck
* displays the number of cards in each deck

#### Individual Deck View
* displays the title of the Deck
* displays the number of cards in the deck
* displays an option to start a quiz on this specific deck
* an option to add a new question to the deck

#### Quiz View
* displays a card question
* an option to view the answer (flips the card)
* a "Correct" button
* an "Incorrect" button
* the number of cards left in the quiz
* displays the percentage correct once the quiz is complete

#### New Deck View
* an option to enter in the title for the new deck
* an option to submit the new deck title

#### New Question View
* an option to enter in the question
* an option to enter in the answer
* an option to submit the new question

### Data
Use AsyncStorage to store our decks and flashcards. Redux is optional for this project.

Using AsyncStorage, manage an object whose shape is similar to this:

```bash
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```

## Contributing
This repository is for React Udacity course. Therefore, pull requests are not allowed. For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License
The contents of this repository are covered under the [MIT License](LICENSE).
