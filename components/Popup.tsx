import { View, Text, Image, Pressable} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Button from './Button'

const Popup = ({setVisible, visible}) => {
  return (
    <View style={tw`bg-[rgba(000,000,000,0.45)] 
        absolute top-0 bottom-0 right-0 left-0 flex-col justify-center items-center`}>
            <View style={tw`p-3 bg-white rounded-lg  flex-col gap-3
              justify-center items-center  w-100 py-10`}>

                <Image source={require('.././assets/icons/check.png')}
                style={tw`h-20 w-20 bg-green-500 rounded-full`}/>

                <Text style={tw`text-3xl font-semibold`}>
                  Verified
                </Text>

                <Text style={tw`text-lg text-gray-500 text-center px-10`}>
                You have succesfully logged into your account
                </Text>

                <Pressable onPress={()=>setVisible(!visible)}>
                <Button text='Browse Home' href='/(tabs)/home'></Button>
                </Pressable>
                
            </View>
        </View>
  )
}

export default Popup