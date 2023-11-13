import React, { Component } from 'react'
import Profile from "./profile/profiles";
import Contact from "./contact/contactt";
import About from "../../components/pages/about/About";
import Skills from "./skills/skills";
import Educations from "./education/education";
import Project from "./projects/projects";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="row sameHeight">
            <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
                <Profile />
                <Contact />
                <Skills />
            </div>
            <div className="col s12 m12 l8 white sameHeight_child">
                <About />
                <Educations />
                <Project />
            </div>
        </div>
      </section>
    );
  }
}
