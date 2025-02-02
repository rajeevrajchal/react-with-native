import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";

export type DivType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  native?: ViewProps;
};
