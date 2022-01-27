import React from "react";
import { H1Type } from "./H1.type";

const H1 = ({ native, ...props }: H1Type) => {
  return <h1 {...props} />;
};

export default H1;
