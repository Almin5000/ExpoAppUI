import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SkipText from '@/components/SkipText'
import OnBoardingImage from '@/components/OnBoardingImage'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Dotes from '@/components/Dotes'
import Button from '@/components/Button'

const onboarding1 = () => {
  return (
    <View  style={tw`p-5 flex-1 gap-5`}>
        <SkipText/>
        <OnBoardingImage source={require("../assets/images/onboarding1.png")}/>

        <OnboardingHeading
        text='The best car in your hands with Ryde'/>

        <OnboardingPara
        text='Discover the convenience of 
        finding your perfect ride with our Ryde App'/>

        <Dotes color1='blue' color2='gray' 
        color3='gray'/>

        <Button text='Next' href='/onboarding2'/>

    </View>
  )
}

export default onboarding1
