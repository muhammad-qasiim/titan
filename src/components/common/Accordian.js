import React, { useState } from "react";
import Collapsible from "react-collapsible";

const Accordian = ({ children, title }) => {
  return (
    <Collapsible trigger={title} transitionTime={200}>
      {children}
    </Collapsible>
  );
};

export default Accordian;
