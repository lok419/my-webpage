import React, { Component } from 'react';
import '../styles/Navbars.css';
import { Link } from 'react-router-dom';

class Navbars extends Component {

  render() {
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand"><Link to='/my-webpage' style={{color: '#4479D4', textDecoration: 'none'}} activeStyle={{color: 'red'} }>JACK CHEUNG</Link></div>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li><Link to='/my-webpage'><span class="glyphicon">&#xe021;</span> Home</Link></li>
              <li><Link to='/my-webpage/personal'><span class="glyphicon">&#xe008;</span> Personal</Link></li>
              <li><Link to='/my-webpage/projects'><span class="glyphicon">&#xe022;</span> Projects</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Navbars;
