import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../Constants';
import LabeldInput from '../../Components/LabeldInput/LabeldInput';
type Style = {
  AvatarContainer: {};
  AvatarImage: {};
  AvatarActions: {};
  AvatarName: {};
  AvatarActionsIcon: {};
};

const Profile = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.AvatarContainer}>
        <Image
          source={require('../../Assets/icons/male-profile.png')}
          resizeMode="contain"
          style={styles.AvatarImage}
        />
        <View style={styles.AvatarActions}>
          <Text style={styles.AvatarName}>Ahmed Medhat</Text>
          <TouchableOpacity>
            <Image
              style={styles.AvatarActionsIcon}
              source={icons.darkEdit}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView
        style={{width: '90%', alignItems: 'center'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LabeldInput label="Somthing About you" />
        <LabeldInput label="Gender" />
        <LabeldInput label="Date of birth" placeholder="7/7/1996" />
        <View
          style={{
            height: 1,
            width: '90%',
            backgroundColor: COLORS.gray,
            marginTop: 10,
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create<Style>({
  AvatarContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  AvatarImage: {
    width: 177,
    height: 177,
  },
  AvatarActions: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  AvatarName: {
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: SIZES.large,
    fontWeight: '600',
  },
  AvatarActionsIcon: {
    marginLeft: 15,
  },
});
export default Profile;
