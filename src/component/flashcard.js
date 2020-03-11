import React from "react";
import {Button,Table,} from "semantic-ui-react";

const Flashcard =({id,question, answer,remove,onClick})=> (

<Table.Row>
  
<Table.Cell>{question}</Table.Cell>
{/* <Table.Cell>{answer}</Table.Cell> */}
<Table.Cell>
  <Button color="blue" onClick={()=> remove(id)}>
    Delete
  </Button>
</Table.Cell>
</Table.Row> 
)

export default Flashcard;