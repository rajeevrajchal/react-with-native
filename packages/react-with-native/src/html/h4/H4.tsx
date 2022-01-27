import React from "react";
import { H4Type } from "./H4.type";

const H4 = ({ native, ...props }: H4Type) => {
  return <h4 {...props} />;
};

export default H4;
