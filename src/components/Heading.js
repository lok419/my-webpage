import React, { Component } from 'react';
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import '../styles/Heading.css';
import WOW from 'wowjs';

class Heading extends Component {

  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div class='container-heading'>
        <div class="jumbotron wow animated fadeIn">
          <div class='icon center-block wow animated zoomIn wow'>
            <img src={icon1} alt="icon1"/>
            <div class="overlay">
              <img src={icon2} alt="icon2"/>
            </div>
          </div>
          <div class='heading'>HI, I&#39;M CHEUNG CHUN LOK</div>
        </div>
      </div>
    );
  }
}

export default Heading;
