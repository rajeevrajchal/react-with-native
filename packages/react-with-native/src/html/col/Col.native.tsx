import { View } from "react-native";
import React from "react";
import tailwind from "tailwind-rn";
import { ColType } from "./Col.type";

const Col = ({ native, children, ...props }: ColType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <View
      style={[
        {
          display: "block",
        },
        tailwindStyle,
        style,
      ]}
      {...nativeWithoutStyle}
    >
      {children}
    </View>
  );
};

export default Col;
