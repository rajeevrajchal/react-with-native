import { Text } from "react-native";
import React from "react";
import { BType } from "./B.type";
import tailwind from "tailwind-rn";

const B = ({ native, children, ...props }: BType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text style={[style, tailwindStyle]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default B;
