import * as React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { H3Type } from "./H3.type";

const H3 = ({ native, children, ...props }: H3Type) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default H3;
