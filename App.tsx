import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>Main App</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
