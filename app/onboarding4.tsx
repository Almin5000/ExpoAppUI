import {Image, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Button from '@/components/Button'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import { Link } from 'expo-router'

const onboarding4 = () => {
  return (
    <View  style={tw`p-5 flex-1 gap-5`}>
        <Image style={tw`h-[550px] w-[565px] 
        top-[-70px] left-[-20px] right-[-100px] mb-[-160px]` }
        source={require("../assets/images/get-started.png")}/>

        <OnboardingHeading
        text='Lets get started!'/>

        <OnboardingPara
        text='Sign up or log in to find out the best car for you'/>

        <Button text='Sign in' href='/(auth)/signIn'/>

        

        <OrText />
        <GoogleButton/>

        <View>
          <Text style={tw`text-center text-lg text-gray-500`}>
            Dont't have an Account?
              <Link href='/(auth)/signUp' style={tw`text-blue-500 font-semibold`}>  Sign up</Link>  
          </Text>
        </View>
    </View>
  )
}

export default onboarding4
