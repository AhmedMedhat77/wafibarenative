import {
  Image,
  ImageStyle,
  KeyboardAvoidingView,
  Platform,
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
import {COLORS, SIZES, icons} from '../../Constants';
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
  pageContainer: ViewStyle;
};

const Login = (): JSX.Element => {
  return (
    <View style={styles.pageContainer}>
      <View>
        <MainLogo title="مستعمل" size={40} />
        <MainLogo title="Login" size={30} />
      </View>
      <KeyboardAvoidingView
        style={styles.inputsContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LabeldInput label="UserName" />
        <LabeldInput label="Password" />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}> Forgot password ?</Text>
        </TouchableOpacity>

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
              source={icons.google}
              resizeMode="contain"
              style={styles.actionsContainerImg}
            />
            <Text style={styles.actionsContainerText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginItem}>
            <Image
              source={icons.phoneDark}
              resizeMode="contain"
              style={styles.actionsContainerImg}
            />
            <Text style={styles.actionsContainerText}>Phone</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.termsAndConditions}>
        <Text style={styles.actionsContainerText}>Terms and Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create<Style>({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  inputsContainer: {
    marginTop: SIZES.medium,
    alignItems: 'center',
    width: '80%',
    flex: 3,
  },
  forgotPassword: {
    marginTop: SIZES.medium,
    marginLeft: 'auto',
  },
  forgotText: {
    color: COLORS.secondary,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.large,
  },
  loginItem: {
    marginHorizontal: SIZES.small,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.xxLarge,
    flex: 2,
  },
  actionsContainerImg: {
    width: 30,
    height: 50,
  },
  actionsContainerText: {
    color: COLORS.primary,
  },
  termsAndConditions: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
});
export default Login;
