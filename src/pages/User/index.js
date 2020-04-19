import React from 'react';
import { View, Button, Text } from 'react-native';

const User = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

User.navigationOptions = {
  title: 'User',
}


export default User;