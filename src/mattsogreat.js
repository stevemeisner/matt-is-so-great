import React from "react";
import ReactDOM from "react-dom";
import Heads from "./components/Heads/Heads"
import Input from "./components/ui/controls/Input"
import GridContainer from "./components/ui/GridContainer/GridContainer"
import css from "./styles/styles.scss";

const HeyMatt = () => {
  return (
    <GridContainer>
      {/* <Input /> */}
      <Heads count={42} />
    </GridContainer>
  );
};

ReactDOM.render(<HeyMatt />, document.getElementById("root"));
