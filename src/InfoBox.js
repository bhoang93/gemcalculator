import React from 'react';
import './InfoBox.css';

const InfoBox = ({showInfo, toggleModal}) => {
	return(
		<div className="infoBoxBackground">
			<div className="infoBoxModal">
			<div className="closeModalContainer"><span className="closeModal" onClick={toggleModal}>&times;</span></div>
				<div className="modalText">
					<h3>The calculator assumes that:</h3>
						<ul>
							<li>You log in every day to obtain your 1 gem from the mail.</li>
							<li>You will obtain 5 gems every 50 days and 10 gems every 100 days for your milestones if you are past day 100.</li>
							<li>You get 1 gem a day from your daily Chopperman Mission.</li>
							<li>There is a new fortnight every 2 weeks and you get 1 gem from clearing all difficulties and 3 gems from completing the Chopperman missions.</li>
							<li>There is a new colosseum every 2 weeks and that you get 3 gems from clearing all stages.</li>
							<li>There is a new story island every 4 months.</li>
							<li>There is a new Treasure Map every month.</li>
						</ul>
				</div>
			</div>
		</div>
		)
}

export default InfoBox;