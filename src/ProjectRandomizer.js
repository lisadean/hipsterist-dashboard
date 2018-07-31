import React from 'react';
import './ProjectRandomizer.css';
import ProjectRandomizerProject from './ProjectRandomizerProject';

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

let projectSource = [
  {
    name: "Martyr2’s Mega Project List",
    url: 'https://www.dreamincode.net/forums/topic/78802-martyr2s-mega-project-ideas-list/',
  },
  {
    name: "Mega Project List",
    url: 'https://github.com/karan/Projects',
  }
];

let projectList = [
  {
    description: "Find PI to the Nth Digit - Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go.",
    source: projectSource[1],
  },
  {
    description: 'project 2',
    source: projectSource[1],
  },
  {
    description: 'project 3',
    source: projectSource[1],
  },
  {
    description: 'project 4',
    source: projectSource[1],
  },
  {
    description: 'project 5',
    source: projectSource[0],
  },
  {
    description: 'project 6',
    source: projectSource[0],
  },
  {
    description: 'project 7',
    source: projectSource[0],
  },
];