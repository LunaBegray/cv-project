import React, { Component } from 'react';
import uniqid from "uniqid";
import Display from "./components/display";


class App extends Component {
  constructor() {
    super();

    this.state = {
      allForm: [],
      name: {text: '', id: uniqid()},
      email: {text: '', id: uniqid()},
      phoneNum: {text: '', id: uniqid()},
      schoolName: {text: '', id: uniqid()},
      major: {text: '', id: uniqid()},
      date: {text: '', id: uniqid()},
      compName: {text: '', id: uniqid()},
      posTitle: {text: '', id: uniqid()},
      mainTaskJob: {text: '', id: uniqid()},
      dateStart: {text: '', id: uniqid()},
      dateEnd: {text: '', id: uniqid()},

      nameText: 'name: ',
      emailText: {text: 'email: ', id: uniqid()},
      phoneNumText: {text: 'phone number: ', id: uniqid()},
      schoolNameText: {text: 'school name: ', id: uniqid()},
      majorText: {text: 'major: ', id: uniqid()},
      dateText: {text: 'date of graduation: ', id: uniqid()},
      compNameText: {text: 'company name: ', id: uniqid()},
      posTitleText: {text: 'positions title: ', id: uniqid()},
      mainTaskJobText: {text: 'the main tasks of the job: ', id: uniqid()},
      dateStartText: {text: 'date of starting the job: ', id: uniqid()},
      dateEndText: {text: 'date of finishing the job: ', id: uniqid()},
    }
  }
  changeName = (e) => {
    this.setState({
      name: {
        text: e.target.value,
        id: this.state.name.id,
      }
    })
  }
  changeEmail = (e) => {
    this.setState({
      email: {
        text: e.target.value,
        id: this.state.email.id,
      }
    })
  }
  changePhoneNum = (e) => {
    this.setState({
      phoneNum: {
        text: e.target.value,
        id: this.state.phoneNum.id,
      }
    })
  }
  changeSchoolName = (e) => {
    this.setState({
      schoolName: {
        text: e.target.value,
        id: this.state.schoolName.id,
      }
    })
  }

  changeMajor = (e) => {
    this.setState({
      major: {
        text: e.target.value,
        id: this.state.major.id,
      }
    })
  }
  changeDate = (e) => {
    this.setState({
      date: {
        text: e.target.value,
        id: this.state.date.id,
      }
    })
  }
  changeCompName = (e) => {
    this.setState({
      compName: {
        text: e.target.value,
        id: this.state.compName.id,
      }
    })
  }
  changePosTitle = (e) => {
    this.setState({
      posTitle: {
        text: e.target.value,
        id: this.state.posTitle.id,
      }
    })
  }
  changeMainTaskJob = (e) => {
    this.setState({
      mainTaskJob: {
        text: e.target.value,
        id: this.state.mainTaskJob.id,
      }
    })
  }
  changeDateStart = (e) => {
    this.setState({
      dateStart: {
        text: e.target.value,
        id: this.state.dateStart.id,
      }
    })
  }
  changeDateEnd = (e) => {
    this.setState({
      dateEnd: {
        text: e.target.value,
        id: this.state.dateEnd.id,
      }
    })
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      allForm: []
    });
    let newArr = this.state.allForm.slice();
    newArr.push(this.state.name);
    newArr.push(this.state.email);
    newArr.push(this.state.phoneNum);
    newArr.push(this.state.schoolName);
    newArr.push(this.state.major);
    newArr.push(this.state.date);
    newArr.push(this.state.compName);
    newArr.push(this.state.posTitle);
    newArr.push(this.state.mainTaskJob);
    newArr.push(this.state.dateStart);
    newArr.push(this.state.dateEnd);
    this.setState({allForm:newArr}); 
  }
  edit = (e) => {
    e.preventDefault();
  }
  render() {
    const {allForm, name, email, phoneNum, schoolName, major, date, compName, posTitle, mainTaskJob, dateStart, dateEnd } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>Enter your name</label>
          <input id="inputName" value={name.text} onChange={this.changeName}/>
          <label>Enter your email</label>
          <input id="inputEmail" value={email.text} onChange={this.changeEmail}/>
          <label>Enter your phone number</label>
          <input id="inputPhoneNum" value={phoneNum.text} onChange={this.changePhoneNum}/>
          <label>at what school did you study?</label>
          <input id="inputSchoolName" value={schoolName.text} onChange={this.changeSchoolName}/>
          <label>what did you study?</label>
          <input id="inputMajor" value={major.text} onChange={this.changeMajor}/>
          <label>when did you graduate?</label>
          <input id="inputDate" value={date.text} onChange={this.changeDate}/>
          <label>companys you worked for in the past?</label>
          <input id="inputCompName" value={compName.text} onChange={this.changeCompName}/>
          <label>what positions did you work for?</label>
          <input id="inputPosTitle" value={posTitle.text} onChange={this.changePosTitle}/>
          <label>what were the main tasks of the jobs?</label>
          <input id="inputMainTaskJob" value={mainTaskJob.text} onChange={this.changeMainTaskJob}/>
          <label>when did you start working there?</label>
          <input id="inputDateStart" value={dateStart.text} onChange={this.changeDateStart}/>
          <label>when did you finish working there?</label>
          <input id="inputDateEnd" value={dateEnd.text} onChange={this.changeDateEnd}/>
          <button type="submit">submit</button>
        </form>
        <Display form={allForm}/>
      </div>
    );
  }
}

export default App;
