import React, {Component} from 'react';
import Projects from '../components/Projects';

class ProjectPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Projects />
      </div>
    );
  }

}

export default ProjectPage
