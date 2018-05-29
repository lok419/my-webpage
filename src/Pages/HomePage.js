import React, { Component } from 'react';
import Heading from '../components/Heading';
import Main from '../components/Main';

class HomePage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
        <Heading />
        <Main />
      </div>
    );
  }
}

export default HomePage
