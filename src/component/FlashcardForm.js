import React from "react";
import { Form,Checkbox,Button, } from "semantic-ui-react";

export default class FlashcardForm extends React.Component {
  state = { question: "", answer: "", read: true };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ question: "", answer: "", read: true });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name='question'
            fluid
            label="Question"
            placeholder="Question"
            
            value={this.state.question}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Answer"
            placeholder="Answer"
            name="answer"
            value={this.state.answer}
            onChange={this.handleChange}
          />

          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

