import React, { Component } from 'react'

export default class skills extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>Skills</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">HTML</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width:'70%' }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">CSS</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width:'60%' }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JavaScript</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width:'50%' }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">PHP</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width:'60%' }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">MySQL</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width:'70%' }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">REACT</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width:'40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
