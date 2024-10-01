import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import tw from 'twrnc'

const Button = ({text, href}) => {
  return (
    <View style={tw`items-center`}>
      <Link href={href}
      style={tw`text-lg p-4 w-[370px] rounded-full 
      bg-blue-500 text-center font-semibold text-white`}>
        {text}
        </Link>
    </View>
  )
}

export default Button