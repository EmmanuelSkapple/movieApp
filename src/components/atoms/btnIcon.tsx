import React, { FC } from "react";
import { StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { mainColors } from "../../utils/colors";

interface btnIconProps {
  iconName: string;
  onPress: () => void;
  backgroundColor?: string;
  size?: number;
  containerStyle?: ViewStyle;
}

export const BtnIcon = ({
  iconName,
  size,
  onPress,
  backgroundColor,
  containerStyle={}
}: btnIconProps) => {
  return (
    <View style={[containerStyle,styles(backgroundColor, size).container]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon
          name={iconName ?? "plus"}
          size={size ? size / 2 : 20}
          color={mainColors.primary}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = (backgroundColor?: string, size?: number) =>
  StyleSheet.create({
    container: {
      width: size ?? 40,
      height: size ?? 40,
      borderRadius: 50,
      backgroundColor: backgroundColor ?? mainColors.secondary,
      alignItems: "center",
      justifyContent: "center"
    }
  });
