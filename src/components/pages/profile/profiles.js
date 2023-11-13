import React, { Component } from 'react'
import ImgProfile from "../../image/nishaln.jpg";

export default class profiles extends Component {
    render() {
        return (
            <div>
                <div className="image">
                    {/* respnsive-img from materiallize */}
                    <img className="responsive-img"
                        src={ImgProfile} alt="img" />
                </div>
                <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
                    <div className="card-content center social">
                        <h1 className="grey-text text-lighten-3 text-4xl pt-0">
                            <strong>Nishal N</strong>
                        </h1>
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
                <div className="card light-blue darken-4 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>Profile</strong>
                        </h6>
                        <hr />
                        <p className="grey-text text-lighten-3 pt">
                            Hi everyone my name is Nishal and I am a third year Computer Science Student at Canara Engineering Collge.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
