import React from "react";
import { connect } from "react-redux";
import GridContainer from "./ui/GridContainer/GridContainer";
import FunControls from "./ui/FunControls/FunControls";
import Heads from "./Heads/Heads";
import { number } from "prop-types";
import css from "./styles/styles.scss";

const App = ({ count }) => {
  return (
    <>
      <FunControls />
      <GridContainer>
        <Heads count={count} />
      </GridContainer>
    </>
  );
};

function mapStateToProps(state) {
  return {
    count: state.heads.count,
  };
}

App.propTypes = {
  count: number.isRequired,
};

export default connect(mapStateToProps, null)(App);
