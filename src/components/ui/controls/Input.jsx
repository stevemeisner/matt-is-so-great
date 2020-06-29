import React, { useState } from "react";
import { connect } from 'react-redux';
import { changeHeadCount } from "./../../../actions"
import { bool, func, number, string } from 'prop-types';
import css from "./input.scss";

const Input = ({
  changeHeadCount,
  count,
  hasError,
  name,
  id,
  classes
}) => {

  return (
    <label>
      <input
        type="range"
        min="1"
        max="120"
        name={name}
        id={id}
        className={classes}
        value={count}
        onChange={e => changeHeadCount(e.target.value)}
        data-errors={hasError}
      />
    </label>
  );
};

Input.propTypes = {
  hasError: bool,
  name: string,
  id: string,
  classes: string
};

Input.defaultProps = {
  hasError: false,
  name: "numberOfHeads",
  id: "numberOfHeads",
  classes: "string"
}

function mapStateToProps(state) {
  return {
    count: state.heads.count,
  };
}

const mapDispatchToProps = {
  changeHeadCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);