import React from 'react';
// import axios from 'axios';
import './Story.css';
// import { Button, Accordion } from 'react-bootstrap/';
// import AddStory from './AddStory';
// import UpdateStory from './UpdateStory'


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

  // handleOpenModal = () => {
  //   this.setState({
  //     showModal: true
  //   })
  // }

  // handleCloseModal = () => {
  //   this.setState({
  //     showModal: false
  //   })
  // }

  // handleOpenUpdateModal = (storyToUpdate) => {
  //   this.setState({
  //     showUpdateModal: true,
  //     storyToUpdate: storyToUpdate
  //   })
  // }

  // handleCloseUpdateModal = () => {
  //   this.setState({
  //     showUpdateModal: false,
  //     storyToUpdate:{}
  //   })
  // }
  
  // getAllStories = async () => {
  //   try {
  //     let url = `${process.env.REACT_APP_SERVER}/stories`

  //     let storiesFromDB = await axios.get(url);

  //     this.setState({
  //       stories: storiesFromDB.data
  //     })
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // componentDidMount(){
  //   this.getAllStories();
  // }

  
  // deleteStory = async (id) => {
  //   try {
  //     let url = `${process.env.REACT_APP_SERVER}/stories/${id}`;
  //     await axios.delete(url);

  //     let updatedStories = this.state.stories.filter(story => story._id !== id);

  //     this.setState({
  //       stories: updatedStories
  //     })
      
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  render() {

    return (
      <>
        <h2>My Stories &amp; Formation Shelf</h2>

        {/* <Button variant = 'primary' onClick = {this.handleOpenModal}>Add A Story</Button>

        <AddStory getAllStories = {this.getAllStories} show = {this.state.showModal} handleClose = {this.handleCloseModal}/>
        <UpdateStory getAllStories={this.getAllStories} showModal={this.state.showUpdateModal} closeUpdateModal={this.handleCloseUpdateModal} storyToUpdate={this.state.storyToUpdate}/>

        {this.state.stories.length ? (
          <>
          <div className="accordion-container">
            <div className="accordion-wrapper">
              <Accordion>
            {this.state.stories.map( (story)=>(
              <Accordion.Item key={story._id}>
                <img className="d-block w-50" src={story.imageUrl || 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'} alt={story.title} />
                <Accordion.Caption>
                  <h3>{story.title}</h3>
                  <p>Description: {story.description} <br />
                  Status: {story.status}</p>
                  <Button variant="danger" onClick={()=> this.deleteStory(story._id)}>Delete Story</Button>
                  <Button variant="success" onClick={()=> this.handleOpenUpdateModal(story)}>Update Story</Button>
                </Accordion.Caption>
              </Accordion.Item>
            ))}
          </Accordion>
            </div>
          </div>
          </>
            ) : (
          <h3>No Stories Found 🙁</h3> */}
        {/* )} */}
      </>
    )
  }
}

export default Story;

