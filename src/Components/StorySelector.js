import React from "react";

const storyGemsArray = [
  0, // 0 Fushia Village
  0, // 1 Alvida's Hideout
  8, // 2 Shells Town
  7, // 3 Orange Town
  3, // 4 Syrup Village
  3, // 5 Baratie
  3, // 6 Arlong Park
  8, // 7 Logue Town
  8, // 8 Twin Cape
  9, // 9 Whiskey Peak
  9, // 10 Little Garden
  9, // 11 Drum Island
  9, // 12 Nanohana - Rainbase
  14, // 13 Alubarna
  9, // 14 Jaya
  9, // 15 Angel Island - Upper Yard
  14, // 16 Upper Yard - Ark Maxim
  9, // 17 Water Seven
  8, // 18 Long Ring Long Land
  7, // 19 Enies Lobby Front Gate
  9, // 20 Tower of Law - Gates of Justice
  8, // 21 Mouth Gate - Hogback's Mansion
  8, // 22 Moria's Mast Mansion
  9, // 23 Sabaody Archipelago
  7, // 24 Amazon Lily
  9, // 25 Impel Down
  9, // 26 Marineford Bay
  9, // 27 The Bay - Oris Plaza
  9, // 28 3D2Y
  8, // 29 Sabaody Archipelago Redux
  9, // 30 Deep-Sea Aphotic Zone to Ryugu Palace
  9, // 31 King Neptune's Execution Site - Noah's Ark
  9, // 32 Punk Hazard - Burning Lands to Laboratory
  9, // 33 Punk Hazard - Ice Lands to First Floor Room R
  8, // 34 Dressrosa - Port Town Acacia to Coliseum
  8, // 35 Dressrosa - Coliseum Lodging to Executive Tower
  9, // 36 Dressrosa - Former King's Land to Royal Palace Top Floor
  9, // 37 Dressrosa - Royal Palace Top Floor to Town Center
  9 // 38 Mokomo Dukedom
];

const StorySelector = ({ setStoryGems, isGlobal }) => {
  const storyGemsSum = begin => {
    let end = 37;
    if (!isGlobal) {
      end = storyGemsArray.length - 1;
    }
    const gemSplit = storyGemsArray.slice(begin, end);
    const gemSum = gemSplit.reduce((total, num) => total + num, 0);
    return gemSum;
  };

  const japanStoryIslands = isGlobal => {
    if (!isGlobal) {
      return (
        <React.Fragment>
          <option value={storyGemsSum(38)}>Mokomo Dukedom</option>
          <option value={storyGemsSum(37)}>
            Dressrosa - Royal Palace Top Floor to Town Center
          </option>
        </React.Fragment>
      );
    }
  };

  return (
    <div>
      <p className="titles">Current Story Island:</p>{" "}
      <select className="storySelect" onClick={setStoryGems}>
        <option value="0" className="option">
          Story Mode Completed
        </option>
        {japanStoryIslands(isGlobal)}
        <option value={storyGemsSum(36)}>
          Dressrosa - Former King's Land to Royal Palace Top Floor
        </option>
        <option value={storyGemsSum(35)}>
          Coliseum Lodging to Officer’s Tower
        </option>
        <option value={storyGemsSum(34)}>Port Town Acacia to Coliseum</option>
        <option value={storyGemsSum(33)}>Land of Ice to Lab R-1</option>
        <option value={storyGemsSum(32)}>
          Burning Island to Research Lab Entrance
        </option>
        <option value={storyGemsSum(31)}>
          Execution Platform of the King to Ark of Noah
        </option>
        <option value={storyGemsSum(30)}>
          Deep-Sea Aphotic Zone to Ryugu Palace
        </option>
        <option value={storyGemsSum(29)}>Sabaody Archipelago Redux</option>
        <option value={storyGemsSum(28)}>3D2Y</option>
        <option value={storyGemsSum(27)}>The Bay – Oris Plaza</option>
        <option value={storyGemsSum(26)}>Marineford Bay</option>
        <option value={storyGemsSum(26)}>Impel Down</option>
        <option value={storyGemsSum(24)}>Amazon Lily</option>
        <option value={storyGemsSum(23)}>Sabaody Archipelago</option>
        <option value={storyGemsSum(22)}>Moria’s Mast Mansion</option>
        <option value={storyGemsSum(21)}>Mouth Gate – Hogback’s Mansion</option>
        <option value={storyGemsSum(20)}>Tower of Law/Gates of Justice</option>
        <option value={storyGemsSum(19)}>Enies Lobby Front Gate</option>
        <option value={storyGemsSum(18)}>Water Seven</option>
        <option value={storyGemsSum(17)}>Long Ring Long Land</option>
        <option value={storyGemsSum(16)}>Upper Yard ~ Ark Maxim</option>
        <option value={storyGemsSum(15)}>Angel Island ~ Upper Yard</option>
        <option value={storyGemsSum(14)}>Jaya</option>
        <option value={storyGemsSum(13)}>Alubarna</option>
        <option value={storyGemsSum(12)}>Nanohana Rainbase</option>
        <option value={storyGemsSum(11)}>Drum Kingdom</option>
        <option value={storyGemsSum(10)}>Little Garden</option>
        <option value={storyGemsSum(9)}>Whiskey Peak</option>
        <option value={storyGemsSum(8)}>Twin Cape</option>
        <option value={storyGemsSum(7)}>Loguetown</option>
        <option value={storyGemsSum(6)}>Arlong Park</option>
        <option value={storyGemsSum(5)}>Baratie</option>
        <option value={storyGemsSum(4)}>Syrup Village</option>
        <option value={storyGemsSum(3)}>Orange Town</option>
        <option value={storyGemsSum(2)}>Shells Town</option>
        <option value={storyGemsSum(1)}>Alvida’s Hideout</option>
        <option value={storyGemsSum(0)}>Fushia Village</option>
      </select>
    </div>
  );
};

export default StorySelector;
