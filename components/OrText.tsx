import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OrText = () => {
  return (
    <View style={tw`flex-row justify-between  items-center p-1`}>
        <View style={tw`h-1 w-40 bg-gray-200`}></View>
      <Text style={tw`text-lg `}>
        Or
      </Text>
      <View style={tw`h-1 w-40 bg-gray-200`}></View>

    </View>
  )
}

export default OrText