import React from 'react'
import './submitForm.css'

const SubmitForm = ({ setStartDate, setCurrentGems, setEndDate, onSubmit, advanced, onSubmitAdvanced }) => {
		return(
			<div>
			<p>Current number of gems: <input className="gemBox" type='number' min="0" onChange={setCurrentGems}></input></p>
			{ advanced === false ?
				<div>
				<p>Important Dates: <select name='dates'>
					<option value='0' onClick={setEndDate}>Select Date</option>
					<option value='2018-12-25' onClick={setEndDate}>Christmas 2018</option>
					<option value='2019-01-01' onClick={setEndDate}>New Year's Day 2019</option>
					<option value='2019-02-23' onClick={setEndDate}>Global 4th Anniversary</option>
					<option value='2019-05-10' onClick={setEndDate}>Japan 5th Anniversary</option>
				</select></p>
				<button onClick={onSubmit}>Calculate</button></div> :
				<div>
				<p>Start Date: <input type='date' onChange={setStartDate}></input></p>
				<p>End Date: <input type='date' min={new Date().toJSON().slice(0,10)} onChange={setEndDate}></input></p>
				<button onClick={onSubmitAdvanced}>Calculate</button>
				</div>
			}
			</div>
		)
}

export default SubmitForm;