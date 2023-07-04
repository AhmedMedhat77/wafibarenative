import {
  Image,
  ImageStyle,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import MainLogo from '../../Components/MainLogo/MainLogo';
import LabeldInput from '../../Components/LabeldInput/LabeldInput';
import {COLORS, SIZES} from '../../Constants';
import Button from '../../Components/Button/Button';
type Style = {
  inputsContainer: ViewStyle;
  forgotPassword: ViewStyle;
  forgotText: TextStyle;
  buttonsContainer: ViewStyle;
  actionsContainer: ViewStyle;
  actionsContainerImg: ImageStyle;
  actionsContainerText: TextStyle;
  loginItem: ViewStyle;
  termsAndConditions: ViewStyle;
};

const Login = (): JSX.Element => {
  return (
    <SafeAreaView>
      <MainLogo title="مستعمل" size={40} />
      <MainLogo title="Login" size={30} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputsContainer}>
          <LabeldInput label="UserName" />
          <LabeldInput label="Password" />

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotText}> Forgot password ?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonsContainer}>
        <View style={{marginRight: 10}}>
          <Button
            title="Login"
            background={COLORS.primary}
            FontWeight="bold"
            fontSize={18}
            PaddingV={SIZES.small}
            PaddingH={SIZES.large}
          />
        </View>
        <Button
          title="SignUp"
          background={COLORS.secondary}
          FontWeight="bold"
          fontSize={18}
          PaddingV={SIZES.small}
          PaddingH={SIZES.medium}
        />
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.loginItem}>
          <Image
            source={require('../../Assets/icons/google.png')}
            resizeMode="contain"
            style={styles.actionsContainerImg}
          />
          <Text style={styles.actionsContainerText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginItem}>
          <Image
            source={require('../../Assets/icons/darkphone.png')}
            resizeMode="contain"
            style={styles.actionsContainerImg}
          />
          <Text style={styles.actionsContainerText}>Phone</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.termsAndConditions}>
        <Text style={styles.actionsContainerText}>Terms and Conditions</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create<Style>({
  inputsContainer: {
    marginTop: SIZES.medium,
    alignItems: 'center',
  },
  forgotPassword: {
    marginLeft: 120,
  },
  forgotText: {
    color: COLORS.secondary,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.xLarge,
  },
  loginItem: {
    marginHorizontal: SIZES.small,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.xxLarge,
  },
  actionsContainerImg: {
    width: 30,
    height: 50,
  },
  actionsContainerText: {
    color: COLORS.primary,
  },
  termsAndConditions: {
    marginLeft: SIZES.large,
    marginTop: 20,
  },
});
export default Login;
