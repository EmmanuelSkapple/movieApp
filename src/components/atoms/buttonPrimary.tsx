import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { mainColors } from "../../utils/colors";
import Typography from "./Typography";

interface ButtonProps {
  onPress: Function;
  title: string;
  loading?: boolean;
}

export default function ButtonPrimary({
  onPress,
  title,
  loading = false
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.btnContainer}>
      {loading ? (
        <ActivityIndicator color={mainColors.tertiary} size={20} />
      ) : (
        <Typography variant="title" color={mainColors.tertiary}>
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColors.primary
  }
});
