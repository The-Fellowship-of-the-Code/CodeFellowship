import { Component } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import wasim from './img/wasim.png'
import ryan from './img/ryan.png'
import rocio from './img/rocio.png'
import tojot from './img/tojot.jpg'
import './About.css'


class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <div className="body">
        <h2 className="teamHeader">Meet Our Team</h2>
        <Container className="profile-container">
          <Row className="row">
            <Col  xs={6} md={3}>
              <Image className="wasim-img" src={wasim} roundedCircle />
              <h4> <b>Wasim Soomro</b> </h4>
              <p class="mb-0">Software Developer</p>
            </Col>
            <Col xs={6} md={3}>
              <Image className="ryan-img" src={ryan} roundedCircle />
              <h4> <b>Ryan Gosselin</b> </h4>
              <p class="mb-0">Software Developer</p>
            </Col>
            <Col xs={6} md={3}>
              <Image className="rocio-img" src={rocio} roundedCircle />
              <h4> <b>Rocio Martinez</b> </h4>
              <p class="mb-0">Software Developer</p>
            </Col>
            <Col xs={6} md={3}>
              <Image className="christianrhey-img" src={tojot} roundedCircle />
              <h4> <b>ChristianRhey Tojot</b> </h4>
              <p class="mb-0">Software Developer</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default About;