import {
  PluginInputType,
  inputClass,
  PluginComponent,
} from "react-with-native-form";
import { Input } from "react-with-native";

const TextInput: PluginComponent<TextInputType> = ({
  onChange,
  value,
  extra,
  config,
  errors,
}) => {
  config = config || {};
  const hasError = errors && errors.length > 0;

  const inputClassWithError = `${inputClass}${
    hasError
      ? config.errorClassName
        ? config.errorClassName
        : " border border-red-400"
      : ""
  }`;

  const onChangeText = (value: TextInputType["value"]) => onChange(value);
  const placeholder = extra?.placeholder;
  const maxLength = extra?.maxLength;

  return (
    <Input
      type={
        extra?.type ? extra.type : extra?.isPassword ? "password" : undefined
      }
      className={inputClassWithError}
      value={value}
      onChange={(event) => onChangeText(event.target.value)}
      placeholder={placeholder}
      maxLength={extra?.maxLength}
      autoComplete={extra?.autoComplete}
      required={extra?.required}
      disabled={extra?.disabled}
      native={{
        value,
        onChangeText,
        placeholder,
        maxLength,
        secureTextEntry: extra?.isPassword,
      }}
    />
  );
};

TextInput.defaultInitialValue = "";

export class TextInputType implements PluginInputType {
  /**
   * value type
   */
  value!: string;

  /**
   * input generic configuration
   */
  config?: {
    extraClassName?: string;
    replaceClassName?: string;
    errorClassName?: string;
  };
  /**
   * field specific configuration
   */
  extra?: {
    maxLength?: number;
    placeholder?: string;
    isPassword?: boolean;
    autoComplete?: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
  };
}

export default TextInput;
