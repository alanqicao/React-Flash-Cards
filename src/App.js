import React,{Component} from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react";
import Flashcards from "./component/flashcards";
import FlashcardForm from "./component/FlashcardForm";

class App extends Component {
  state = {
    flashcards: [
      { id: 1, read: true, question: "How does React work?", answer: "React creates a virtual DOM. When state changes in a component it runs a diffing algorithm, which identifies changes in the virtual DOM and updates the DOM with results of the diff.", },
      { id: 2, read: false, question: "Why should you avoid copying props into state?", answer: "Copying props into state is both unnecessary and creates bugs. Updates to a prop won't be reflected in the state.", },

    ],
  };

  getId = () => {
    return Math.floor((3 + Math.random()) * 10000);
  };

  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ flashcards: [flashcard, ...this.state.flashcards], });
  };
  


  render() {
    return(
      
      <Container style ={{ paddingTop: "25px" }}>
        <Header as="h1">React Flashcard</Header>
        <br />
        <FlashcardForm add={this.addFlashcard} />
        <br />
        <Flashcards flashcards={this.state.flashcards} />
      
      </Container>
    )
  }

}


  export default App;
