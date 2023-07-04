import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../Constants';
import LabeldInput from '../../Components/LabeldInput/LabeldInput';
type Style = {
  AvatarContainer: ViewStyle;
  AvatarImage: ImageStyle;
  AvatarActions: ViewStyle;
  AvatarName: TextStyle;
  AvatarActionsIcon: ImageStyle;
  Announcment: TextStyle;
};

const Profile = () => {
  return (
    <ScrollView>
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
              marginTop: 5,
            }}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{width: '90%', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: SIZES.large,
              color: COLORS.primary,
              fontWeight: '600',
              marginRight: 'auto',
              marginTop: SIZES.xSmall,
            }}>
            Contact information
          </Text>
          <LabeldInput label="Phone Number" placeholder="+966532717413" />
          <Text style={{fontSize: SIZES.small, color: COLORS.gray}}>
            This phone numbers will appear to who want to contact you and other
            notfications
          </Text>
          <LabeldInput label="Email" placeholder="jhonDoe@example.com" />
          <Text
            style={{
              fontSize: SIZES.small,
              color: COLORS.gray,
              marginBottom: SIZES.small,
            }}>
            This Email address will be used to keep in touch ,We won’t share
            your private email address with other users
          </Text>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create<Style>({
  AvatarContainer: {
    alignItems: 'center',
    marginBottom: SIZES.small,
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
  Announcment: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
export default Profile;
