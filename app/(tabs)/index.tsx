import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';

const Tab = createBottomTabNavigator();

const OlaWebView = () => (
  <WebView source={{ uri: 'https://book.olacabs.com/?pickup_name=Current%20Location&lat=12.8843776&lng=77.6208384' }} style={{ flex: 1 }} />
);

const UberWebView = () => (
  <WebView source={{ uri: 'https://m.uber.com' }} style={{ flex: 1 }} />
);

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ola"
        component={OlaWebView}
        options={{
          tabBarIcon: () => (
            <Image source={require('@/assets/images/ola-logo.png')} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Uber"
        component={UberWebView}
        options={{
          tabBarIcon: () => (
            <Image source={require('@/assets/images/uber-logo.png')} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
