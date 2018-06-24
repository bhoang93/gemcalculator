import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';
import SubmitForm from './SubmitForm';
import Info from './Info'
import {Animated} from 'react-animated-css';
import Tachyons from 'tachyons'

class App extends Component {
  constructor() {
    super()
    this.state = {
      days: 0,
      submitted: false,
      currentGems: '',
      startDate: '0',
      endDate: '0',
      advanced: false,
      isVisisble: false,
      showInfo: false,
    }
  }

setStartDate = (event) => {
  console.log(event.target.value)
  this.setState({startDate: event.target.value})
} 
setEndDate = (event) => {
  console.log(event.target.value)
  this.setState({endDate: event.target.value})
} 
setCurrentGems = (event) => {
  this.setState({currentGems: event.target.value})
} 
onSubmit = () => {
  var today = new Date().toJSON().slice(0,10)
  const days = Math.floor((Date.parse(this.state.endDate) - Date.parse(today)) / 86400000);
  if (this.state.endDate != 0) {
    this.setState({days: days});
    this.setState({submitted: true});
    this.setState({isVisisble: true});
  }
}

setAdvanced = () => {
  this.state.advanced === false ? this.setState({advanced:true}) : this.setState({advanced:false});
}

onSubmitAdvanced = () => {
  const days = Math.floor((Date.parse(this.state.endDate) - Date.parse(this.state.startDate)) / 86400000);
  if (this.state.startDate != 0 && this.state.endDate != 0) {
    this.setState({days: days});
    this.setState({submitted: true});
    this.setState({isVisisble: true});
  }
}

goBack = () => {
  this.setState({submitted: false});
  this.setState({currentGems: 0});
  this.setState({endDate: 0});
}

displayInfo = () => {
  this.state.showInfo ? this.setState({showInfo: false}) : this.setState({showInfo: true});
}
  render() {
    return (
      <div className="App">
      <button onClick={this.displayInfo} className='infoBox'>?</button>
      <h1>Rainbow Gem Calculator</h1>
      <Animated animationIn="lightSpeedIn">
        {this.state.submitted === false ?
          <div>
            <button onClick={this.setAdvanced}>Advanced Options</button>
            <SubmitForm 
            setStartDate={this.setStartDate} 
            setCurrentGems={this.setCurrentGems} 
            setEndDate={this.setEndDate} 
            onSubmit={this.onSubmit}
            advanced={this.state.advanced} 
            onSubmitAdvanced={this.onSubmitAdvanced}/>
            </div> :
          <Calculator goBack={this.goBack} days={this.state.days} currentGems={this.state.currentGems} isVisisble={this.state.isVisisble}/>
        }
        <Info showInfo={this.state.showInfo}/>
            </Animated>
      </div>
    );
  }
}

export default App;
