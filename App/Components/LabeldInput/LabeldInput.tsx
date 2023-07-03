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
      <TextInput style={styles.input} />
    </View>
  );
};
const styles = StyleSheet.create<Styles>({
  inputContainer: {
    width: '70%',
    marginBottom: 20,
  },
  label: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
export default LabeldInput;
