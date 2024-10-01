import { Text, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={tw`bg-blue-500 flex-1 justify-center items-center`}>
        <Link href="/onboarding1">
        <Image source={require('../assets/images/icon.png')} style={tw`h-100 w-100`}/>
        </Link>
    </View>
  );
}

export default Index;
