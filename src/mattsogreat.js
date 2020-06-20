import React from "react";
import ReactDOM from "react-dom";
import Heads from "./components/Heads/Heads"
import GridContainer from "./components/ui/GridContainer/GridContainer"
import css from "./styles/styles.scss";

let HeyMatt = () => {
  return (
    <GridContainer>
      <Heads count={40} />
    </GridContainer>
  );
};

ReactDOM.render(<HeyMatt />, document.getElementById("root"));
