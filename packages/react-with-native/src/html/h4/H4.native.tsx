import * as React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { H4Type } from "./H4.type";

const H4 = ({ native, children, ...props }: H4Type) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default H4;
