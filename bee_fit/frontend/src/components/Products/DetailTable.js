import React, { Component } from 'react';

class DetailTable extends Component {

    render() {
        return (
            <div className="DayView content-container">
            <div className="DetailTable">
                <div className="DetailTable__header">
                    <span className="DetailTable__header--type"></span>
                    <span className="DetailTable__header--macros">
                    <p>🧈</p>
                    <p>🥩</p>
                    <p>🍞</p>
                    </span>
                    <span className="DetailTable__header--caltotal">
                    </span>
                </div>
            </div>
            </div>
        );
    }
}

export default DetailTable;