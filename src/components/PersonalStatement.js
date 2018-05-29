import React, { Component } from 'react';
import '../styles/PersonalStatement.css';
import WOW from 'wowjs';
import personal_image from '../images/personal.jpg';

class PersonalStatement extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <div class='jumbotron jumbotron-personal animated fadeIn wow'>
          <h1>
            <span data-shadow-text="Text-Shadow">HELLO WORLD</span><br />
            <span data-shadow-text="Text-Shadow">I&#39;M JACK</span>
          </h1>
        </div>
        <div class='container container-personal'>
          <div class="row">
            <div class="col-md-4 animated fadeIn wow personal_image">
              <img src={personal_image}  alt='personal_image'/>
            </div>
            <div class="col-md-8 animated fadeIn wow">
              <h2>About me</h2>
              <p>
                I&#39;m Cheung Chun Lok, or I prefer you calling me Jack.
                I was graduated from The University of Hong Kong with a major of
                Electrical Engineering. You may wonder why I became a Programmer now instead of
                an Electrical Engineer. "Am I bad in Electrical Engineering ?" No. I&#39;m really good at
                Electrical Engineering, was almost the top one in Department.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalStatement;
