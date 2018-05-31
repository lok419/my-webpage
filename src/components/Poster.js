import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import project2_poster from '../images/project2_poster.png'

class Poster extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div class="project2_poster center-block">
          <img src={project2_poster} alt="project2_poster_small"/>
          <div class="overlay"  onClick={this.handleShow}>
            <h2>Click here to enlarge <span class="glyphicon">&#xe015;</span></h2>
          </div>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="project2_poster_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              An Investigation on Quantitative Techniques for Computational Finance (poster)
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img class="center-block" src={project2_poster} height="auto" width="1000px" alt="project2_poster_large"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Poster;
