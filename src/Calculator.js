import React from 'react'
import './Calculator.css'
import {Animated} from 'react-animated-css';

const Calculator = ({ days, currentGems, goBack, isVisible, daysLoggedIn, storyModeGems, newStory, tmGems }) => {

	const fortnight = (days) => {
		return (Math.floor(days / 14)) * 4;
	}

	const milestone = (days, loggedIn) => {
		let milestoneGems = 0;
		let extraDays = 0;
		let milestoneDays = days;

		loggedIn > 100 ? extraDays = Number(loggedIn.toString().substring(1)) :
			extraDays = loggedIn;

			if (extraDays > 50) { 
				milestoneGems += 10;
				milestoneDays -= (100 - extraDays);
			} else if (extraDays + days > 50) {
				milestoneGems += 5;
				milestoneDays -= (50 - extraDays);
			}
			
		// else {
		// 		const daysTotal = milestoneDays + loggedIn

		// 		switch (true) {
		// 			case (daysTotal >= 60 && daysTotal < 100):
		// 				milestoneGems += 21;
		// 				milestoneDays -= 60;
		// 				console.log("case1");
		// 				break;
		// 			case (daysTotal >= 30):
		// 				milestoneGems += 16;
		// 				milestoneDays -= 30;
		// 				console.log("case2");
		// 				break;
		// 			case (daysTotal >= 15):
		// 				milestoneGems += 11;
		// 				milestoneDays -= 15;
		// 				console.log("case3");
		// 				break;
		// 			case (daysTotal >= 10):
		// 				milestoneGems += 8;
		// 				milestoneDays -= 10;
		// 				console.log("case4");
		// 				break;
		// 			case (daysTotal >= 5):
		// 				milestoneGems += 3;
		// 				milestoneDays -= 5;
		// 				console.log("case5");
		// 				break;
		// 		}
		// 	}	

		let roundedDays = Math.floor((milestoneDays) / 50);

		if (milestoneGems % 10 === 0) {
			for (let j = roundedDays; j > 0; j--) {
				j % 2 === 0 ? milestoneGems += 10 : milestoneGems += 5;
			}
		} else {
			for (let j = roundedDays; j > 0; j--) {
				j % 2 === 0 ? milestoneGems += 5 : milestoneGems += 10;
			}			
		}
		return milestoneGems
	}

	const chopperman = (days) => {
		return (Math.floor(days / 7)) * 2;
	}

	const colosseum = (days) => {
		return (Math.floor(days / 14)) * 3;
	}

	const newStoryGems = (days) => {
		let gems = 0;
		if (newStoryGems) {
			gems = (Math.floor(days / 112)) * 9
		}
		return gems;
	}

	const tmGemsCalc = (days) => {
		let gems = 0;
		if (tmGems) {
			gems = (Math.floor(days / 28)) * 5
		}
		return gems;
	}

	const total = (days) => {
		return days + fortnight(days) + milestone(days, daysLoggedIn) + chopperman(days) + colosseum(days) + storyModeGems + Number(currentGems) + tmGemsCalc(days) + newStoryGems(days);
	}

	return(
		<div>
	<Animated animationIn="flipInX" isVisible={isVisible}>
		<p>{`${days} gems from daily log-in.`}</p>
		{
			storyModeGems !== 0 ?
			<p>{`${storyModeGems} gems from story mode.`}</p>
			: <p></p>
		}
		<p>{`${fortnight(days)} gems from fortnights.`}</p>
		<p>{`${milestone(days, daysLoggedIn)} gems from log-in milestones.`}</p>
		<p>{`${chopperman(days)} gems from weekly Chopperman missions.`}</p>
		<p>{`${colosseum(days)} gems from new Colosseum rotations.`}</p>
		{
			newStory === true ?
			<p>{`${newStoryGems(days)} from upcoming story islands.`}</p>
			: <p></p>
		}
		{
			tmGems === true ?
			<p>{`${tmGemsCalc(days)} from Treasure Map Mode.`}</p>
			: <p></p>
		}
			<div className="chopper">
				<img className="chopperimg" src='https://i.imgur.com/SdfzPA4.png' alt='Chopper Says'/>
				<p className='speech-bubble'>{`You will have at least ${total(days)} gems in ${days} day(s).`}</p>
			</div>
		<button onClick={goBack}>Go Back</button>
	</Animated>
		</div>
		)
}

export default Calculator;