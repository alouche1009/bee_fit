import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class WeekAverages extends Component {
  render() {

    return (
      <div className="WeekAverages">
        <h2>Averages </h2>
        <div className="WeekAverages__calories">
          <span>
            <span className="WeekAverages__calories--label">Calories:</span>
            <span className="WeekAverages__calories--value"></span> 
              <span className="WeekAverages__difference"></span>
          </span>
        </div>

        <div className="WeekAverages__table">
          <div className="WeekAverages__nutrient-row">
            <span className="WeekAverages__column left">
            🍞
              <span>
                  <span className="WeekAverages__difference"></span>
              </span>
            </span>
            <span className="WeekAverages__column right">
            🥕
              <span>
                  <span className="WeekAverages__difference"></span>
              </span>
            </span>
          </div>
          <div className="WeekAverages__nutrient-row">
            <span className="WeekAverages__column left">
            🧈
              <span>
                  <span className="WeekAverages__difference"></span>
              </span>
            </span>
            <span className="WeekAverages__column right">
            🍬
              <span>
                  <span className="WeekAverages__difference"></span>
              </span>
            </span>
          </div>
          <div className="WeekAverages__nutrient-row">
            <span className="WeekAverages__column left">
            🥩
              <span>
                  <span className="WeekAverages__difference"></span>
              </span>
            </span>
            <span className="WeekAverages__column right">
            🧂
              <span>
                  <span className="WeekAverages__difference"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default WeekAverages;