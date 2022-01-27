import * as React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { H1Type } from "./H1.type";

const H1 = ({ native, children, ...props }: H1Type) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default H1;
