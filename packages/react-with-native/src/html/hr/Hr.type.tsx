import React from "react";
import { ViewProps } from "react-native";
export type HrType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
> & {
  native?: ViewProps;
};
