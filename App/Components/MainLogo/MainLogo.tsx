import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../Constants';
type LogoProps = {
  title: string;
  size: number;
};
type Style = {
  text: TextStyle;
};
const MainLogo = (props: LogoProps): JSX.Element => {
  return (
    <View>
      <Text style={[styles.text, {fontSize: props.size}]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  text: {
    color: COLORS.primary,
    fontWeight: '600',
    marginVertical: SIZES.large,
    textAlign: 'center',
  },
});
export default MainLogo;
