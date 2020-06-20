import React from "react";
import { string } from 'prop-types';
import MattsHeadGPX from '../../img/matts-head.svg';

const MattsHead = ({bgColor, color, classes}) => {
  return (
    <div className="head">
      <MattsHeadGPX className={`head matts-head ${classes}`} style={{backgroundColor: bgColor, color: color}} />
    </div>
  );
};

MattsHead.propTypes = {
  bgColor: string,
  classes: string,
  color: string
};

MattsHead.defaultProps = {
  bgColor: "pink",
  classes: "",
  color: 'rebeccapurple',
};

export default MattsHead;