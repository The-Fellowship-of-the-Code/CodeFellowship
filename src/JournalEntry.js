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

  // handleCloseModal = () => {
  //   this.props.handleCloseUpdateModal();
  // }

  render() {
    return (
      <>
        <Modal
          show={this.props.showUpdateModal}
          onHide={this.props.handleCloseUpdateModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add your thoughts on this story.</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleJournalEntry}>
            <Form.Group controlId="title" >
              <Form.Label>Change Title</Form.Label>
              <Form.Control type="text"/>
              {/* <Form.Control type="text" defaultValue={this.props.bookToUpdate.title} /> */}
            </Form.Group>
            <Form.Group controlId="entry" >
              <Form.Label>Your thoughts</Form.Label>
              <Form.Control type="text"/>
              {/* <Form.Control type="text" defaultValue={this.props.bookToUpdate.description} /> */}
            </Form.Group>
            <Button type="submit" onClick={this.handleCloseModal} >Add my entry</Button>
          </Form>
        </Modal >
      </>
    )
  }
}

export default JournalEntry;