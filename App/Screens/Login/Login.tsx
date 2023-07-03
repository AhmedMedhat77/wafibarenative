import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import MainLogo from '../../Components/MainLogo/MainLogo';
import LabeldInput from '../../Components/LabeldInput/LabeldInput';
type Style = {
  inputsContainer: ViewStyle;
};
const Login = (): JSX.Element => {
  return (
    <SafeAreaView>
      <MainLogo title="مستعمل" size={40} />
      <MainLogo title="Login" size={30} />
      <View style={styles.inputsContainer}>
        <LabeldInput label="UserName" />
        <LabeldInput label="Password" />

        <TouchableOpacity>
          <Text> Forgot password ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create<Style>({
  inputsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
export default Login;
