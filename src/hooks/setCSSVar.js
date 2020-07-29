// https://www.youtube.com/watch?v=_TWxDL-fbfw

import { useState } from "react";

var html = document.getElementsByTagName('html')[0];

export const setCSSVar = (value, initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setVarVal = () => {
    const cssVar = html.style.setProperty(value, varVal);
    setValue(cssVar);
  };

  return [varVal, setVarVal];
};