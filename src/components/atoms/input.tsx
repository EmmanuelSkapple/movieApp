import React from 'react'
import {KeyboardTypeOptions, StyleSheet, TextInput} from 'react-native';
import { mainColors } from '../../utils/colors';

interface inputProps {
    placeholder?: string;
    value: string;
    onChangeText?: (text: string) => void;
    maxLength?: number;
    keyboardType?: KeyboardTypeOptions;

}

export const Input = ({
    placeholder,
    value,
    onChangeText,
    maxLength=50,
    keyboardType
 } : inputProps) => {
  return (
    <TextInput
      placeholderTextColor="#77798B"
      onChangeText={onChangeText}
      maxLength={maxLength}
      value={value}
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: mainColors.secondary,
        marginTop: 8,
        padding: 8,
        borderRadius: 5,
        fontSize: 18,
        color: mainColors.tertiary,
      }
  });