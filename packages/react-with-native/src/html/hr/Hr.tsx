import React from "react";
import { HrType } from "./Hr.type";

const Hr = ({ ...props }): HrType => {
  return <hr {...props} />;
};

export default Hr;
