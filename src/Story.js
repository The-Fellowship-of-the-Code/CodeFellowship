import React from 'react';
import axios from 'axios';
import './Story.css';
import { Button, Accordion } from 'react-bootstrap/';
import StoryForm from './StoryForm';
import JournalEntry from './JournalEntry'
import banner from './img/banner.jpeg'

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

  postStory = async (x) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER}/stories`, x);
    this.getAllStories();
  } catch (error){
    console.log(error.message);
  }
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
        <div className='banner' style={{backgroundImage: `url(${banner})`}}>
          <div className='title-text'>
            <h2 className='title'>DreamWell Stories 🌙 </h2>
          </div>
          <Button className='create-btn' variant = 'primary' onClick = {this.handleOpenModal}>Create a Story</Button>
        </div>
        <StoryForm 
        show = {this.state.showModal} 
        handleCloseModal = {this.handleCloseModal}
        postStory = {this.postStory}
        />

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
                <Accordion.Body className='accordion-body'>
                  <p>
                  Here is your story: {story.content} <br />
                  Date: {story.date} <br />
                  Journal Entry: {story.entry}
                  </p>
                  <Button className="update-btn" variant="success" onClick={()=> this.handleOpenUpdateModal(story)}>Change Title/Add a note</Button>
                  <Button variant="danger" onClick={()=> this.deleteStory(story._id)}>Delete Story</Button>
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
