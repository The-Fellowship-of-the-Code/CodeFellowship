import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class JournalEntry extends React.Component {

  handleJournalEntry = (event) => {
    event.preventDefault();

    let storyToUpdate = {
      title: event.target.title.value,
      entry: event.target.entry.value,
      _id: this.props.storyToUpdate._id,
      __v: this.props.storyToUpdate.__v
    }
    this.props.putStory(storyToUpdate);
  }


  render() {
    return (
      <>
        <Modal
          show={this.props.showUpdateModal}
          onHide={this.props.handleCloseUpdateModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Your Thoughts On This Story</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={this.handleJournalEntry}>
            <Form.Group controlId="title" >
              <Form.Label>Change Title</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="entry" >
              <Form.Label>Your thoughts</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Button type="submit" onClick={this.props.handleCloseUpdateModal} >Change Title or Add Journal Entry</Button>
          </Form>
          </Modal.Body>
        </Modal >
      </>
    )
  }
}

export default JournalEntry;