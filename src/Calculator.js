import React from 'react'
import './Calculator.css'
import {Animated} from 'react-animated-css';
import chopper from './chopper.png'


const Calculator = ({ tmGemsInput, days, currentGems, goBack, isVisible, daysLoggedIn, storyModeGems, newStory, tmGems, isGlobal }) => {

	const fortnight = (days) => {
		return (Math.floor(days / 14)) * 4; // 4 gems per 2 weeks for fortnights.
	}

	const milestone = (days, loggedIn) => {
		let milestoneGems = 0; // Variable containing how many gems you get from milestone log ins.
		let extraDays = Number(loggedIn); // How many days the user has already logged in.
		let milestoneDays = Number(days); // How many days we are calculating between the two dates

			if (extraDays < 60) {

				const pre60milestones = (gem10, gem15, gem20, gem30, gem60) => { // Takes how many gems a player will reach on each milestone.
				if (extraDays + milestoneDays >= 60) { 
						milestoneGems += gem60; // How many gems will the receive? This depends on where they start from e.g. more gems if they start from day 10 then from day 30.
						extraDays -= 60; // If the player will reach 60 days, -60 days from the future calculation 
					} else if (extraDays + milestoneDays >= 30) {
						milestoneGems += gem30;
						extraDays -= 30;
					} else if (extraDays + milestoneDays >= 20) {
						milestoneGems += gem20;
						extraDays -= 20;
					} else if (extraDays + milestoneDays >= 15) {
						milestoneGems += gem15;
						extraDays -= 15;
					} else if (extraDays + milestoneDays >= 10) {
						milestoneGems += gem10;
						extraDays -= 10;
					}
				}
					if (extraDays >= 30) { // If the user has logged in more than 30 days, they can get the bonuses for day 60 but not 20, 15 or 10.
						pre60milestones(0, 0, 0, 0, 5);
					} else if (extraDays >= 20) {
						pre60milestones(0, 0, 0, 5, 10);
					} else if (extraDays >= 15) {
						pre60milestones(0, 0, 3, 8, 13);
					} else if (extraDays >= 10) {
						pre60milestones(0, 3, 6, 11, 16);
					} else if (extraDays >= 0) {
						pre60milestones(5, 8, 11, 16, 21);
					}
		}

			while (extraDays.toString().length > 2) { // This while loop will remove the first digit until there are only 2 left.
				extraDays = Number(extraDays.toString().substring(1))
			}

				if (extraDays > 50) { // This will determine how close they are to the next 50/100 day milestone.
					milestoneGems += 10;
					milestoneDays -= (100 - extraDays);
				} else if (extraDays + milestoneDays > 50) {
					milestoneGems += 5;
					milestoneDays -= (50 - extraDays);
				}

			let roundedDays = Math.floor((milestoneDays) / 50); // How many multiples of 50 do their remaining days have to determine the rest of the milestone gems.

			if (milestoneGems % 10 === 0) { // If statement to determine if the next milestone will give them 5 or 10 gems, then continue from there.
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
		return days
	}

	const colosseum = (days) => {
		return (Math.floor(days / 14)) * 3; // 3 gems every 2 weeks for new Colosseum rotations.
	}

	const newStoryGems = (days) => {
		let gems = 0;
		if (newStoryGems) {
			gems = (Math.floor(days / 112)) * 9 // 9 gems every 4 months for new story islands.
		}
		return gems;
	}

	const tmGemsCalc = (days, tmGemsInput) => {
		let gems = 0;
		if (tmGems) {
			gems = (Math.floor(days / 28)) * tmGemsInput // 20 Gems every month for new TMs.
		}
		return gems;
	}

	const total = (days, isGlobal, daysLoggedIn) => { // Find total gems.
		return days + fortnight(days) + milestone(days, daysLoggedIn) + chopperman(days) + colosseum(days) + storyModeGems + Number(currentGems) + tmGemsCalc(days, tmGemsInput) + newStoryGems(days);
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
		<p>{`${chopperman(days, isGlobal)} gems from weekly Chopperman missions.`}</p>
		<p>{`${colosseum(days)} gems from new Colosseum rotations.`}</p>
		{
			newStory === true ?
			<p>{`${newStoryGems(days)} from upcoming story islands.`}</p>
			: <p></p>
		}
		{
			tmGems === true ?
			<p>{`${tmGemsCalc(days, tmGemsInput)} from Treasure Map Mode.`}</p>
			: <p></p>
		}
			<div className="chopper">
				<img className="chopperimg" src={chopper} alt='Chopper Says'/>
				<p className='speech-bubble'>{`You will have at least ${total(days, isGlobal, daysLoggedIn)} gems in ${days} day(s).`}</p>
			</div>
		<button onClick={goBack}>Go Back</button>
	</Animated>
		</div>
		)
}

export default Calculator;