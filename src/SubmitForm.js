import React from 'react'
import './submitForm.css'
import {Animated} from 'react-animated-css';
import Toggle from 'react-toggle';

const SubmitForm = ({ hideBoxes, allChecked, setStartDate, setCurrentGems, setEndDate, onSubmit, advanced, setDaysLoggedIn, setStoryGems, setAdvDates, advancedDates, newStoryCheck, tmGemsCheck, allProjections }) =>

{

	const importantDates = (setEndDate) => {
	return (
				<div>
				<h2>Important Dates:</h2> 
				<div className='choices'>
					<select onClick={setEndDate}>
						<option value='2018-07-20'>French 3rd Anniversary</option>
						<option value='2018-12-25'>Christmas 2018</option>
						<option value='2019-01-01'>New Year's Day 2019</option>
						<option value='2019-02-23'>Global 4th Anniversary</option>
						<option value='2019-05-10'>Japan 5th Anniversary</option>
					</select>
				</div>
				</div>
	)
	}
		return(
			<div>
			<span><p>Current number of gems:</p> <input className="gemBox" type='number' min="0" onChange={setCurrentGems}></input></span>
			<span><p>Total days logged in:</p> <input className="gemBox" type='number' min="0" onChange={setDaysLoggedIn}></input></span>
			{ advanced === false ?
				<div>
				{importantDates(setEndDate)}
				<button onClick={onSubmit}>Calculate</button>
				</div> :
				      <Animated animationIn="bounceIn">
				<div>
				<section><p>Story Island you are Currently On:</p> <select onClick={setStoryGems}>
					<option value="0" className="option">Story Mode Completed</option>
					<option value="9">Coliseum Lodging to Officer’s Tower</option>
					<option value="18">Port Town Acacia to Coliseum</option>
					<option value="27">Land of Ice to Lab R-1</option>
					<option value="36">Burning Island to Research Lab Entrance</option>
					<option value="45">Execution Platform of the King to Ark of Noah</option>
					<option value="54">Deep-Sea Aphotic Zone to Ryugu Palace</option>
					<option value="63">Sabaody Archipelago Redux</option>
					<option value="72">3D2Y</option>
					<option value="81">The Bay – Oris Plaza</option>
					<option value="90">Marineford Bay</option>
					<option value="99">Impel Down</option>
					<option value="108">Amazon Lily</option>
					<option value="117">Sabaody Archipelago</option>
					<option value="126">Moria’s Mast Mansion</option>
					<option value="135">Mouth Gate – Hogback’s Mansion</option>
					<option value="144">Tower of Law/Gates of Justice</option>
					<option value="153">Enies Lobby Front Gate</option>
					<option value="162">Water Seven</option>
					<option value="171">Long Ring Long Land</option>
					<option value="180">Upper Yard ~ Ark Maxim</option>
					<option value="199">Angel Island ~ Upper Yard</option>
					<option value="208">Jaya</option>
					<option value="217">Alubarna</option>
					<option value="226">Nanohana > Rainbase</option>
					<option value="235">Drum Kingdom</option>
					<option value="244">Little Garden</option>
					<option value="253">Whiskey Peak</option>
					<option value="262">Twin Cape</option>
					<option value="271">Loguetown</option>
					<option value="280">Arlong Park</option>
					<option value="289">Baratie</option>
					<option value="298">Syrup Village</option>
					<option value="307">Orange Town</option>
					<option value="316">Shells Town</option>
					<option value="325">Alvida’s Hideout</option>
					<option value="334">Fushia Village</option>
				</select></section>
	<div className="projections">
		<h3>Include Projections For:</h3>
		<p className="everything">Everything&nbsp;<Toggle id="allCheck" onChange={allProjections} /></p>
		{
			!hideBoxes ?
			<div><div>Future Story Islands <input type="checkbox" onChange={newStoryCheck}></input></div>
			<div>Treasure Map Mode <input type="checkbox" onChange={tmGemsCheck}></input></div></div>
			: <div></div>
		}
	</div>

<div>
  <p>Choose Own Dates</p>
   <Toggle onChange={setAdvDates} />
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
		)
}

export default SubmitForm;