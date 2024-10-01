import { Image, View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const InputwithIconAndLabel = ({label, placeholder, icon}) => {
  return (
    <View>
      <Text style={tw`text-lg font-semibold `}>{label}</Text>
        <View style={tw`flex-row justify-start items-center p-1 rounded-full bg-gray-100 mt-1 `}>
          <Image source={icon}
          style={tw`h-7 w-7 mx-2 `}/>
          <TextInput placeholder={placeholder}
          style={tw`text-lg text-gray-500 p-3 rounded-r-full flex-1`}/>
        </View>
    </View>
  )
}

export default InputwithIconAndLabel