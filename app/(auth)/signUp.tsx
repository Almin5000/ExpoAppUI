import {Image, Text, View, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Button from '@/components/Button'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import { Link } from 'expo-router'
import InputwithIconAndLabel from '@/components/InputwithIconAndLabel'

const signUp = () => {
  return (
    <View  style={tw`p-5 flex-1 gap-3`}>
        <Image style={tw`h-[550px] w-[565px] 
        top-[-70px] left-[-20px] right-[-100px] mb-[-240px]` }
        source={require("../../assets/images/get-started.png")}/>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw`gap-3`}>
              <Text style={tw`text-3xl font-semibold`}>
                Creat Your Account
              </Text>

            <InputwithIconAndLabel label='Name' placeholder='Enter name' icon={require('../../assets/icons/person.png')}/>

            <InputwithIconAndLabel label='Email' placeholder='Enter email' icon={require('../../assets/icons/email.png')}/>

            <InputwithIconAndLabel label='Password' placeholder='Enter password' icon={require('../../assets/icons/lock.png')}/>


            <Button text='Sign in' href='/(auth)/signIn'/>


            <OrText />
            <GoogleButton/>

            <View>
              <Text style={tw`text-center text-lg text-gray-500`}>
                Already have an Account?
                  <Link href='/(auth)/signIn' 
                    style={tw`text-blue-500 font-semibold`}> Sign in</Link>
              </Text>
            </View>
            </View>
          </ScrollView>
    </View>
  )
}

export default signUp
