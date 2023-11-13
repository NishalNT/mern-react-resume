import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0 hide-on-med-and-down pt">
          <div className="card-content social">
            <h2 className="grey-text text-darken-3">
              <strong>Nishal N</strong>
            </h2>
            <h5 className="grey-text">
              Developer
            </h5>
            <a href="https://github.com/NishalNT">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="www.linkedin.com/in/nishal-n-thingalaya-570912229">
              <i class="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
