import React, { Component } from "react";
import { connect } from "react-redux";
import GridContainer from "./ui/GridContainer/GridContainer";
import Heads from "./Heads/Heads";
import Input from "./ui/controls/Input";
import css from "./styles/styles.scss";

const App = ({ count }) => {
  return (
    <GridContainer>
      <div className="controls">
        <h5>Number of heads</h5>
        <p>{count}</p>
        <Input />
      </div>
      <Heads count={count} />
    </GridContainer>
  );
};

function mapStateToProps(state) {
  return {
    count: state.heads.count,
  };
}

export default connect(mapStateToProps, null)(App);
