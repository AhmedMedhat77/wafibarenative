import {
  View,
  StyleSheet,
  ViewStyle,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import MainLogo from '../../Components/MainLogo/MainLogo';
import LabeldInput from '../../Components/LabeldInput/LabeldInput';
import Button from '../../Components/Button/Button';
import {COLORS, SIZES} from '../../Constants';

type Style = {
  rowInputs: ViewStyle;
  fullInput: ViewStyle;
};

const SignUp = (): JSX.Element => {
  return (
    <ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <MainLogo title="مستعمل" size={40} />
        <MainLogo title="SignUp" size={30} />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={styles.rowInputs}>
            <LabeldInput label="FirstName" />
          </View>
          <View style={styles.rowInputs}>
            <LabeldInput label="LastName" />
          </View>
        </View>
        <KeyboardAvoidingView style={styles.fullInput}>
          <LabeldInput label="Gender" />

          <LabeldInput label="Date of birth" placeholder="7/7/1996" />

          <LabeldInput label="Email" placeholder="jhondoe@example.com" />

          <LabeldInput label="Phone Number" />

          <LabeldInput label="Password" />

          <LabeldInput label="Confirm Password" />
        </KeyboardAvoidingView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            marginVertical: SIZES.medium,
          }}>
          <TouchableOpacity>
            <Text>terms and conditions</Text>
          </TouchableOpacity>
          <Button
            title="SignUp"
            background={COLORS.secondary}
            FontWeight="bold"
            fontSize={18}
            PaddingV={SIZES.small}
            PaddingH={SIZES.large}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create<Style>({
  rowInputs: {
    width: '45%',
    marginHorizontal: 5,
  },
  fullInput: {
    width: '95%',
  },
});
export default SignUp;
