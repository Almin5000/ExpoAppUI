import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from  'twrnc'


const chat = () => {
  return (
    <View style={tw`flex-1 p-5 gap-5`}>
        <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-2xl font-semibold`}>Chat List
            </Text>
            <Image source={require('../../assets/icons/out.png')} style={tw`h-7 w-7`}/>
        </View>

        <View style={tw`flex-col justify-center items-center`}>
        {/* style til billedet */}
            <Image source={require('../../assets/icons/message.png')} style={tw`h-50 w-50`} />
        {/* style til text */}
            <Text style={tw`text-3xl font-semibold`}>No Messages.</Text>
            <Text style={tw`text-lg text-gray-500 font-semibold`}>No Messages in your inbox, yet.</Text>
        </View>
    </View>
  )
}

export default chat