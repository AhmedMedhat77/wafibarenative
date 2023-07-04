import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../Constants';
type ButtonPros = {
  title: string;
  background: string;
  FontWeight?: string;
  fontSize?: number;
  PaddingV: number;
  PaddingH: number;
};
type Style = {
  buttonContainer: ViewStyle;
  textStyle: TextStyle;
};
const Button = (props: ButtonPros) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: props.background,
          paddingVertical: props.PaddingV,
          paddingHorizontal: props.PaddingH,
        },
      ]}>
      <Text
        style={[
          styles.textStyle,
          {fontWeight: props.FontWeight, fontSize: props.fontSize},
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create<Style>({
  buttonContainer: {
    borderRadius: 5,
  },
  textStyle: {
    color: COLORS.white,
  },
});
export default Button;
