import React from 'react';
import './Info.css';
import {Animated} from 'react-animated-css';

const Info = ({showInfo}) => {
	return(
		<div>
		<Animated animationIn="fadeIn" isVisible={showInfo}>
		{showInfo === true ?
			<article className="infoText br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 center">
			<p>The calculator assumes that:</p>
				<ul>
					<li>You log in every day to obtain your 1 gem from the mail.</li>
					<li>You will obtain 5 gems every 50 days and 100 gems every 10 for your milestones.</li>
					<li>You complete all weekly Chopperman missions to obtain 2 gems every week.</li>
					<li>There is a new fortnight every 2 weeks, and you get 1 gem from clearing all difficulties and 3 gems from completing the Chopperman missions.</li>
					<li>There is a new colosseum every 2 weeks, and that you get 3 gems from clearing all stages.</li>
				</ul>
				</article> : <div></div>}
		</Animated>
		</div>
		)
}

export default Info;