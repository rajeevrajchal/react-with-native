import { PluginComponent } from "react-with-native-form";
import TextInput, { TextInputType } from "react-with-native-text-input";

const PhoneInput: PluginComponent<PhoneInputType> = ({ extra, ...props }) => {
  const newExtra: PhoneInputType["extra"] = { ...extra, type: "phone" };
  return <TextInput {...props} extra={newExtra} />;
};

PhoneInput.defaultInitialValue = "";
export interface PhoneInputType extends TextInputType {}
export default PhoneInput;
