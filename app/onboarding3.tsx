import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SkipText from '@/components/SkipText'
import OnBoardingImage from '@/components/OnBoardingImage'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Dotes from '@/components/Dotes'
import Button from '@/components/Button'

const onboarding3 = () => {
  return (
    <View  style={tw`p-5 flex-1 gap-5`}>
        <SkipText/>
        <OnBoardingImage source={require("../assets/images/onboarding3.png")}/>

        <OnboardingHeading
        text='Your ride, your way. Lets get started!'/>

        <OnboardingPara
        text='Enter your destination, sit back, and let us take care of the rest'/>

        <Dotes color1='gray' color2='gray' 
        color3='blue'/>

        <Button text='Next' href='/onboarding4'/>

    </View>
  )
}

export default onboarding3
