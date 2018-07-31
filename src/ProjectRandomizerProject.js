import React from 'react';
import './ProjectRandomizer.css';

class ProjectRandomizerProject extends React.Component {

  makeLink = () => {
    if(this.props.source.url) {
      return (
        <p className="project-source">
          Source:&nbsp;
          <a href={this.props.source.url}>
            {this.props.source.name}
          </a>
        </p>
      )
    }
  }

  render () {
    
    return (
      <div className="project-container">
        <p className="project-description">
          {this.props.description}
        </p>
          {this.makeLink()}
      </div>
    );
  }
}

export default ProjectRandomizerProject;