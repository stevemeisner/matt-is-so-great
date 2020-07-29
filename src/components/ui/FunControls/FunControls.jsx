import React from "react";
import { connect } from "react-redux";
import { changeColumnSize, changeHeadCount } from "./../../../actions";
import { number } from "prop-types";
import Input from "../controls/Input";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import css from "./fun-controls.scss";

const FunControls = ({ count, size, changeHeadCount, changeColumnSize }) => {
  const sizeLabelFormat = (size) => {
    return `${size}vw`;
  }

  return (
    <div className="controls">
      <div className="control">
        <Typography id="discrete-slider" gutterBottom>
          Number of heads
        </Typography>
        <Slider
          defaultValue={count}
          onChange={changeHeadCount}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          min={10}
          max={300}
          value={count}
        />
      </div>
      <div className="control">
        <Typography id="discrete-slider" gutterBottom>
          Size of heads
        </Typography>
        <Slider
          defaultValue={size}
          onChange={changeColumnSize}
          aria-labelledby="discrete-slider"
          getAriaValueText={sizeLabelFormat}
          valueLabelFormat={sizeLabelFormat}
          valueLabelDisplay="auto"
          step={3}
          marks
          min={5}
          max={51}
          value={size}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.heads.count,
    size: state.grid.size,
  };
}

const mapDispatchToProps = {
  changeColumnSize,
  changeHeadCount,
};

FunControls.propTypes = {
  count: number.isRequired,
  size: number.isRequired,
};

FunControls.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FunControls);
