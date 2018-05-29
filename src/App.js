import React, { Component } from 'react';
import Navbars from './components/Navbars';
import Page from './Pages/Page';
import './styles/App.css';


class App extends Component {
  componentDidMount(){
    document.title = "Cheung Chun Lok"
  }

  render() {
    return (
      <div>
        <Navbars />
        <Page />
      </div>
    );
  }
}

export default App;
