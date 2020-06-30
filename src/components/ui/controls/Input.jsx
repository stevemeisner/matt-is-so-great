import React, { useState } from "react";
import { connect } from 'react-redux';
import { bool, number, string, func } from 'prop-types';
import css from "./input.scss";

const Input = ({
  onChange,
  value,
  hasError,
  name,
  id,
  classes,
  min,
  max
}) => {

  return (
    <label data-errors={hasError}>
      <input
        type="range"
        min={min}
        max={max}
        name={name}
        id={id}
        className={classes}
        value={value}
        onChange={e => onChange(e.target.value)}
        data-errors={hasError}
      />
    </label>
  );
};

Input.propTypes = {
  onChange: func.isRequired,
  hasError: bool,
  name: string,
  id: string,
  classes: string,
  min: number,
  max: number
};

Input.defaultProps = {
  hasError: false,
  name: "numberOfHeads",
  id: "numberOfHeads",
  classes: "string",
  min: 1,
  max: 100
}

export default connect(null, null)(Input);