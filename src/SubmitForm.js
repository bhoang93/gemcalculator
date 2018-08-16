import React, {Component} from 'react'
import './submitForm.css'
import {Animated} from 'react-animated-css';

class SubmitForm extends Component {

	constructor(props) {
		super() 
	}

render() {
{
	const importantDates = (setEndDate) => {
	return (
				<div>
				<p className="titles">Important Dates:</p> 
				<div className='choices'>
					<select onClick={setEndDate}>
						<option value='0'>---</option>
						<option value='2018-12-25'>Christmas 2018</option>
						<option value='2019-01-01'>New Year's Day 2019</option>
						<option value='2019-02-23'>Global 4th Anniversary</option>
						<option value='2019-05-10'>Japan 5th Anniversary</option>
						<option value='2019-07-20'>French 4th Anniversary</option>
					</select>
				</div>
				</div>
	)
	}


	const storySelector = () => {
		if (this.props.isGlobal) { return(				
		<div>
		<p className="titles">Current Story Island:</p> <select className="storySelect" onClick={setStoryGems}>
					<option value="0" className="option">Story Mode Completed</option>
					<option value="9">Dressrosa - Former King's Land to Royal Palace Top Floor</option>
					<option value="18">Coliseum Lodging to Officer’s Tower</option>
					<option value="27">Port Town Acacia to Coliseum</option>
					<option value="36">Land of Ice to Lab R-1</option>
					<option value="45">Burning Island to Research Lab Entrance</option>
					<option value="54">Execution Platform of the King to Ark of Noah</option>
					<option value="63">Deep-Sea Aphotic Zone to Ryugu Palace</option>
					<option value="72">Sabaody Archipelago Redux</option>
					<option value="80">3D2Y</option>
					<option value="94">The Bay – Oris Plaza</option>
					<option value="103">Marineford Bay</option>
					<option value="112">Impel Down</option>
					<option value="120">Amazon Lily</option>
					<option value="129">Sabaody Archipelago</option>
					<option value="137">Moria’s Mast Mansion</option>
					<option value="146">Mouth Gate – Hogback’s Mansion</option>
					<option value="156">Tower of Law/Gates of Justice</option>
					<option value="165">Enies Lobby Front Gate</option>
					<option value="174">Water Seven</option>
					<option value="183">Long Ring Long Land</option>
					<option value="192">Upper Yard ~ Ark Maxim</option>
					<option value="201">Angel Island ~ Upper Yard</option>
					<option value="210">Jaya</option>
					<option value="219">Alubarna</option>
					<option value="228">Nanohana > Rainbase</option>
					<option value="237">Drum Kingdom</option>
					<option value="246">Little Garden</option>
					<option value="255">Whiskey Peak</option>
					<option value="264">Twin Cape</option>
					<option value="269">Loguetown</option>
					<option value="282">Arlong Park</option>
					<option value="286">Baratie</option>
					<option value="290">Syrup Village</option>
					<option value="299">Orange Town</option>
					<option value="303">Shells Town</option>
					<option value="304">Alvida’s Hideout</option>
					<option value="304">Fushia Village</option>
				</select>
				</div>)
			} 
			else { return(
					<div>
					<p className="titles">Current Story Island:</p> <select className="storySelect" onClick={setStoryGems}>
					<option value="0" className="option">Story Mode Completed</option>
					<option value="8">Royal Palace Top Floor to Town Center</option>
					<option value="17">Former King's Land to Royal Palace Top Floor</option>
					<option value={9+17}>Coliseum Lodging to Officer’s Tower</option>
					<option value={18+17}>Port Town Acacia to Coliseum</option>
					<option value={27+17}>Land of Ice to Lab R-1</option>
					<option value={36+17}>Burning Island to Research Lab Entrance</option>
					<option value={45+17}>Execution Platform of the King to Ark of Noah</option>
					<option value={54+17}>Deep-Sea Aphotic Zone to Ryugu Palace</option>
					<option value={62+17}>Sabaody Archipelago Redux</option>
					<option value={71+17}>3D2Y</option>
					<option value={85+17}>The Bay – Oris Plaza</option>
					<option value={94+17}>Marineford Bay</option>
					<option value={103+17}>Impel Down</option>
					<option value={111+17}>Amazon Lily</option>
					<option value={120+17}>Sabaody Archipelago</option>
					<option value={128+17}>Moria’s Mast Mansion</option>
					<option value={136+17}>Mouth Gate – Hogback’s Mansion</option>
					<option value={147+17}>Tower of Law/Gates of Justice</option>
					<option value={155+17}>Enies Lobby Front Gate</option>
					<option value={164+17}>Water Seven</option>
					<option value={172+17}>Long Ring Long Land</option>
					<option value={184+17}>Upper Yard ~ Ark Maxim</option>
					<option value={193+17}>Angel Island ~ Upper Yard</option>
					<option value={202+17}>Jaya</option>
					<option value={216+17}>Alubarna</option>
					<option value={225+17}>Nanohana > Rainbase</option>
					<option value={234+17}>Drum Kingdom</option>
					<option value={243+17}>Little Garden</option>
					<option value={252+17}>Whiskey Peak</option>
					<option value={260+17}>Twin Cape</option>
					<option value={269+17}>Loguetown</option>
					<option value={273+17}>Arlong Park</option>
					<option value={277+17}>Baratie</option>
					<option value="298">Syrup Village</option>
					<option value="307">Orange Town</option>
					<option value="294">Shells Town</option>
					<option value="312">Alvida’s Hideout</option>
					<option value="312">Fushia Village</option> 
				</select>
				</div>)
	}
}
	const { AdvDatesText, tmGems, setTmGemsInput, isGlobal, Toggle, hideBoxes, allChecked, setStartDate, setCurrentGems, setEndDate, onSubmit, advanced, setDaysLoggedIn, setStoryGems, setAdvDates, advancedDates, newStoryCheck, tmGemsCheck, allProjections } = this.props;
		return(
			<div className="submitDiv">
			<span><p className="titles">Current number of gems:</p> <input className="gemBox" type='number' min="0" onChange={setCurrentGems}></input></span>
			<hr />
			<span><p className="titles">Total days logged in:</p> <input className="gemBox" type='number' min="0" onChange={setDaysLoggedIn}></input></span>
			<hr />
			{ advanced === false ?
				<div>
				{importantDates(setEndDate)}
				<button onClick={onSubmit}>Calculate</button>
				</div> :
				      <Animated animationIn="fadeIn">
				<div>
		{storySelector()}
		<hr />
	<div>
		<p className="titles">Include Projections For:</p>
			<div>
			<div><input type="checkbox" onChange={newStoryCheck}></input>Future Story Islands</div>
			<div><input type="checkbox" onChange={tmGemsCheck}></input>Treasure Map Mode</div>
			{
				tmGems ? <p>Gems Earned Per TM:<input className="gemBox" type='number' min="0" onChange={setTmGemsInput}></input></p> : null
			}
			</div>
	</div>

<hr /><br />

<div>
  <button onClick={setAdvDates}>{AdvDatesText()}</button>
</div>

	{
		advancedDates === false ?				
			<div>
				{importantDates(setEndDate)}
			</div>
				:
				<div>
				<p>Start Date: <input type='date' onChange={setStartDate}></input></p>
				<p>End Date: <input type='date' min={new Date().toJSON().slice(0,10)} onChange={setEndDate}></input></p>
				</div>
	}

				<button onClick={onSubmit}>Calculate</button>
				</div>
				</Animated>
			}
			</div>
		)}
}
}

export default SubmitForm;