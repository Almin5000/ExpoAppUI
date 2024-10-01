import {Image, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Button from '@/components/Button'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import { Link } from 'expo-router'
import InputwithIconAndLabel from '@/components/InputwithIconAndLabel'
import Popup from '@/components/Popup'
import { ScrollView } from 'react-native'

const signIn = () => {
    const[visible, setVisible] = useState(false)
    const toggleVisible = ()=>{
      setVisible(!visible)
    }
  return (
    <View  style={tw`p-5 flex-1 gap-3`}>
        <Image style={tw`h-[550px] w-[565px] 
        top-[-70px] left-[-20px] right-[-100px] mb-[-240px]` }
        source={require("../../assets/images/get-started.png")}/>


          <Text style={tw`text-3xl font-semibold`}>
            Welcome
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            

        <InputwithIconAndLabel label='Email' placeholder='Enter email' icon={require('../../assets/icons/email.png')}/>

        <InputwithIconAndLabel label='Password' placeholder='Enter password' icon={require('../../assets/icons/lock.png')}/>

        <Text style={tw`text-blue-400 p-bottom-2 p-3`}>
          <Link href={'/signIn'}>
          Forgot your password?
          </Link>
        </Text>

            <Pressable onPress={toggleVisible}>
              <Button text='Login' href='/(tabs)/home'/>
            </Pressable>

        <OrText />
        <GoogleButton/>

        <View>
          <Text style={tw`text-center text-lg text-gray-500 p-3`}>
            Dont't have an Account?
               <Link href='/(auth)/signUp' 
                style={tw`text-blue-500 font-semibold`}> Sign up</Link>
          </Text>
        </View>

          {/* custom popup */}
          {visible &&(
            <Popup setVisible={setVisible} visible={visible}/>
          )}
          {/* custom popup */}
          </ScrollView>

    </View>
  )
}

export default signIn
