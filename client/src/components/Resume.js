import React, { Component } from "react";
import EducationalDetails from "./EducationalDetails";
import Experience from "./Experience";
import ExtraDetails from "./ExtraDetails";
import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";

export default class Resume extends Component {
  state = {
    //personal detail
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    // Education Information
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",

    // Project Information...
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",

    // Experience Information
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  };

  //previousstep
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  //nextstep
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  //handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,

      // Project Information...
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    };

    switch (step) {
      default:
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <EducationalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Projects
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Experience
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <ExtraDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}
