import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Rides from '@/components/Rides';
import { useRouter } from 'expo-router';

const home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  const handlePress = () => {
    router.push('/(auth)/signIn');
  };

  return (
    <View style={tw`flex-1 gap-5 p-5`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-2xl font-semibold`}>Welcome Peter</Text>
        <Pressable onPress={handlePress}>
          <Image source={require('../../assets/icons/out.png')} style={tw`h-7 w-7`} />
        </Pressable>
      </View>

      <View style={tw`bg-gray-100 rounded-full p-1 flex-row justify-start items-center`}>
        <Image source={require('../../assets/icons/search.png')} style={tw`h-5 w-5 mx-3`} />
        <TextInput
          placeholder='Where you want to go?'
          value={searchTerm}
          onChangeText={handleSearchChange}
          style={tw`text-gray-500 rounded-r-full flex-1 text-lg p-3`}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`gap-5`}>
          <Text style={tw`text-2xl font-semibold text-gray-500`}>Your current location</Text>

          <View style={tw`flex-row justify-center items-center`}>
            <Image source={require('../../assets/icons/map.png')} style={tw`h-100 w-100`} />
          </View>

          <Text style={tw`text-2xl font-semibold text-gray-500`}>Recent rides</Text>
          <Rides filter={searchTerm} />
        </View>
      </ScrollView>
    </View>
  );
};

export default home;
