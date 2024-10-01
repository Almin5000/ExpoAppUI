import { Image, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OnBoardingImage = ({source}) => {
  return (
    <View style={tw` items-center`}>
        <Image source={source}
        style={tw`h-[350px] w-[350px]`}
        />
    </View>
  )
}

export default OnBoardingImage
