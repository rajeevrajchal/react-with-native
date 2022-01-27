import { View } from "react-native";
import React from "react";
import { HrType } from "./Hr.type";
import tailwind from "tailwind-rn";

const Hr = ({ native, ...props }: HrType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className
    ? tailwind(props.className)
    : {
        borderBottomColor: "black",
        borderBottomWidth: 1,
      };

  return <View style={[style, tailwindStyle]} {...nativeWithoutStyle} />;
};

export default Hr;
