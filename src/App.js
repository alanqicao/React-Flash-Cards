import React, { Component } from 'react';
import './App.css';
import { Container, Header, Button, Icon, Segment } from "semantic-ui-react";
import Flashcards from "./component/flashcards";
import Flashcards2 from "./component/flashcards2";
import FlashcardForm from "./component/FlashcardForm";

class App extends Component {
  state = {
    flashcards: [
      { id: 1, read: true, question: "How does React work?", answer: "React creates a virtual DOM. When state changes in a component it runs a diffing algorithm, which identifies changes in the virtual DOM and updates the DOM with results of the diff.", },
      { id: 2, read: false, question: "Why should you avoid copying props into state?", answer: "Copying props into state is both unnecessary and creates bugs. Updates to a prop won't be reflected in the state.", },

    ],
    showForm: true,
  };

  toggleForm = () => this.setState({showForm: !this.state.showForm, })

  getId = () => {
    return Math.floor((3 + Math.random()) * 10000);
  };

  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ flashcards: [flashcard, ...this.state.flashcards], });
  };

  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter(flashcard => {
      if (flashcard.id !== id)
        return flashcard
    });
    this.setState({ flashcards: [...flashcards], });
  }



  render() {
    return (

      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">React Flashcard</Header>
        <br />
        <FlashcardForm add={this.addFlashcard} />
        <br />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name='angle double down' /> Show Answer
          </Button>
          {this.state.showForm ? <Flashcards flashcards={this.state.flashcards} remove={this.removeFlashcard}  /> : 
          <Flashcards2 flashcards={this.state.flashcards} remove={this.removeFlashcard}  />}
        </Segment>
      </Container>
    )
  }

}


export default App;
