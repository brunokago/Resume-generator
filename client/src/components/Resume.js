import React, { Component } from "react";
import EducationalDetails from "./EducationalDetails";
import Experience from "./Experience";
import ExtraDetails from "./ExtraDetails";
import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";

export default class Resume extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
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
    };

    switch (step) {
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
