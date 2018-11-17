import React, { Component } from "react";
import "./submitForm.css";
import { Animated } from "react-animated-css";

import StorySelector from "./StorySelector";

class SubmitForm extends Component {
  render() {
    {
      const importantDates = setEndDate => {
        return (
          <div>
            <p className="titles">Important Dates:</p>
            <div className="choices">
              <select onClick={setEndDate}>
                <option value="0">---</option>
                <option value="2018-12-25">Christmas 2018</option>
                <option value="2019-01-01">New Year's Day 2019</option>
                <option value="2019-02-23">Global 4th Anniversary</option>
                <option value="2019-05-10">Japan 5th Anniversary</option>
                <option value="2019-07-20">French 4th Anniversary</option>
              </select>*
            </div>
          </div>
        );
      };

      const {
        AdvDatesText,
        tmGems,
        setTmGemsInput,
        isGlobal,
        setStartDate,
        setCurrentGems,
        setEndDate,
        onSubmit,
        advanced,
        setDaysLoggedIn,
        setStoryGems,
        setAdvDates,
        advancedDates,
        newStoryCheck,
        tmGemsCheck
      } = this.props;
      return (
        <div className="submitDiv">
          <span>
            <p className="titles">Current number of gems:</p>{" "}
            <input
              className="gemBox"
              type="number"
              min="0"
              onChange={setCurrentGems}
            />*
          </span>
          <hr />
          <span>
            <p className="titles">Total days logged in:</p>{" "}
            <input
              className="gemBox"
              type="number"
              min="0"
              onChange={setDaysLoggedIn}
            />*
          </span>
          <hr />
          {advanced === false ? (
            <div>
              {importantDates(setEndDate)}
              <button onClick={onSubmit}>Calculate</button>
            </div>
          ) : (
            <Animated animationIn="fadeIn">
              <div>
                <StorySelector
                  setStoryGems={setStoryGems}
                  isGlobal={isGlobal}
                />
                <hr />
                <div>
                  <p className="titles">Include Projections For:</p>
                  <div>
                    <div>
                      <input type="checkbox" onChange={newStoryCheck} />Future
                      Story Islands
                    </div>
                    <div>
                      <input type="checkbox" onChange={tmGemsCheck} />Treasure
                      Map Mode
                    </div>
                    {tmGems ? (
                      <p>
                        Gems Earned Per TM:<input
                          className="gemBox"
                          type="number"
                          min="0"
                          onChange={setTmGemsInput}
                        />
                      </p>
                    ) : null}
                  </div>
                </div>

                <hr />
                <br />

                <div>
                  <button onClick={setAdvDates}>{AdvDatesText()}</button>
                </div>

                {advancedDates === false ? (
                  <div>{importantDates(setEndDate)}</div>
                ) : (
                  <div>
                    <p>
                      Start Date: <input type="date" onChange={setStartDate} />
                    </p>
                    <p>
                      End Date:{" "}
                      <input
                        type="date"
                        min={new Date().toJSON().slice(0, 10)}
                        onChange={setEndDate}
                      />
                    </p>
                  </div>
                )}

                <button onClick={onSubmit}>Calculate</button>
              </div>
            </Animated>
          )}
        </div>
      );
    }
  }
}

export default SubmitForm;
