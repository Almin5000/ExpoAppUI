import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import tw from 'twrnc';

const TabIcon = ({ source }) => {
  return (
    <Image source={source} style={tw`h-10 w-10`} />
  );
};

const _layout = () => {
  return (
    <Tabs
      sceneContainerStyle={tw`bg-white`}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          margin: 15,
          height: 70,
          borderRadius: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.9)'
        }
      }}
    >
      <Tabs.Screen name='home' options={{ tabBarIcon: () => <TabIcon source={require('../../assets/icons/home.png')} /> }} />
      <Tabs.Screen name='chat' options={{ tabBarIcon: () => <TabIcon source={require('../../assets/icons/chat.png')} /> }} />
      <Tabs.Screen name='history' options={{ tabBarIcon: () => <TabIcon source={require('../../assets/icons/list.png')} /> }} />
      <Tabs.Screen name='profile' options={{ tabBarIcon: () => <TabIcon source={require('../../assets/icons/profile.png')} /> }} />
    </Tabs>
  );
};

export default _layout;
