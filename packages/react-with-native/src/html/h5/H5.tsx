import React from "react";
import { H5Type } from "./H5.type";

const H5 = ({ native, ...props }: H5Type) => {
  return <h5 {...props} />;
};

export default H5;
