import React from "react";
import { ColType } from "./Col.type";

const Col = ({ native, ...props }: ColType) => {
  return <col {...props} />;
};

export default Col;
