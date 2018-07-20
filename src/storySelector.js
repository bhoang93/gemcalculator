import React, { Component } from 'react';

class StorySelector extends Component {
	constructor( { isGlobal, setStoryGems } ) {
		super({ isGlobal, setStoryGems });
	}
	render() {
	if (this.isGlobal) { return(				
		<div>
		<p>Story Island you are Currently On:</p> <select onClick={this.setStoryGems}>
					<option value="0" className="option">Story Mode Completed</option>
					<option value="9">Coliseum Lodging to Officer’s Tower</option>
					<option value="18">Port Town Acacia to Coliseum</option>
					<option value="27">Land of Ice to Lab R-1</option>
					<option value="36">Burning Island to Research Lab Entrance</option>
					<option value="45">Execution Platform of the King to Ark of Noah</option>
					<option value="54">Deep-Sea Aphotic Zone to Ryugu Palace</option>
					<option value="62">Sabaody Archipelago Redux</option>
					<option value="71">3D2Y</option>
					<option value="85">The Bay – Oris Plaza</option>
					<option value="94">Marineford Bay</option>
					<option value="103">Impel Down</option>
					<option value="111">Amazon Lily</option>
					<option value="120">Sabaody Archipelago</option>
					<option value="128">Moria’s Mast Mansion</option>
					<option value="136">Mouth Gate – Hogback’s Mansion</option>
					<option value="147">Tower of Law/Gates of Justice</option>
					<option value="155">Enies Lobby Front Gate</option>
					<option value="164">Water Seven</option>
					<option value="172">Long Ring Long Land</option>
					<option value="184">Upper Yard ~ Ark Maxim</option>
					<option value="193">Angel Island ~ Upper Yard</option>
					<option value="202">Jaya</option>
					<option value="216">Alubarna</option>
					<option value="225">Nanohana > Rainbase</option>
					<option value="234">Drum Kingdom</option>
					<option value="243">Little Garden</option>
					<option value="252">Whiskey Peak</option>
					<option value="260">Twin Cape</option>
					<option value="269">Loguetown</option>
					<option value="273">Arlong Park</option>
					<option value="277">Baratie</option>
					<option value="281">Syrup Village</option>
					<option value="290">Orange Town</option>
					<option value="294">Shells Town</option>
					<option value="295">Alvida’s Hideout</option>
					<option value="295">Fushia Village</option>
				</select>
				</div>)
			} else { return(
					<div>
					<p>Story Island you are Currently On:</p> <select onClick={setStoryGems}>
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
				</div>)}
	}
}

export default StorySelector;