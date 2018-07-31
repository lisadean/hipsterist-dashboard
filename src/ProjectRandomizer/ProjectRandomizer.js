import React from 'react';
import './ProjectRandomizer.css';
import ProjectRandomizerProject from './ProjectRandomizerProject';
import projectList from './projectList';

class ProjectRandomizer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      source: '',
    }
  }

  handleButtonClick = () => {
    let randomIndex = Math.floor(Math.random() * projectList.length);
    this.setState({
      description: projectList[randomIndex].description,
      source: projectList[randomIndex].source,
    })
  }

  render () {

    return (
      <div className="pr-container">
        <div className="question">Can't come up with a coding project idea?</div>
        <button
          className="button"
          onClick={this.handleButtonClick}
        >
          Get A Random One
        </button>
        <ProjectRandomizerProject
          description={this.state.description}
          // source={this.state.source ? 'Source: ' + this.state.source : null}
          source={this.state.source}
        />
      </div>
    )
  }
}

export default ProjectRandomizer;