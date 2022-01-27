import React from "react";
import { TextProps } from "react-native";

export type BType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  native?: TextProps;
};
