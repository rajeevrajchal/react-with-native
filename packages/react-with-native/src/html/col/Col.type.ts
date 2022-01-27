import { ViewProps } from "react-native";
import React from "react";

export type ColType = React.DetailedHTMLProps<
  React.ColHTMLAttributes<HTMLTableColElement>,
  HTMLTableColElement
> & {
  native?: ViewProps;
};
