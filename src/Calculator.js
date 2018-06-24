import React from 'react'
import './Calculator.css'
import {Animated} from 'react-animated-css';

const Calculator = ({ days, currentGems, goBack, isVisible }) => {

	const daily = (days) => {
		return days;
	}

	const fortnight = (days) => {
		return (Math.floor(days / 14)) * 4;
	}

	const milestone = (days) => {
		let roundedDays = Math.floor(days / 50)
		let milestoneGems = 0;
		for (let j = roundedDays; j > 0; j--) {
			j % 2 === 0 ? milestoneGems += 5 : milestoneGems += 10;
		}
		return milestoneGems
	}

	const chopperman = (days) => {
		return (Math.floor(days / 7)) * 2;
	}

	const colosseum = (days) => {
		return (Math.floor(days / 14)) * 3;
	}

	const total = (days) => {
		return daily(days) + fortnight(days) + milestone(days) + chopperman(days) + colosseum(days);
	}

	return(
		<div>
	<Animated animationIn="flipInX" isVisible={isVisible}>
		<p>{`${daily(days)} gems from daily log-in.`}</p>
		<p>{`${fortnight(days)} gems from fortnights.`}</p>
		<p>{`${milestone(days)} gems from log-in milestones.`}</p>
		<p>{`${chopperman(days)} gems from weekly Chopperman missions.`}</p>
		<p>{`${colosseum(days)} gems from new Colosseum rotations.`}</p>
			<div className="chopper">
				<img className="chopperimg" src='https://i.imgur.com/SdfzPA4.png'/>
				<p className='speech-bubble'>{`You will have at least ${Number(total(days)) + Number(currentGems)} gems in ${days} day(s).`}</p>
			</div>
		<button onClick={goBack}>Go Back</button>
	</Animated>
		</div>
		)
}

export default Calculator;