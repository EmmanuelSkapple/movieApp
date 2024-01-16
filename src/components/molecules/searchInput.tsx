import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "../atoms/input";
import Icon from "react-native-vector-icons/Feather";

interface searchInputProps {
  value: string;
  onChangeText?: (text: string) => void;
}

const SearchInput = ({ value, onChangeText }: searchInputProps) => {
  return (
    <View style={styles.container}>
      <Input placeholder="Search" value={value} onChangeText={onChangeText} />
      <Icon name="search" size={20} color="#77798B" style={styles.icon} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  icon: {
    position: "absolute",
    right: 16,
    top: 18
  }
});
