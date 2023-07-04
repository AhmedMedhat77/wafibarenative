import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../Constants';

type InputProps = {
  label: string;
  placeholder?: string;
};
type Styles = {
  inputContainer: ViewStyle;
  label: TextStyle;
  input: ViewStyle;
};
const LabeldInput = (props: InputProps): JSX.Element => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </View>
  );
};
const styles = StyleSheet.create<Styles>({
  inputContainer: {
    marginBottom: 10,
    width: '100%',
  },
  label: {
    color: COLORS.primary,
    fontSize: SIZES.regular,
    marginBottom: SIZES.xSmall,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 5,
    paddingHorizontal: SIZES.small,
    height: 40,
  },
});
export default LabeldInput;
