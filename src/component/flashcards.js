import React from "react"
import Flashcard from "./flashcard"
import {Button,Table,} from "semantic-ui-react"


const Flashcards = ({flashcards,remove,})=> (

<Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Question</Table.HeaderCell>
        {/* <Table.HeaderCell>Answer</Table.HeaderCell> */}
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        flashcards.map(flashcard => ( 
        <Flashcard key = {flashcard.id} {...flashcard} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Flashcards;