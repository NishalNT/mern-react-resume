import React, { Component } from 'react'

export default class education extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i class="fas fa-graduation-cap"></i> EDUCATION
              </strong>
            </h6>
            <hr/>
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>BACHELOR OF EDUCATION </strong>
                    <span>2021 - 2025</span>
                  </h6>
                  <p>
                    Pursueing my Engineering at Canara Engineering College in the field of Computer Science And Engineering
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>PRE-UNIVERSITY </strong>
                    <span>2019 - 2021</span>
                  </h6>
                  <p>
                    Completed my Pre University at Viveka PU College, Kota in the field of PCMC with a grade of 90.67%
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>SECONDARY EDUCATION </strong>
                    <span>2016 - 2019</span>
                  </h6>
                  <p>
                    Completed my SSLC at Viveka English Medium School, Kota with a grade of 90.88%
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
