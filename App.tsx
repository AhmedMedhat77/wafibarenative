import React from 'react';

import {SafeAreaView} from 'react-native';
import SignUp from './App/Screens/SignUp/SignUp';
import Profile from './App/Screens/Profile/Profile';
// import Login from './App/Screens/Login/Login';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Profile />
    </SafeAreaView>
  );
}

export default App;
