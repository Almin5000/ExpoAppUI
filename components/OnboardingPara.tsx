import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OnboardingPara = ({text}) => {
  return (
    <View>
      <Text style={tw`text-lg text-center text-gray-500 px-5`}>
        {text}
        </Text>
    </View>
  )
}

export default OnboardingPara