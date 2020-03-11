import React from "react"
import Flashcard2 from "./flashcard2"
import {Button,Table,} from "semantic-ui-react"


const Flashcards2 = ({flashcards,remove})=> (

<Table celled padded>
    <Table.Header>
      <Table.Row>
        {/* <Table.HeaderCell>Flash Cards</Table.HeaderCell> */}
        <Table.HeaderCell>Answer</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        flashcards.map(flashcard => ( 
        <Flashcard2 key = {flashcard.id} {...flashcard} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Flashcards2;