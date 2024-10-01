import { Text, View } from 'react-native'
import React from 'react'
import tw, { style } from 'twrnc'
import SkipText from '@/components/SkipText'
import OnBoardingImage from '@/components/OnBoardingImage'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Dotes from '@/components/Dotes'
import Button from '@/components/Button'

const onboarding2 = () => {
  return (
    <View  style={tw`p-5 flex-1 gap-5`}>
        <SkipText/>
        <OnBoardingImage source={require("../assets/images/onboarding2.png")}/>

        <OnboardingHeading
        text='The perfect ride is just one tap away!'/>

        <OnboardingPara
        text='Your journey begins with Ryde.
        Find your ideal ride effortlessly'/>

        <Dotes color1='gray' color2='blue' 
        color3='gray'/>

        <Button text='Next' href='/onboarding3'/>

    </View>
  )
}

export default onboarding2
