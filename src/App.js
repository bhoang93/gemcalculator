import React, { Component } from 'react';
import './App.css';
import SubmitForm from './SubmitForm';
import {Animated} from 'react-animated-css';
import Toggle from 'react-toggle';

const initialState = {
      days: 0,
      submitted: false,
      currentGems: '',
      startDate: '0',
      endDate: "0",
      advanced: false,
      isVisisble: false,
      showInfo: false,
      daysLoggedIn: 0,
      storyModeGems: 0,
      advancedDates: false,
      newStory: false,
      tmGems: false,
      displayInfoAnimation: false,
      allChecked: true,
      hideBoxes: false,
      isGlobal: true,
      calculator: null,
      key: 0,
      tmGemsInput: 5,
    }

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

setStartDate = (event) => { // Function to set the starting date.
  this.setState({startDate: event.target.value})
} 
setEndDate = (event) => { // Function to set the end date.
  this.setState({endDate: event.target.value})
} 
setCurrentGems = (event) => { // Function setting how many gems the user has at the moment.
  this.setState({currentGems: event.target.value})
} 

setTmGemsInput = (event) => { // Set how many gems you get per TM.
  this.setState({tmGemsInput: event.target.value})
} 

setDaysLoggedIn = (event) => { // How many days a user has already logged in so they can properly see their milestone gems.
  this.setState({daysLoggedIn: event.target.value});
} 

setStoryGems = (event) => { // How many gems they can still earn from story mode.
  this.setState({storyModeGems: Number(event.target.value)});
  console.log(this.state.isGlobal, this.state.storyModeGems)
}

setAdvDates = (event) => { // Display the option to choose own start and ending date.
  this.state.advancedDates === false ? this.setState({advancedDates:true}) : this.setState({advancedDates:false});
}

newStoryCheck = (event) => { // If user wants to add new story mode islands into the projection.
  this.state.newStory ? this.setState({newStory: false}) : this.setState({newStory: true});
}

tmGemsCheck = (event) => { // If user wants to add new TM islands into the projection.
  this.state.tmGems ? this.setState({tmGems: false}) : this.setState({tmGems: true});
}

onSubmit = () => { // Submit button on default screen

  import('./Calculator').then((Calculator) => {this.setState({ calculator: Calculator.default })

  let today = new Date().toJSON().slice(0,10);
  let days = 0;

 // Check if user wants to add their own dates.
  !this.state.advancedDates ?    
  days = Math.floor((Date.parse(this.state.endDate) - Date.parse(today)) / 86400000) 
  : days = Math.floor((Date.parse(this.state.endDate) - Date.parse(this.state.startDate)) / 86400000)


  if (this.state.startDate !== 0 && this.state.endDate !== "0") {
    this.setState({
      days: days,
      submitted: true, 
      isVisisble: true});
  }
})
}

setAdvanced = () => { // Go to advanced options toggle.
  this.state.advanced === false ? this.setState({advanced:true}) : this.setState({advanced:false});
}

goBack = () => { // Return to start screen after pressing submit.
  this.setState(initialState);
}

allProjections = () => {  // Checks all boxes and adds in all possible projections.

  !this.state.allChecked ? this.setState({allChecked: true, hideBoxes: false}) : this.setState({allChecked: false, hideBoxes: true})
  console.log(this.state.allChecked);

  this.state.allChecked ?  
  this.setState({
      newStory: true,
      tmGems: true,
  }) :
  this.setState({
      newStory: false,
      tmGems: false,
})
}

gameVersionSelect = () => {
  !this.state.isGlobal ? this.setState({isGlobal: true}) : this.setState({isGlobal: false});
  this.setState({key: Math.random()})
}

  render() {
    return (
      <div className="App">
      <h1>Rainbow Gem Calculator</h1>
      <a href="https://bhoang93.github.io/gemcalculator/">This version will no longer be updated, click here to go to updated version.</a>
      <Animated animationIn="lightSpeedIn" animationOut="fadeOut" isVisible={this.state.mainAnimation}>
        {this.state.submitted === false ?
          <div id="AdvancedFeatures">
            <button onClick={this.setAdvanced}>Advanced Options</button>
            <div id="gameVersion"><p className="titles">Game Version:</p>
              <span>Global <Toggle className="gameToggle" onChange={this.gameVersionSelect} icons={false} /> Japan </span>
            </div>
            <SubmitForm 
            setStartDate={this.setStartDate} 
            setCurrentGems={this.setCurrentGems} 
            setEndDate={this.setEndDate} 
            onSubmit={this.onSubmit}
            advanced={this.state.advanced} 
            setDaysLoggedIn={this.setDaysLoggedIn}
            setStoryGems={this.setStoryGems}
            advancedDates={this.state.advancedDates}
            setAdvDates={this.setAdvDates}
            newStoryCheck={this.newStoryCheck}
            tmGemsCheck={this.tmGemsCheck}
            allProjections={this.allProjections}
            allChecked={this.state.allChecked}
            hideBoxes={this.state.hideBoxes}
            Toggle={Toggle}
            isGlobal={this.state.isGlobal}
            setTmGemsInput={this.setTmGemsInput}
            key={this.state.key}
            tmGems={this.state.tmGems}
            />
            </div> :
          <this.state.calculator
          goBack={this.goBack} 
          days={this.state.days} 
          currentGems={this.state.currentGems} 
          isVisisble={this.state.isVisisble} 
          daysLoggedIn={this.state.daysLoggedIn}
          storyModeGems={this.state.storyModeGems}
          newStory={this.state.newStory}
          tmGems={this.state.tmGems}
          isGlobal={this.state.isGlobal}
          tmGemsInput={this.state.tmGemsInput}
          />
        }
            </Animated>
      </div>
    );
  }
}

export default App;
