import * as React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { H6Type } from "./H6.type";

const H6 = ({ native, children, ...props }: H6Type) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default H6;
