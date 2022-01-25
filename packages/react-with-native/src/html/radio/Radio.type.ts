import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { PressableProps, View } from "react-native";

export type RadioType = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: string | number) => void;
  value: string | number;
  defaultValue: string | number;
  checked: boolean;
  label: string | number;
  native?: PressableProps & React.RefAttributes<View>;
};
