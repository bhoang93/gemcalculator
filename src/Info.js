import React from 'react';
import {Animated} from 'react-animated-css';

const Info = ({showInfo, displayInfoAnimation}) => {

			const infoText = {
				padding: "20px",
				lineHeight: "120%",
				fontSize: "1em",
			}

	return(
		<div>
		<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={displayInfoAnimation}>
		{showInfo === true ?
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 center" style={infoText}>
			<p>The calculator assumes that:</p>
				<ul>
					<li>You log in every day to obtain your 1 gem from the mail.</li>
					<li>You will obtain 5 gems every 50 days and 10 gems every 100 days for your milestones.</li>
					<li>You complete all weekly Chopperman missions to obtain 2 gems every week.</li>
					<li>There is a new fortnight every 2 weeks and you get 1 gem from clearing all difficulties and 3 gems from completing the Chopperman missions.</li>
					<li>There is a new colosseum every 2 weeks and that you get 3 gems from clearing all stages.</li>
				</ul>
				</article> : <div></div>}
		</Animated>
		</div>
		)
}

export default Info;