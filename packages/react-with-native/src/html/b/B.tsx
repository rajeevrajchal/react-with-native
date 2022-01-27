import React from "react";
import { BType } from "./B.type";

const B = ({ native, ...props }: BType) => {
  return <b {...props} />;
};

export default B;
