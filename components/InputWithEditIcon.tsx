import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const InputWithEditIcon = ({label, text}) => {
  return (
    <View style={tw`gap-1`}>
      <Text style={tw`text-lg font-semibold text-gray-500`}>{label}</Text>
      <View style={tw`bg-gray-100 p-3 rounded-full flex-row justify-between items-center`}>
        <Text style={tw`text-xl font-demibold mx-1`}>{text}</Text>
        <Image source={require('../assets/icons/Edit.png')}
        style={tw`h-10 w-10`}/>
      </View>
    </View>
  )
}

export default InputWithEditIcon