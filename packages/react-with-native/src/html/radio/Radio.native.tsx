import React from "react";
import { Text, Pressable } from "react-native";
import { RadioType } from "..";

const Radio = ({ native, value, label, onChange }: RadioType) => {
  return (
    <Pressable onPress={() => onChange(value)} {...native}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Radio;
