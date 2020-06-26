import React, { useState } from "react";
import { bool, func, number, string } from 'prop-types';
import css from "./input.scss";

const Input = ({
  initialValue,
  hasError,
  name,
  id,
  classes
}) => {

  const [value, setValue] = useState(initialValue);

  return (
    <label>
      <input
        type="text"
        name={name}
        id={id}
        className={classes}
        value={value}
        onChange={e => setValue(e.target.value)}
        data-errors={hasError}
      />
    </label>
  );
};

Input.propTypes = {
  initialValue: number,
  hasError: bool,
  name: string,
  id: string,
  classes: string,
  type: string
};

Input.defaultProps = {
  initialValue: 10,
  hasError: false,
  name: "",
  id: "",
  classes: "string",
  type: "string"
};

export default Input;