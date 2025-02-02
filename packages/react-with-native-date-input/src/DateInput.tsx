import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { inputClass, PluginComponent } from "react-with-native-form";
import { DateInputType } from "./types";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DateInput: PluginComponent<DateInputType> = ({ value, onChange }) => {
  return (
    <DatePicker
      selected={value}
      onChange={(date: Date) => {
        console.log("date", date);
        onChange(date);
      }}
      dateFormat="dd-MM-yyyy"
      className={inputClass}
    />
  );
};

DateInput.defaultInitialValue = null;

export default DateInput;
