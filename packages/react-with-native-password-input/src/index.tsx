import { PluginComponent } from "react-with-native-form";
import TextInput, { TextInputType } from "react-with-native-text-input";

const PasswordInput: PluginComponent<PasswordInputType> = ({
  extra,
  ...props
}) => {
  const newExtra: PasswordInputType["extra"] = { ...extra, isPassword: true };
  return <TextInput {...props} extra={newExtra} />;
};
PasswordInput.defaultInitialValue = "";

export interface PasswordInputType extends TextInputType {}
export default PasswordInput;
