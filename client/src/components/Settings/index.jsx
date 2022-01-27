import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const Settings = () => {
  const { containerStyle } = useTheme();

  return (
    <View style={containerStyle}>
      <Text>Wrkouts</Text>
    </View>
  );
};

export default Settings;
