import React from "react";
import { H3Type } from "./H3.type";

const H3 = ({ native, ...props }: H3Type) => {
  return <h3 {...props} />;
};

export default H3;
