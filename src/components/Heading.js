import React, { Component } from 'react';
import icon1 from '../images/icon1.jpeg'
import icon2 from '../images/icon2.jpeg'
import '../styles/Heading.css';
import WOW from 'wowjs';

class Heading extends Component {

  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div className='container-heading'>
        <div className="jumbotron wow animated fadeIn">
          <div className='icon center-block wow animated zoomIn wow'>
            <img src={icon1} alt="icon1"/>
            <div className="overlay">
              <img src={icon2} alt="icon2"/>
            </div>
          </div>
          <div className='heading'>HI, I&#39;M CHEUNG CHUN LOK</div>
        </div>
      </div>
    );
  }
}

export default Heading;
