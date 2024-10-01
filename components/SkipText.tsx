import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Link } from 'expo-router'


const SkipText = () => {
  return (
    <View style={tw`flex-row justify-end items-center`}>
      <Link 
      style={tw`text-lg font-semibold`}
      href="/onboarding4">
        Skip
      </Link>
    </View>
  )
}

export default SkipText