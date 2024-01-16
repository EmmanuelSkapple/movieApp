import React from "react";
import {
  View,
  StyleSheet,
  KeyboardTypeOptions
} from "react-native";
import Typography from "../atoms/Typography";
import { mainColors } from "../../utils/colors";
import { Input } from "./input";

interface InputLabelProps {
  setValue: (text: string) => void;
  value: string;
  placeholder: string;
  label: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
}

const InputLabel = ({
  value,
  setValue,
  placeholder,
  label,
  maxLength = 50,
  keyboardType
}: InputLabelProps) => {
  return (
    <View style={styles.contentInput}>
      {label ? <Typography variant="subtitle">{label}</Typography> : null}

      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    paddingBottom: 0,
    paddingTop: 50
  },
  contentInput: {
    width: "100%",
    marginTop: 20
  },
  input: {
    width: "100%",
    backgroundColor: mainColors.secondary,
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 16,
    alignItems: "center",
    elevation: 2,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    fontSize: 18
  }
});

export default InputLabel;
