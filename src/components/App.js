import React from "react";
import GridContainer from "./ui/GridContainer/GridContainer"
import Heads from "./Heads/Heads"
import Input from "./ui/controls/Input"
import css from "./styles/styles.scss";



const App = () => {
  return (
    <GridContainer>
      {/* <Input /> */}
      <Heads count={42} />
    </GridContainer>
  );
};

export default App;