import * as React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { H5Type } from "./H5.type";

const H5 = ({ native, children, ...props }: H5Type) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default H5;
