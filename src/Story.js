import React from 'react';
import axios from 'axios';
import './Story.css';
import { Button, Accordion } from 'react-bootstrap/';
import StoryForm from './StoryForm';
import JournalEntry from './JournalEntry'

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      showModal: false,
      showUpdateModal: false,
      storyToUpdate: {}
    }
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenUpdateModal = (storyToUpdate) => {
    this.setState({
      showUpdateModal: true,
      storyToUpdate: storyToUpdate
    })
  }

  handleCloseUpdateModal = () => {
    this.setState({
      showUpdateModal: false,
      storyToUpdate:{}
    })
  }
  
  getAllStories = async () => {

    // if (this.props.auth0.isAuthenticated) {
      try {
        let url = `${process.env.REACT_APP_SERVER}/stories`
        let storiesFromDB = await axios.get(url);
  
        this.setState({
          stories: storiesFromDB.data
        })
      } catch (error) {
        console.log(error.message);
      }
    // } 
  }

  componentDidMount(){
    this.getAllStories();
  }

  deleteStory = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/stories/${id}`;
      await axios.delete(url);
      let updatedStories = this.state.stories.filter(story => story._id !== id);
      this.setState({
        stories: updatedStories
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  putStory = async (storyToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/stories/${storyToUpdate._id}`
      let updateStoryFromAxios = await axios.put(url, storyToUpdate);
      let updatedStoryArray = this.state.stories.map(existingStory => {
        return existingStory._id === storyToUpdate._id
        ? updateStoryFromAxios.data
        : existingStory
      })
      this.setState({
        stories: updatedStoryArray
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {

    return (
      <>
        <h2>DreamWell Stories</h2>

        <Button variant = 'primary' onClick = {this.handleOpenModal}>Add A Story</Button>

        <StoryForm 
        show = {this.state.showModal} 
        handleCloseModal = {this.handleCloseModal}/>
        
        <JournalEntry 
          getAllStories={this.getAllStories} 
          showUpdateModal={this.state.showUpdateModal} 
          handleCloseUpdateModal={this.handleCloseUpdateModal} 
          storyToUpdate={this.state.storyToUpdate}
          putStory={this.putStory}/>
          

        {this.state.stories.length ? (
          <>
            <div className="accordion-wrapper">
            <Accordion>
            {/* <Accordion striped bordered hover> */}
            {this.state.stories.map( (story)=>(
              <Accordion.Item key={story._id}>
                <Accordion.Header>
                <h3>{story.title}</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  Here is your story: {story.content} <br />
                  Date: {story.date} <br />
                  Journal Entry: {story.entry}
                  </p>
                  <Button variant="danger" onClick={()=> this.deleteStory(story._id)}>Delete Story</Button>
                  <Button variant="success" onClick={()=> this.handleOpenUpdateModal(story)}>Add a note</Button>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
            </div>
          </>
            ) : (
          <h3>No Stories Found 🙁</h3>
         )}
      </>
    )
  }
}



            // {
            //   this.props.itemsList.map((item, idx) =>
            //     <Item 
            //     key={item._id} 
            //     itemData={item} 
            //     handleDelete={this.props.handleDelete}/>
            //   )
            // }


export default Story;
