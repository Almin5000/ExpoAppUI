import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OnboardingHeading = ({text}) => {
  return (
    <View>
      <Text style={tw`text-3xl font-bold text-center`}>
        {text}
        </Text>
    </View>
  )
}

export default OnboardingHeading