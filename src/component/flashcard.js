import React from "react";
import {Button,Table,} from "semantic-ui-react";

const Flashcard =({question, answer})=> (

<Table.Row>
<Table.Cell>{question}</Table.Cell>
{/* <Table.Cell>{answer}</Table.Cell> */}
<Table.Cell>
  <Button color="blue">
    Delete
  </Button>
</Table.Cell>
</Table.Row> 
)

export default Flashcard;