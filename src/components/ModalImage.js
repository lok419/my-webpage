import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';

/*
props:
name: classname for entire component
=> example: name = "poster"
classname of small image = "poster_small"
classname of large image = "poster_large"
classname of modal = "poster_modal"

image: pass an image object to render
*/

class ModalImage extends Component {
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
      <div class={this.props.name+ " center-block"} >
          <img class={this.props.name+ "_small"} src={this.props.image} alt={this.props.name+ "_small"} />
          <div class="overlay"  onClick={this.handleShow}>
            <h2>Click here to enlarge <span class="glyphicon">&#xe015;</span></h2>
          </div>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName= {this.props.name + "_modal"}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              An Investigation on Quantitative Techniques for Computational Finance (poster)
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img class={this.props.name +"_large center-block"} src={this.props.image} alt={this.props.name +"_large"}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalImage;
