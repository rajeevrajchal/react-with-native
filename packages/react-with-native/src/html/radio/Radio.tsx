import React from "react";
import { RadioType } from "./Radio.type";

const Toggle = ({
  native,
  onChange,
  checked,
  value,
  defaultValue,
  ...props
}: RadioType) => {
  return (
    <input
      type="radio"
      onChange={(e) => onChange(e.target.value)}
      checked={defaultValue === value}
      value={value}
      {...props}
    />
  );
};

export default Toggle;
