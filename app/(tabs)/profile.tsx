import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import InputWithEditIcon from '@/components/InputWithEditIcon'

const profile = () => {
  return (
    <View style={tw`flex-1 gap-5 p-5`}>
      <Text style={tw`text-2xl font-semibold`}>
        Your profile</Text>

        <View style={tw`flex-row justify-center items-center`}>
        <Image source={require('../../assets/icons/profile-pic.png')}
        style={tw`h-30 w-30 rounded-full border border-2 
            border-gray-400 p-1`}/>
        </View>

        <View style={tw`bg-gray-200 rounded-lg p-6`}>
            <InputWithEditIcon label='First name' text='Peter'/>
            <InputWithEditIcon label='Last name' text='kjær'/>
            <InputWithEditIcon label='Email' text='Peter12@gmail.com'/>
            <InputWithEditIcon label='Email status' text='Verified'/>
            <InputWithEditIcon label='Phone' text='+4594837284'/>
        </View>
    </View>
  )
}

export default profile