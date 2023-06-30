import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';

class StoryForm extends React.Component {
  handleStorySubmit = (event) => {
    event.preventDefault();
    let storyObj = {
      title: event.target.title.value,
      age: event.target.age.value,
      mainChar: event.target.mainChar.value,
      problem: event.target.problem.value,
      setting: event.target.setting.value
    }
    this.props.handleCloseModal();
    this.props.postStory(storyObj);
  }

  render() {
    return (
      <>

        <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create a Story</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleStorySubmit} className="storyForm">
              <Form.Group controlId="title">
                <Form.Label>Provide a Title For Your Story</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Your Age</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="mainChar">
                <Form.Label>Main Character of Story</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="problem">
                <Form.Label>Problem/Conflict</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="setting">
                <Form.Label>Setting/Location</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button type="submit">Create!</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

}

export default StoryForm;