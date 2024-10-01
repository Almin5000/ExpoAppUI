import {Image, View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const GoogleButton = () => {
  return (
    <View style={tw`flex-row justify-center items-center p-4 border 
    border-gray-300 rounded-full gap-2 `}>
        <Image source={require('../assets/icons/google.png')}
        style={tw`h-6 w-6`}></Image>
      <Text style={tw`text-lg font-semibold`}>
        Log in with Google</Text>
    </View>
  )
}

export default GoogleButton