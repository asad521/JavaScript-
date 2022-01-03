import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';
 
const TimerButton = ({ buttonAction, buttonValue }) => (
  <div className="button-container" onClick={() => buttonAction()}>
    <p className="button-value">{buttonValue}</p>
  </div>
);



export default TimerButton;