import React, {Component} from 'react';
import PersonalStatement from '../components/PersonalStatement'

class PersonalPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PersonalStatement />
      </div>
    );
  }

}

export default PersonalPage
