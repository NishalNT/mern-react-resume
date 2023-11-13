import React, { Component } from 'react'

export default class projects extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
              <i class="fa-solid fa-lightbulb"></i> PROJECTS
              </strong>
            </h6>
            <hr/>
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>LIVE-CHAT APP</strong>
                  </h6>
                  <p>
                    A live chatting app made with the PHP that has a user login and User friendly interface.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>DISCORD CLONE </strong>
                  </h6>
                  <p>
                    A discord clone made with the help of Next.Js and Socket.io that has a eye-catching interface and 
                    has the most amount of features as an actual discord has.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>FIGHTING GAME </strong>
                  </h6>
                  <p>
                    A fighting game that is made with the help of JavaScript.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
