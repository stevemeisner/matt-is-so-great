import React from "react";
import { number } from 'prop-types';
import css from "./grid-container.scss";

const GridContainer = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

GridContainer.propTypes = {
  count: number
};

GridContainer.defaultProps = {
  count: 0,
};

export default GridContainer;