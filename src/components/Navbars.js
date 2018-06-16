import React, { Component } from 'react';
import '../styles/Navbars.css';
import { Link } from 'react-router-dom';

class Navbars extends Component {

  constructor(props) {
        super(props);
        this.state = {width:0, height:0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand"><Link to={process.env.PUBLIC_URL+'/'} style={{color: '#4479D4', textDecoration: 'none'}} activestyle={{color: 'red'} }>JACK CHEUNG</Link></div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li data-toggle={this.state.width <= 766 ? "collapse": ""} data-target="#myNavbar"><Link to={process.env.PUBLIC_URL+'/'}><span className="glyphicon">&#xe021;</span> Home</Link></li>
              <li data-toggle={this.state.width <= 766 ? "collapse": ""} data-target="#myNavbar"><Link to={process.env.PUBLIC_URL+'/personal'}><span className="glyphicon">&#xe008;</span> Personal</Link></li>
              <li data-toggle={this.state.width <= 766 ? "collapse": ""} data-target="#myNavbar"><Link to={process.env.PUBLIC_URL+'/projects'}><span className="glyphicon">&#xe022;</span> Projects</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbars;
