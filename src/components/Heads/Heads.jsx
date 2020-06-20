import React, { useState, useEffect } from "react";
import { number } from 'prop-types';
import MattsHead from '../MattsHead/MattsHead';
import css from "./heads.scss";

const Heads = ({count}) => {
  let heads = [];

  const getRandomColor = () => {
    // let colorValues = ["red", "blue", "green", "yellow", "rebeccapurple", "auqua", "orange", "black", "white", "pink"];
    // return colorValues[Math.floor(Math.random() * colorValues.length)];
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  for(let i=0; i < count; i++) {
    heads.push(
      (<MattsHead
        key={`matt-head-${i}`}
        className="bb"
        bgColor={getRandomColor()}
        color={getRandomColor()}
      />)
    );  
  }

  return(
    <>
      {heads}
    </>
  );
};

Heads.propTypes = {
  count: number,
};

Heads.defaultProps = {
  count: 10
};

export default Heads;